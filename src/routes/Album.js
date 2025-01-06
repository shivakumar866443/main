const express = require('express');
const albumController = require('../controllers/Album');

const router = express.Router();

router.get('/', albumController.getAllAlbums); // Fetch all albums
router.post('/', albumController.addAlbum);    // Add a new album
router.get('/:id', albumController.getAlbumById); // Get an album by ID
router.put('/:id', albumController.updateAlbum);  // Update album details
router.delete('/:id', albumController.deleteAlbum); // Delete an album

module.exports = router;
