const router = require('express').Router();
const { postController } = require('../controllers');
const { validateToken } = require('../auth/jsonWebToken');

router.get('/', validateToken, postController.getAllPostByUsers);
router.post('/', validateToken, postController.createBlogPost);
router.get('/:id', validateToken, postController.getPostById);

module.exports = router;