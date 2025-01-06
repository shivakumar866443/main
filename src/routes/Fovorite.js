const express = require('express');
const favoriteController = require('../controllers/Favorite');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/',authenticate, favoriteController.getAllFavorites); // Fetch all favorites
router.post('/',authenticate, favoriteController.addFavorite);    // Add to favorites
router.delete('/:id',authenticate, favoriteController.deleteFavorite); // Remove from favorites

module.exports = router;
