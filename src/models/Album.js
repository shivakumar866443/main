const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
  album_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false,
  },
  artist_id: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Album', albumSchema);