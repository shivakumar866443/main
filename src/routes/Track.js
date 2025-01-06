const express = require('express');
const trackController = require('../controllers/Track');

const router = express.Router();

router.get('/', trackController.getAllTracks); // Fetch all tracks
router.post('/', trackController.addTrack);    // Add a new track
router.get('/:id', trackController.getTrackById); // Get a track by ID
router.put('/:id', trackController.updateTrack);  // Update track details
router.delete('/:id', trackController.deleteTrack); // Delete a track

module.exports = router;
