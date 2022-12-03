const { httpStatusCode, responseForClient } = require('../utils');
const { categoryServices } = require('../services');

const { sucessfulResponse } = httpStatusCode;

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryServices.createCategory(name);
  
  return responseForClient(type, message, res, sucessfulResponse.CREATED);
};

const getAll = async (_req, res) => {
  const { type, message } = await categoryServices.getAll();

  return responseForClient(type, message, res, sucessfulResponse.OK);
};

module.exports = {
  createCategory,
  getAll,
};