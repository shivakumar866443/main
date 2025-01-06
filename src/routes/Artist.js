const express = require('express');
const artistController = require('../controllers/Artist');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/',authenticate, artistController.getAllArtists); // Fetch all artists
router.post('/',authenticate, artistController.addArtist);    // Add a new artist
router.get('/:id',authenticate, artistController.getArtistById); // Get an artist by ID
router.put('/:id',authenticate, artistController.updateArtist);  // Update artist details
router.delete('/:id',authenticate, artistController.deleteArtist); // Delete an artist

module.exports = router;
