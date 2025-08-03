const ActorItem = require('../models/actorItem');

exports.getAllActors = async (req, res) => {
  const items = await ActorItem.find();
  res.json(items);
};

exports.createActorItem = async (req, res) => {
  const newItem = new ActorItem(req.body);
  await newItem.save();
  res.status(201).json(newItem);
};

exports.updateActorItem = async (req, res) => {
  const item = await ActorItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteActorItem = async (req, res) => {
  await ActorItem.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
