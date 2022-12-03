const { errorMap, httpStatusCode } = require('../utils');
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
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.OK).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await userService.getById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.OK).json(message);
};

const deleteUser = async (req, res) => {
  const userId = req.user.id;

  const { type, message } = await userService.deleteUser(userId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.NO_CONTENT).end();
};

module.exports = {
  createUser,
  getAll,
  getById,
  deleteUser,
};