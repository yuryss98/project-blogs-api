const { sucessfulResponse, errorResponseMapper } = require('../utils/httpStatusCode');
const { loginService } = require('../services');
const { createToken } = require('../auth/jsonWebToken');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await loginService(email, password);
  if (type) return res.status(errorResponseMapper(type)).json({ message });

  const { password: _, ...userWithoutPassword } = message.dataValues;

  const token = createToken(userWithoutPassword);

  return res.status(sucessfulResponse.OK).json({ token });
};