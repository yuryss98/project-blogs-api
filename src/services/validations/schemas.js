const Joi = require('joi');

const customMessage = 'Some required fields are missing';

const loginSchema = Joi.object({
  email: Joi.string().min(1).required(),
  password: Joi.string().min(1).required(),
}).required().messages({
  'any.required': customMessage,
  'string.empty': customMessage,
  'string.base': '{#label} must be the type text',
});

const createUserSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().min(1).required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
});

const createCategorySchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const createBlogPostSchema = Joi.object({
  title: Joi.string().min(1).required(),
  content: Joi.string().min(1).required(),
  categoryIds: Joi.array().items(Joi.number()).min(1).required(),
}).required().messages({
  'any.required': customMessage,
  'string.empty': customMessage,
  'array.min': customMessage,
});

module.exports = {
  loginSchema,
  createUserSchema,
  createCategorySchema,
  createBlogPostSchema,
};