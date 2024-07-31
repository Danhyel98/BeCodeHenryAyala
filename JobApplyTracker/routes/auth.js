const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const User = require('../models/User');
const auth = require('../middleware/auth');
const uploadToCloudinary = require('../cloudinary');
const fileUpload = require('express-fileupload');
const router = express.Router();

router.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


// Register route with validation
router.post('/register', [
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
  
  // Debugging
  console.log('Request body:', req.body);
  console.log('Files:', req.files);

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Handle file uploads if files are provided
    let profilePictureUrl = '';
    let cvUrl = '';

    if (req.files && req.files.profilePicture) {
      try {
        const result = await uploadToCloudinary(req.files.profilePicture.data, 'profile_pictures');
        profilePictureUrl = result.secure_url;
      } catch (uploadError) {
        console.error('Error uploading profile picture:', uploadError.message);
        return res.status(500).json({ msg: 'Error uploading profile picture' });
      }
    }

    if (req.files && req.files.cv) {
      try {
        const result = await uploadToCloudinary(req.files.cv.data, 'cvs');
        cvUrl = result.secure_url;
      } catch (uploadError) {
        console.error('Error uploading CV:', uploadError.message);
        return res.status(500).json({ msg: 'Error uploading CV' });
      }
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
    next(err); // Let error handling middleware take care of the response
  }
});
// Login route with validation
router.post('/login', [
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists()
], async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid email or password' });
    }

    const payload = { user: { id: user.id } };
    jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }, (err, token) => {
      if (err) return next(err);

      // Only set the cookie if login is successful
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 3600000, // 1 hour
      });
      res.json({ token });
    });
  } catch (err) {
    next(err);
  }
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
