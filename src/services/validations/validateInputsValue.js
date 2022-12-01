const {
  loginSchema,
  createUserSchema,
  createCategorySchema,
  createBlogPostSchema,
  updateBlogPostSchema,
} = require('./schemas');

const login = (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const createUser = (newUser) => {
  const { error } = createUserSchema.validate(newUser);
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const createCategory = (name) => {
  const { error } = createCategorySchema.validate({ name });
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const createBlogPost = (newBlogPost) => {
  const { error } = createBlogPostSchema.validate(newBlogPost);
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const updateBlogPost = (newBlogPost) => {
  const { error } = updateBlogPostSchema.validate(newBlogPost);
  
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

module.exports = {
  login,
  createUser,
  createCategory,
  createBlogPost,
  updateBlogPost,
};