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

const getAll = async () => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: 'password',
      },
    });

    return { type: null, message: users };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};

const getById = async (id) => {
  try {
    const user = await User.findByPk(id, {
      attributes: {
        exclude: 'password',
      },
    });

    if (!user) return { type: 'NOT_FOUND', message: 'User does not exist' };

    return { type: null, message: user };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};

const deleteUser = async (id) => {
  try {
    await User.destroy({ where: { id } });

    return { type: null, message: '' };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};