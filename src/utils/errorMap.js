const errorMap = {
  BAD_REQUEST: 400,
  UNPROCESSABLE_ENTITY: 422,
  CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = { mapError };