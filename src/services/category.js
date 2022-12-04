const { Category } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');
const { SERVICE_SUCESSFULL, UNSUCCESSFUL_SERVICE } = require('./helpers');

const createCategory = async ({ name }) => {
  try {
    const { type, message } = validateInputValues.createCategory(name);
    if (type) return { type, message };

    const categoryCreated = await Category.create({ name });

    return { ...SERVICE_SUCESSFULL, message: categoryCreated };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const getAll = async () => {
  try {
    const categories = await Category.findAll();

    return { ...SERVICE_SUCESSFULL, message: categories };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

module.exports = {
  createCategory,
  getAll,
};