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

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;

  const { type, message } = await postServices.updatePost(id, userId, title, content);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.OK).json(message);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const { type, message } = await postServices.deletePost(id, userId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.NO_CONTENT).end();
};

const getPostByQuery = async (req, res) => {
  const { q } = req.query;
  
  const { type, message } = await postServices.getPostByQuery(q);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.OK).json(message);
};

module.exports = {
  createBlogPost,
  getAllPostByUsers,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};