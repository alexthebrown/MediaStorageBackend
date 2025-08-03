const express = require('express');
const router = express.Router();
const mediaController = require('../controllers/mediaController');

router.get('/', mediaController.getAllMedia);
router.post('/', mediaController.createMediaItem);
router.put('/:id', mediaController.updateMediaItem);
router.delete('/:id', mediaController.deleteMediaItem);

router.put('/actorAdd/:id', mediaController.addActor);

module.exports = router;
