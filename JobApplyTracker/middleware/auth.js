// middleware/auth.js
const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Look for the token in the Authorization header (commonly used format)
  const token = req.cookies.token; 

  if (token) {
    jwt.verify(token, 'henryjobapp', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = { id: decodedToken.id }; // Attach user ID to req.user
        next();
      }
    });
  } else {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

};
