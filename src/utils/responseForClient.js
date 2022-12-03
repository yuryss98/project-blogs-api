const errorMap = require('./errorMap');

module.exports = (type, message, res, statusCode) => {
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  if (statusCode === 204) return res.status(statusCode).end();

  return res.status(statusCode).json(message);
};