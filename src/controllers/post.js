const { errorMap, httpStatusCode } = require('../utils');
const { postServices } = require('../services');

const createBlogPost = async (req, res) => {
  const newBlogPost = req.body;
  const userId = req.user.id;

  const { type, message } = await postServices.createBlogPost(newBlogPost, userId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.CREATED).json(message);
};

const getAllPostByUsers = async (_req, res) => {
  const { type, message } = await postServices.getAllPostByUsers();
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.OK).json(message);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postServices.getPostById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.OK).json(message);
};

module.exports = {
  createBlogPost,
  getAllPostByUsers,
  getPostById,
};