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
      github, // Handle GitHub field
      profilePicture: profilePictureUrl,
      cv: cvUrl,
      password: await bcrypt.hash(password, 10),
    });

    await user.save();

    // Automatically log in the user after registration
    const payload = { id: user.id };
    jwt.sign(
      payload,
      'henryjobapp', // Use environment variable in production
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;

        // Set the token in a cookie
        res.cookie('token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600000 // 1 hour
        });

        // Redirect to dashboard
        res.redirect('/dashboard');
      }
    );

  } catch (err) {
    console.error('Error during registration:', err.message);
    next(err);
  }
});
// Register page
router.get('/register', (req, res) => {
  res.render('register');
});

// Login route with validation
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  console.log('Received login request');
  console.log('Request Body:', req.body);

  try {
    // Find user by email
    let user = await User.findOne({ email });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch');
      return res.status(400).json({ msg: 'Invalid Credentials' });
    }

    // Create a JWT payload
    const payload = {
      id: user.id
    };

    // Sign the token
    jwt.sign(
      payload,
      'henryjobapp', // This should be an environment variable in production
      { expiresIn: '1h' },
      (err, token) => {
        if (err) throw err;

        // Set the token in a cookie
        res.cookie('token', token, {
          httpOnly: true, // Secure flag should be used in production for HTTPS
          secure: process.env.NODE_ENV === 'production',
          maxAge: 3600000 // 1 hour
        });

        // Save the user session
        req.session.user = {
          id: user.id,
          email: user.email,
          // Add any other user details you need
        };

        console.log('Login successful, session created:', req.session.user);
        res.status(200).json({ msg: 'Login successful' });
      }
    );
  } catch (err) {
    console.error('Error during login:', err.message);
    res.status(500).json({ msg: 'Server Error' });
  }
});

//To go to the page login
router.get('/login', (req, res) => {
  res.render('login');
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
router.get('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        console.error('Error destroying session:', err);
        return res.status(500).json({ msg: 'Failed to log out.' });
      }

      // Clear the cookie if needed
      res.clearCookie('token'); // Replace 'connect.sid' with your session cookie name if different

      // Redirect to the login page
      res.redirect('/login');
    });
  } else {
    res.redirect('/login'); // Redirect if there's no session to destroy
  }
});
// Get profile route
router.get('/profile', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ msg: 'User not found' });
    }
    res.render('profile', { user }); 
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});



module.exports = router;
