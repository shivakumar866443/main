const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/', userController.getAllUsers);
router.put('/update-password', userController.updatePassword);
router.delete('/:id', userController.deleteUser);

module.exports = router;