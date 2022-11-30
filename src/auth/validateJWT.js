const jwt = require('jsonwebtoken');
require('express-async-errors');
const { httpStatusCode } = require('../utils');

const secretKey = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
const token = req.header('Authorization');

  if (!token) {
    return res.status(httpStatusCode.NOT_FOUND).json({ error: 'Token não encontrado' });
  }

  const decoded = jwt.verify(token, secretKey);

  const { data: { email } } = decoded;

  req.email = email;

  next();
};