const mongoose = require('mongoose');

const actorItemSchema = new mongoose.Schema({
  name: String,
  bio: String,
  img: String,
  imdb_link: String,

  filmography: [{type: mongoose.Schema.Types.ObjectId, ref: 'MediaItem' }]
});

module.exports = mongoose.model('ActorItem', actorItemSchema);
