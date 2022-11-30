const jwt = require('jsonwebtoken');
require('express-async-errors');

module.exports = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  return token;
};