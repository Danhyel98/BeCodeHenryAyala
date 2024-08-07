const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const { uploadToCloudinary, uploadFields } = require("../cloudinary");
const router = express.Router();


// Register route with validation
router.post('/register', uploadFields, [
  check('firstname', 'First name is required').not().isEmpty(),
  check('lastname', 'Last name is required').not().isEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be at least 6 characters').isLength({ min: 6 })
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { firstname, lastname, username, email, github, password } = req.body;
  


  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Handle file uploads
    let profilePictureUrl = '';
    let cvUrl = '';
    console.log(req.files);
   
    if (req.files["cv"]) {
      const resultCV = await uploadToCloudinary(
        "auto",
        "jobapply-tracker/cv",
        req.files["cv"][0]["buffer"]
      );
      console.log(resultCV);
      cvUrl = resultCV.secure_url;
    }

    if (req.files["profilePicture"]) {
      const resultProfilePicture = await uploadToCloudinary(
        "auto",
        "jobapply-tracker/profilePicture",
        req.files["profilePicture"][0]["buffer"]
      );
      console.log(resultProfilePicture);
      profilePictureUrl = resultProfilePicture.secure_url;
    }
    user = new User({
      firstname,
      lastname,
      username,
      email,
      github,
      profilePicture: profilePictureUrl,
      cv: cvUrl,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();
    res.status(201).json({ msg: 'User registered successfully' });
  } catch (err) {
    console.error('Error during registration:', err.message);
    next(err); 
  }
});


// Login route with validation

router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('Validation errors:', errors.array()); // Log validation errors
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('User not found'); // Log if user is not found
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch'); // Log if password does not match
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) {
        console.log('JWT sign error:', err); // Log JWT signing error
        return next(err);
      }

      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000, // 1 hour
      });
      res.json({ msg: 'Login successful' });
    });
  } catch (err) {
    console.log('Server error:', err); // Log server errors
    next(err);
  }
});

//To go to the page login
router.get('/login', (req, res) => {
  res.render('login');
});
//to go to the page dasboard
router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});
// Change password
router.put('/password', auth, async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  try {
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid current password' });
    }

    user.password = await bcrypt.hash(newPassword, 10);
    await user.save();
    res.json({ msg: 'Password updated successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Logout route
router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.json({ msg: 'Logged out successfully' });
});

// Get profile route
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



module.exports = router;