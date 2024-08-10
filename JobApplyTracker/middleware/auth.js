const jwt = require('jsonwebtoken');

module.exports = function(req, res, next) {
  // Look for the token in the cookies
  const token = req.cookies.token;

  // If a token is found, verify it
  if (token) {
    jwt.verify(token, 'henryjobapp', (err, decodedToken) => {
      if (err) {
        console.log('Token verification error:', err.message);
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        // Attach the decoded user ID to req.user for later use
        req.user = { id: decodedToken.id };
        next();
      }
    });
  } else {
    // No token found, authorization denied
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
};
