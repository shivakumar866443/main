const express = require('express');
const userRoutes = require('./users');
const artistRoutes = require('./Artist');
const albumRoutes = require('./Album');
const trackRoutes = require('./Track');
const favoriteRoutes = require('./Fovorite');

const router = express.Router();

// Aggregate all routes
router.use('/users', userRoutes);
router.use('/artists', artistRoutes);
router.use('/albums', albumRoutes);
router.use('/tracks', trackRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;