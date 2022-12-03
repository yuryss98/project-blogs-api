const { httpStatusCode, responseForClient } = require('../utils');
const { categoryServices } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryServices.createCategory(name);
  
  return responseForClient(type, message, res, httpStatusCode.CREATED);
};

const getAll = async (req, res) => {
  const { type, message } = await categoryServices.getAll();

  return responseForClient(type, message, res, httpStatusCode.OK);
};

module.exports = {
  createCategory,
  getAll,
};