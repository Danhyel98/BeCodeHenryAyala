const express = require('express');
const auth = require('../middleware/auth');
const Job = require('../models/Job');
const router = express.Router();

// GET /dashboard - Display dashboard with jobs
router.get('/dashboard', auth, async (req, res) => {
  try {
    const jobs = await Job.find({ user: req.user.id }); // Filter jobs by the authenticated user
    res.render('dashboard', { jobs }); // Pass jobs to the EJS template
  } catch (err) {
    console.error('Error fetching jobs:', err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
