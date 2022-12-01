const { errorMap, httpStatusCode } = require('../utils');
const { categoryServices } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await categoryServices.createCategory(name);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.CREATED).json(message);
};

module.exports = {
  createCategory,
};