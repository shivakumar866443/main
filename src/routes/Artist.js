const express = require('express');
const artistController = require('../controllers/Artist');

const router = express.Router();

router.get('/', artistController.getAllArtists); // Fetch all artists
router.post('/', artistController.addArtist);    // Add a new artist
router.get('/:id', artistController.getArtistById); // Get an artist by ID
router.put('/:id', artistController.updateArtist);  // Update artist details
router.delete('/:id', artistController.deleteArtist); // Delete an artist

module.exports = router;
