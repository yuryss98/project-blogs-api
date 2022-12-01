const router = require('express').Router();
const { categoryController } = require('../controllers');
const { validateToken } = require('../auth/jsonWebToken');

router.post('/', validateToken, categoryController.createCategory);

module.exports = router;