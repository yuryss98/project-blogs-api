const { errorMap, httpStatusCode } = require('../utils');
const { userService } = require('../services');
const { createToken } = require('../auth');

const createUser = async (req, res) => {
  const { type, message } = await userService.createUser(req.body);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  const { password: _, ...userWithoutPassword } = message.dataValues;

  const token = createToken(userWithoutPassword);

  return res.status(httpStatusCode.CREATED).json({ token });
};

module.exports = {
  createUser,
};