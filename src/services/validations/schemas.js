const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
}).required().messages({
  'any.required': 'Some required fields are missing',
  'string.empty': 'Some required fields are missing',
  'string.base': '{#label} must be the type text',
});

module.exports = {
  loginSchema,
};