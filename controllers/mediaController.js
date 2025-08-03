const MediaItem = require('../models/mediaItem');
const ActorItem = require('../models/actorItem'); 

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

exports.addActor = async (req, res) => {
    const { actors } = req.body; // array of ObjectId strings
    const mediaId = req.params.id;
  
    try {
      // Step 1: Add actors to the media item
      const mediaItem = await MediaItem.findByIdAndUpdate(
        mediaId,
        { $addToSet: { actors: { $each: actors } } },
        { new: true }
      );
  
      if (!mediaItem) {
        return res.status(404).json({ error: 'Media item not found' });
      }
  
      // Step 2: Add media item to each actor's filmography
      await ActorItem.updateMany(
        { _id: { $in: actors } },
        { $addToSet: { filmography: mediaId } }
      );
  
      res.json(mediaItem);
    } catch (err) {
      console.error('Error in addActor:', err);
      res.status(500).json({ error: 'Failed to update media and actor records' });
    }
  };
  
