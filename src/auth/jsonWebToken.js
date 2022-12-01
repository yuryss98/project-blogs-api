const jwt = require('jsonwebtoken');
const { httpStatusCode } = require('../utils');

const SECRET_KEY = process.env.JWT_SECRET;

const createToken = (user) => {
  const token = jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: '1h',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = async (req, res, next) => {
  try {
    const token = req.header('Authorization');
  
    if (!token) {
      return res.status(httpStatusCode.UNAUTHORIZED).json({ message: 'Token not found' });
    }
  
    const decoded = jwt.verify(token, SECRET_KEY);
  
    const { data } = decoded;

    req.user = data;
  
    next();
  } catch (error) {
    console.error(error.message);

    return res.status(httpStatusCode.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
  };

module.exports = {
  createToken,
  validateToken,
};