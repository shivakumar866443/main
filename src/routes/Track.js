const express = require('express');
const trackController = require('../controllers/Track');
const { authenticate } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/',authenticate, trackController.getAllTracks); // Fetch all tracks
router.post('/',authenticate, trackController.addTrack);    // Add a new track
router.get('/:id',authenticate, trackController.getTrackById); // Get a track by ID
router.put('/:id',authenticate, trackController.updateTrack);  // Update track details
router.delete('/:id',authenticate, trackController.deleteTrack); // Delete a track

module.exports = router;
