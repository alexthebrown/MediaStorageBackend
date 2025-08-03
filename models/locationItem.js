const mongoose = require('mongoose');

const locationItemSchema = new mongoose.Schema({
  name: String,
  description: String,

  titlesInLocation: [{type: mongoose.Schema.Types.ObjectId, ref: 'MediaItem'}],
});

module.exports = mongoose.model('LocationItem', locationItemSchema);
