const { httpStatusCode, responseForClient, errorMap } = require('../utils');
const { userService } = require('../services');
const { createToken } = require('../auth/jsonWebToken');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  const { password: _, ...userWithoutPassword } = message.dataValues;

  const token = createToken(userWithoutPassword);

  return res.status(httpStatusCode.CREATED).json({ token });
};

const getAll = async (_req, res) => {
  const { type, message } = await userService.getAll();
  
  return responseForClient(type, message, res, httpStatusCode.OK);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.getById(id);
  
  return responseForClient(type, message, res, httpStatusCode.OK);
};

const deleteUser = async (req, res) => {
  const userId = req.user.id;

  const { type, message } = await userService.deleteUser(userId);
  
  return responseForClient(type, message, res, httpStatusCode.NO_CONTENT);
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};