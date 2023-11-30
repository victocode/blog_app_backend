// auth middleware

const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  // Check if there is no token
  if (!token) {
    return res.status(401).json({ message: 'No token, authorization denied' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'secretKey');

    // Add the decoded user ID to the request
    req.userId = decoded.userId;

    // Continue to the next middleware or route handler
    next();
  } catch (err) {
    console.error('Error in authentication middleware: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = authMiddleware;