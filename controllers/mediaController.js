const MediaItem = require('../models/mediaItem');

exports.getAllMedia = async (req, res) => {
  const items = await MediaItem.find();
  res.json(items);
};

exports.createMediaItem = async (req, res) => {
  const newItem = new MediaItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

exports.updateMediaItem = async (req, res) => {
  const item = await MediaItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteMediaItem = async (req, res) => {
  await MediaItem.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
