const { httpStatusCode, responseForClient } = require('../utils');
const { userService } = require('../services');

const { sucessfulResponse, errorResponseMapper } = httpStatusCode;

const login = async (req, res) => {
  const { type, message } = await userService.login(req.body);
  if (type) return res.status(errorResponseMapper(type)).json({ message });

  return res.status(sucessfulResponse.OK).json(message);
};

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(errorResponseMapper(type)).json({ message });

  return res.status(sucessfulResponse.CREATED).json(message);
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