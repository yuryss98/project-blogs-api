const { BlogPost, PostCategory, Category, User } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');
const validateCategoryExists = require('./validations/validateCategoryExists');

const createCategoryPost = async (postId, categoryIds) => {
  const PostCategoryIds = categoryIds.map((categoryId) => ({
      postId,
      categoryId,
    }));

  await PostCategory.bulkCreate(PostCategoryIds);
};

const blogPostCreate = async ({ title, content, categoryIds }, userId) => {
  const blogPostCreated = await BlogPost.create({
    title,
    content,
    userId,
  });

  const { dataValues: { id } } = blogPostCreated;

  await createCategoryPost(id, categoryIds);

  return blogPostCreated;
};

const createBlogPost = async (newBlogPost, userId) => {
  try {
    const { type, message } = validateInputValues.createBlogPost(newBlogPost);
    if (type) return { type, message };

    const categoryIsExists = await validateCategoryExists(newBlogPost.categoryIds);
    if (categoryIsExists.type) return categoryIsExists;

    const blogPostCreated = await blogPostCreate(newBlogPost, userId);

    return { type: null, message: blogPostCreated };
  } catch (error) {
    console.error(error.message);

    return { type: 'CONFLICT', message: 'User already registered' };
  }
};

const getAllPostByUsers = async () => {
  try {
    const data = await BlogPost.findAll({
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' },
      ],
    });
  
    return { type: null, message: data };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};

const getPostById = async (id) => {
  try {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories' },
      ],
    });

    if (post) return { type: null, message: post };

    return { type: 'NOT_FOUND', message: 'Post does not exist' };
  } catch (error) {
    console.error(error.message);

    return { type: 'SERVER_ERROR', message: 'Unexpected error' };
  }
};

module.exports = {
  createBlogPost,
  getAllPostByUsers,
  getPostById,
};