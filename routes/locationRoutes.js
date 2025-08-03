const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

router.get('/', locationController.getAllLocations);
router.post('/', locationController.createLocationItem);
router.put('/:id', locationController.updateLocationItem);
router.delete('/:id', locationController.deleteLocationItem);

module.exports = router;