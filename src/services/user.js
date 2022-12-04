const { User } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');
const { SERVICE_SUCESSFULL, UNSUCCESSFUL_SERVICE } = require('./helpers');
const { createToken } = require('../auth/jsonWebToken');

const login = async ({ email, password }) => {
  try {
    const { type, message } = validateInputValues.login(email, password);
    if (type) return { type, message };

    const user = await User.findOne({
      where: {
        email,
        password,
      },
    });

    if (!user) return { type: 'BAD_REQUEST', message: 'Invalid fields' };

    const { password: _, ...userWithoutPassword } = user.dataValues;

    const token = createToken(userWithoutPassword);

    return { ...SERVICE_SUCESSFULL, message: { token } };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const createUser = async (newUser) => {
  try {
    const { type, message } = validateInputValues.createUser(newUser);
    if (type) return { type, message };

    const userCreated = await User.create({ ...newUser });

    const { password: _, ...userWithoutPassword } = userCreated.dataValues;

    const token = createToken(userWithoutPassword);

    return { ...SERVICE_SUCESSFULL, message: { token } };
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

    return { ...SERVICE_SUCESSFULL, message: users };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
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

    return { ...SERVICE_SUCESSFULL, message: user };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const deleteUser = async (id) => {
  try {
    await User.destroy({ where: { id } });

    return SERVICE_SUCESSFULL;
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

module.exports = {
  login,
  createUser,
  getAll,
  getById,
  deleteUser,
};