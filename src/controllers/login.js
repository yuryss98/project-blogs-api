const { errorMap, httpStatusCode } = require('../utils');
const services = require('../services');
const { createToken } = require('../auth');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await services.login(email, password);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  if (!message) return res.status(errorMap.mapError(type)).json({ message });

  const { password: _, ...userWithoutPassword } = message.dataValues;

  const token = createToken(userWithoutPassword);

  return res.status(httpStatusCode.OK).json({ token });
};