const router = require('express').Router();
const { categoryController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

router.get('/', validateToken, categoryController.getAll);
router.post('/', validateToken, categoryController.createCategory);

module.exports = router;