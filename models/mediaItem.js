const mongoose = require('mongoose');

const mediaItemSchema = new mongoose.Schema({
  title: String,
  format: String, // DVD, Blu-ray, CD, Vinyl, etc.
  type: String,   // Movie, TV, Music, etc.
  location: String,
  watched: Boolean,
  upc: String,
});

module.exports = mongoose.model('MediaItem', mediaItemSchema);
