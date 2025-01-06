const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  artist_id: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  grammy: {
    type: Boolean,
    required: true,
    default: false,
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false,
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Artist', artistSchema);