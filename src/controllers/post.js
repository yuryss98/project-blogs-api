const { httpStatusCode } = require('../utils');
const { postServices } = require('../services');
const responseForClient = require('../utils/responseForClient');

const createBlogPost = async (req, res) => {
  const newBlogPost = req.body;
  const userId = req.user.id;

  const { type, message } = await postServices.createBlogPost(newBlogPost, userId);

  return responseForClient(type, message, res, httpStatusCode.CREATED);
};

const getAllPostByUsers = async (_req, res) => {
  const { type, message } = await postServices.getAllPostByUsers();

  return responseForClient(type, message, res, httpStatusCode.OK);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const { type, message } = await postServices.getPostById(id);

  return responseForClient(type, message, res, httpStatusCode.OK);
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userId = req.user.id;

  const { type, message } = await postServices.updatePost(id, userId, title, content);

  return responseForClient(type, message, res, httpStatusCode.OK);
};

const deletePost = async (req, res) => {
  const { id } = req.params;
  const userId = req.user.id;

  const { type, message } = await postServices.deletePost(id, userId);
  
  return responseForClient(type, message, res, httpStatusCode.NO_CONTENT);
};

const getPostByQuery = async (req, res) => {
  const { q } = req.query;
  
  const { type, message } = await postServices.getPostByQuery(q);

  return responseForClient(type, message, res, httpStatusCode.OK);
};

module.exports = {
  createBlogPost,
  getAllPostByUsers,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};