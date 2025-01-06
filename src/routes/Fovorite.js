const express = require('express');
const favoriteController = require('../controllers/Favorite');

const router = express.Router();

router.get('/', favoriteController.getAllFavorites); // Fetch all favorites
router.post('/', favoriteController.addFavorite);    // Add to favorites
router.delete('/:id', favoriteController.deleteFavorite); // Remove from favorites

module.exports = router;
