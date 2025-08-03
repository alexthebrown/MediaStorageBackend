const express = require('express');
const router = express.Router();
const actorController = require('../controllers/actorController');

router.get('/', actorController.getAllActors);
router.post('/', actorController.createActorItem);
router.put('/:id', actorController.updateActorItem);
router.delete('/:id', actorController.deleteActorItem);

module.exports = router;
