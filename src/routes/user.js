const router = require('express').Router();
const { userController } = require('../controllers');
const validateToken = require('../middleware/validateToken');

router.get('/', validateToken, userController.getAll);
router.post('/', userController.createUser);
router.delete('/me', validateToken, userController.deleteUser);
router.get('/:id', validateToken, userController.getById);

module.exports = router;