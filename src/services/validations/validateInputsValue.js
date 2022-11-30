const { loginSchema } = require('./schemas');

const checkErrorType = (error) => {
  if (error.message.includes('required')) {
    return { type: 'BAD_REQUEST', message: error.message };
  }

  return { type: 'UNPROCESSABLE_ENTITY', message: error.message };
};

const validateInputValues = (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  
  if (error) return checkErrorType(error);

  return { type: null, message: '' };
};

module.exports = {
  validateInputValues,
};