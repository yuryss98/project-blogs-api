const { Op } = require('sequelize');
const { BlogPost, Category, User } = require('../models');
const validateInputValues = require('./validations/validateInputsValue');
const validateCategoryExists = require('./validations/validateCategoryExists');
const {
  SERVICE_SUCESSFULL,
  UNSUCCESSFUL_SERVICE,
  POST_DOES_NOT_EXISTS,
  UNAUTHORIZED,
} = require('./helpers');

const createBlogPost = async ({ title, content, categoryIds }, userId) => {
  try {
    const { type, message } = validateInputValues.createBlogPost({ title, content, categoryIds });
    if (type) return { type, message };

    const categoryIsExists = await validateCategoryExists(categoryIds);
    if (categoryIsExists.type) return categoryIsExists;

    const blogPostCreated = await BlogPost.create({ title, content, userId });

    await blogPostCreated.addCategory(categoryIds);

    return { ...SERVICE_SUCESSFULL, message: blogPostCreated };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
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
  
    return { ...SERVICE_SUCESSFULL, message: data };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const getPostById = async (id) => {
  try {
    const post = await BlogPost.findOne({
      where: { id },
      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    if (!post) return POST_DOES_NOT_EXISTS;

    return { ...SERVICE_SUCESSFULL, message: post };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const updatePost = async (id, userId, title, content) => {
  try {
    const { type, message } = validateInputValues.updateBlogPost({ title, content });
    if (type) return { type, message };

    const [updatedPost] = await BlogPost.update(
      { title, content },
      { where: { id, userId } },
    );

    if (!updatedPost) return UNAUTHORIZED;

    const result = await getPostById(id);

    return { ...SERVICE_SUCESSFULL, message: result.message };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const deletePost = async (id, userId) => {
  try {
    const postIsExists = await BlogPost.findByPk(id);

    if (!postIsExists) return POST_DOES_NOT_EXISTS;

    const deletedPost = await BlogPost.destroy(
      { where: { id, userId } },
    );

    if (!deletedPost) return UNAUTHORIZED;

    return SERVICE_SUCESSFULL;
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

const getPostByQuery = async (q) => {
  try {
    const foundPost = await BlogPost.findAll({
      where: {
        [Op.or]: {
          title: { [Op.like]: `%${q}%` },
          content: { [Op.like]: `%${q}%` },
        },
      },

      include: [
        { model: User, as: 'user', attributes: { exclude: 'password' } },
        { model: Category, as: 'categories', through: { attributes: [] } },
      ],
    });

    return { ...SERVICE_SUCESSFULL, message: foundPost };
  } catch (error) {
    console.error(error.message);

    return UNSUCCESSFUL_SERVICE;
  }
};

module.exports = {
  createBlogPost,
  getAllPostByUsers,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};