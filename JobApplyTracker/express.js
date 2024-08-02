// express.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const path = require('path');
const jobRoutes = require('./routes/jobs');
const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/errorHandler');


const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());


// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


mongoose.connect(process.env.MONGO_URI);


// Home route to render home.ejs
app.get('/', (req, res) => {
  res.render('home');
});


// Auth routes
app.use('/', authRoutes);

// Job routes
app.use('/', jobRoutes);


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


