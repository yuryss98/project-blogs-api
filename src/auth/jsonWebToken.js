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
  const token = req.header('Authorization');
  
    if (!token) {
      return res.status(httpStatusCode.NOT_FOUND).json({ error: 'Token não encontrado' });
    }
  
    const decoded = jwt.verify(token, SECRET_KEY);
  
    const { data: { email } } = decoded;
  
    req.email = email;
  
    next();
  };

module.exports = {
  createToken,
  validateToken,
};