const { User } = require('../models');
require('express-async-errors');
const validations = require('./validations/validateInputsValue');

module.exports = async (email, password) => {
  const { type, message } = validations.validateInputValues(email, password);
  if (type) return { type, message };

  const user = await User.findOne({
    where: {
      email,
      password,
    },
  });

  if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };

  return { type: null, message: user };
};