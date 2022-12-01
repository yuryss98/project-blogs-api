const { User } = require('../models');
const validateInputsValue = require('./validations/validateInputsValue');

module.exports = async (email, password) => {
  try {
    const { type, message } = validateInputsValue.login(email, password);
    if (type) return { type, message };

    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };

    return { type: null, message: user };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};