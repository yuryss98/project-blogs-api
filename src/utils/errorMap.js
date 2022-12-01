const errorMap = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  UNPROCESSABLE_ENTITY: 422,
  CONFLICT: 409,
};

const mapError = (type) => errorMap[type] || 500;

module.exports = { mapError };