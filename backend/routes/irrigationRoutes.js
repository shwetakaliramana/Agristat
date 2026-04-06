const express = require('express');
const router = express.Router();
const {
  getAllIrrigation,
  getIrrigationById,
  createIrrigation,
  updateIrrigation,
  deleteIrrigation,
  getIrrigationStats
} = require('../controllers/irrigationController');

router.get('/', getAllIrrigation);
router.get('/stats', getIrrigationStats);
router.get('/:id', getIrrigationById);
router.post('/', createIrrigation);
router.put('/:id', updateIrrigation);
router.delete('/:id', deleteIrrigation);

module.exports = router;
