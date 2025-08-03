const LocationItem = require('../models/locationItem');

exports.getAllLocations = async (req, res) => {
  const items = await LocationItem.find();
  res.json(items);
};

exports.createLocationItem = async (req, res) => {
  const newItem = new LocationItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

exports.updateLocationItem = async (req, res) => {
  const item = await LocationItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteLocationItem = async (req, res) => {
  await LocationItem.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
