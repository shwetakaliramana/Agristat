const LandHolding = require('../models/LandHolding');

// Get all land holdings
exports.getAllLands = async (req, res) => {
  try {
    const lands = await LandHolding.find().sort({ createdAt: -1 });
    res.json({ success: true, count: lands.length, data: lands });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get land holding by ID
exports.getLandById = async (req, res) => {
  try {
    const land = await LandHolding.findById(req.params.id);
    if (!land) {
      return res.status(404).json({ success: false, error: 'Land not found' });
    }
    res.json({ success: true, data: land });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new land holding
exports.createLand = async (req, res) => {
  try {
    const land = await LandHolding.create(req.body);
    res.status(201).json({ success: true, data: land });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update land holding
exports.updateLand = async (req, res) => {
  try {
    const land = await LandHolding.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!land) {
      return res.status(404).json({ success: false, error: 'Land not found' });
    }
    res.json({ success: true, data: land });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete land holding
exports.deleteLand = async (req, res) => {
  try {
    const land = await LandHolding.findByIdAndDelete(req.params.id);
    if (!land) {
      return res.status(404).json({ success: false, error: 'Land not found' });
    }
    res.json({ success: true, message: 'Land deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get statistics
exports.getLandStats = async (req, res) => {
  try {
    const stats = await LandHolding.aggregate([
      {
        $group: {
          _id: '$landType',
          count: { $sum: 1 },
          totalArea: { $sum: '$landSize' }
        }
      }
    ]);
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
