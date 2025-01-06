const express = require('express');
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/', authenticate, userController.getAllUsers);
router.put('/update-password',authenticate, userController.updatePassword);
router.delete('/:id',authenticate, userController.deleteUser);

module.exports = router;