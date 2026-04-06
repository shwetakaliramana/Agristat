const express = require('express');
const router = express.Router();
const {
  getAllLands,
  getLandById,
  createLand,
  updateLand,
  deleteLand,
  getLandStats
} = require('../controllers/landController');

router.get('/', getAllLands);
router.get('/stats', getLandStats);
router.get('/:id', getLandById);
router.post('/', createLand);
router.put('/:id', updateLand);
router.delete('/:id', deleteLand);

module.exports = router;
