const mongoose = require('mongoose');

const trackSchema = new mongoose.Schema({
  track_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false,
  },
  album_id: {
    type: String,
    required: true,
  },
  artist_id: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Track', trackSchema);