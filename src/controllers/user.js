const { httpStatusCode, responseForClient } = require('../utils');
const { userService } = require('../services');

const { sucessfulResponse } = httpStatusCode;

const login = async (req, res) => {
  const { type, message } = await userService.login(req.body);

  responseForClient(type, message, res, sucessfulResponse.OK);
};

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);

  responseForClient(type, message, res, sucessfulResponse.CREATED);
};

const getAll = async (_req, res) => {
  const { type, message } = await userService.getAll();
  
  return responseForClient(type, message, res, sucessfulResponse.OK);
};

const getById = async (req, res) => {
  const { type, message } = await userService.getById(req.params.id);
  
  return responseForClient(type, message, res, sucessfulResponse.OK);
};

const deleteUser = async (req, res) => {
  const { type, message } = await userService.deleteUser(req.user.id);
  
  return responseForClient(type, message, res, sucessfulResponse.NO_CONTENT);
};

module.exports = {
  login,
  createUser,
  getAll,
  getById,
  deleteUser,
};