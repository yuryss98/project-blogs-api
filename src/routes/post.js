const router = require('express').Router();
const { postController } = require('../controllers');
const { validateToken } = require('../auth/jsonWebToken');

router.get('/', validateToken, postController.getAllPostByUser);
router.post('/', validateToken, postController.createBlogPost);

module.exports = router;