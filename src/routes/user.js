const router = require('express').Router();
const { userController } = require('../controllers');
const { validateToken } = require('../auth/jsonWebToken');

router.get('/', validateToken, userController.getAll);
router.post('/', userController.createUser);

module.exports = router;