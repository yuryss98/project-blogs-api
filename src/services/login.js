const { User } = require('../models');
const validateInputsValues = require('./validations/validateInputsValue');
const { SERVICE_SUCESSFULL, UNSUCCESSFUL_SERVICE } = require('./helpers');

module.exports = async (email, password) => {
  try {
    const { type, message } = validateInputsValues.login(email, password);
    if (type) return { type, message };

    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };

    return { ...SERVICE_SUCESSFULL, message: user };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};