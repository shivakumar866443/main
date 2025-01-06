const express = require('express');
const albumController = require('../controllers/Album');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/',authenticate, albumController.getAllAlbums); // Fetch all albums
router.post('/',authenticate, albumController.addAlbum);    // Add a new album
router.get('/:id',authenticate, albumController.getAlbumById); // Get an album by ID
router.put('/:id',authenticate, albumController.updateAlbum);  // Update album details
router.delete('/:id',authenticate, albumController.deleteAlbum); // Delete an album

module.exports = router;
