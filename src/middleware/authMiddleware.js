const jwt = require('jsonwebtoken');
const config = require('../../config/config');

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token,"tttttttttt")
  if (!token) {
    return res.status(401).json({
      status: 401,
      message: 'Unauthorized',
    });
  }

  jwt.verify(token, config.jwt.secret, (err, user) => {
    if (err) {
      return res.status(403).json({
        status: 403,
        message: 'Forbidden',
      });
    }

    req.user = user;
    next();
  });
};