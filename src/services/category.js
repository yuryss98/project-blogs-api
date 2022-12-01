const { Category } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');

const createCategory = async (name) => {
  try {
    const { type, message } = validateInputValues.createCategory(name);
    if (type) return { type, message };

    const categoryCreated = await Category.create({ name });

    return { type: null, message: { ...categoryCreated.dataValues, id: categoryCreated.null } };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};

module.exports = {
  createCategory,
};