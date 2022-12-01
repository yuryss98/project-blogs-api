const { BlogPost, Category } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');
const validateCategoryExists = require('./validations/validateCategoryExists');

const createBlogPost = async (newBlogPost, userId) => {
  try {
    const { type, message } = validateInputValues.createBlogPost(newBlogPost);
    if (type) return { type, message };

    const categoryIsExists = await validateCategoryExists(newBlogPost.categoryIds);

    if (categoryIsExists.type) return categoryIsExists;

    const blogPostCreated = await BlogPost.create({
      title: newBlogPost.title,
      content: newBlogPost.content,
      userId,
      published: new Date(),
      updated: new Date(),
    });

    return { type: null, message: blogPostCreated };
  } catch (error) {
    console.error(error.message);

    return { type: 'CONFLICT', message: 'User already registered' };
  }
};

module.exports = {
  createBlogPost,
};