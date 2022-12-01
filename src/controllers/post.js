const { errorMap, httpStatusCode } = require('../utils');
const { postServices } = require('../services');

const createBlogPost = async (req, res) => {
  const newBlogPost = req.body;
  const userId = req.user.id;

  const { type, message } = await postServices.createBlogPost(newBlogPost, userId);
  if (type) return res.status(errorMap.mapError(type)).json({ message });

  return res.status(httpStatusCode.CREATED).json(message);
}; 

module.exports = {
  createBlogPost,
};