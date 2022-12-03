const {
  loginSchema,
  createUserSchema,
  createCategorySchema,
  createBlogPostSchema,
  updateBlogPostSchema,
} = require('./schemas');

const errorIsExists = (error) => {
  if (error) return { type: 'BAD_REQUEST', message: error.message };

  return { type: null, message: '' };
};

const login = (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  
  return errorIsExists(error);
};

const createUser = (newUser) => {
  const { error } = createUserSchema.validate(newUser);
  
  return errorIsExists(error);
};

const createCategory = (name) => {
  const { error } = createCategorySchema.validate({ name });
  
  return errorIsExists(error);
};

const createBlogPost = (newBlogPost) => {
  const { error } = createBlogPostSchema.validate(newBlogPost);
  
  return errorIsExists(error);
};

const updateBlogPost = (newBlogPost) => {
  const { error } = updateBlogPostSchema.validate(newBlogPost);
  
  return errorIsExists(error);
};

module.exports = {
  login,
  createUser,
  createCategory,
  createBlogPost,
  updateBlogPost,
};