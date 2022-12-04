const { httpStatusCode, responseForClient } = require('../utils');
const { postServices } = require('../services');

const { sucessfulResponse } = httpStatusCode;

const createBlogPost = async (req, res) => {
  const { type, message } = await postServices.createBlogPost(req.body, req.user.id);

  return responseForClient(type, message, res, sucessfulResponse.CREATED);
};

const getAllPostByUsers = async (_req, res) => {
  const { type, message } = await postServices.getAllPostByUsers();

  return responseForClient(type, message, res, sucessfulResponse.OK);
};

const getPostById = async (req, res) => {
  const { type, message } = await postServices.getPostById(req.params.id);

  return responseForClient(type, message, res, sucessfulResponse.OK);
};

const updatePost = async (req, res) => {
  const { type, message } = await postServices.updatePost(req.body, req.params.id, req.user.id);

  return responseForClient(type, message, res, sucessfulResponse.OK);
};

const deletePost = async (req, res) => {
  const { type, message } = await postServices.deletePost(req.params.id, req.user.id);
  
  return responseForClient(type, message, res, sucessfulResponse.NO_CONTENT);
};

const getPostByQuery = async (req, res) => {
  const { type, message } = await postServices.getPostByQuery(req.query.q);

  return responseForClient(type, message, res, sucessfulResponse.OK);
};

module.exports = {
  createBlogPost,
  getAllPostByUsers,
  getPostById,
  updatePost,
  deletePost,
  getPostByQuery,
};