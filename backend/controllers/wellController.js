const Well = require('../models/Well');

// Get all wells
exports.getAllWells = async (req, res) => {
  try {
    const wells = await Well.find().sort({ createdAt: -1 });
    res.json({ success: true, count: wells.length, data: wells });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get well by ID
exports.getWellById = async (req, res) => {
  try {
    const well = await Well.findById(req.params.id);
    if (!well) {
      return res.status(404).json({ success: false, error: 'Well not found' });
    }
    res.json({ success: true, data: well });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new well
exports.createWell = async (req, res) => {
  try {
    const well = await Well.create(req.body);
    res.status(201).json({ success: true, data: well });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update well
exports.updateWell = async (req, res) => {
  try {
    const well = await Well.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!well) {
      return res.status(404).json({ success: false, error: 'Well not found' });
    }
    res.json({ success: true, data: well });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete well
exports.deleteWell = async (req, res) => {
  try {
    const well = await Well.findByIdAndDelete(req.params.id);
    if (!well) {
      return res.status(404).json({ success: false, error: 'Well not found' });
    }
    res.json({ success: true, message: 'Well deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get well statistics
exports.getWellStats = async (req, res) => {
  try {
    const stats = await Well.aggregate([
      {
        $group: {
          _id: '$wellType',
          count: { $sum: 1 },
          avgDepth: { $avg: '$depth' },
          avgWaterLevel: { $avg: '$waterLevel' }
        }
      }
    ]);
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
