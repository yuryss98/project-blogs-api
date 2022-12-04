const router = require('express').Router();
const { postController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

router.get('/', validateToken, postController.getAllPostByUsers);
router.get('/search', validateToken, postController.getPostByQuery);
router.post('/', validateToken, postController.createBlogPost);
router.get('/:id', validateToken, postController.getPostById);
router.put('/:id', validateToken, postController.updatePost);
router.delete('/:id', validateToken, postController.deletePost);

module.exports = router;