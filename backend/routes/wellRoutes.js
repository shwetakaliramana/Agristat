const express = require('express');
const router = express.Router();
const {
  getAllWells,
  getWellById,
  createWell,
  updateWell,
  deleteWell,
  getWellStats
} = require('../controllers/wellController');

router.get('/', getAllWells);
router.get('/stats', getWellStats);
router.get('/:id', getWellById);
router.post('/', createWell);
router.put('/:id', updateWell);
router.delete('/:id', deleteWell);

module.exports = router;
