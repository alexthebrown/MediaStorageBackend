const mongoose = require('mongoose');

const mediaItemSchema = new mongoose.Schema({
  title: String,
  description: String,
  format: String, // DVD, Blu-ray, CD, Vinyl, etc.
  type: String,   // Movie, TV, Music, etc.
  location: String,
  watched: Boolean,
  rating: Number,
  img_url: String,
  upc: String,

  actors: [{type: mongoose.Schema.Types.ObjectId, ref: 'ActorItem'}],

  tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tag'}],
});

module.exports = mongoose.model('MediaItem', mediaItemSchema);
