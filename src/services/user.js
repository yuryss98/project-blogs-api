const { User } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');

const createUser = async (newUser) => {
  try {
    const { type, message } = validateInputValues.createUser(newUser);
    if (type) return { type, message };

    const userCreated = await User.create({ ...newUser });

    return { type: null, message: userCreated };
  } catch (error) {
    console.error(error.message);

    return { type: 'CONFLICT', message: 'User already registered' };
  }
};

module.exports = {
  createUser,
};