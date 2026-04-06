const CroppingPattern = require('../models/CroppingPattern');

// Get all cropping patterns
exports.getAllCrops = async (req, res) => {
  try {
    const crops = await CroppingPattern.find().sort({ createdAt: -1 });
    res.json({ success: true, count: crops.length, data: crops });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get crop by ID
exports.getCropById = async (req, res) => {
  try {
    const crop = await CroppingPattern.findById(req.params.id);
    if (!crop) {
      return res.status(404).json({ success: false, error: 'Crop not found' });
    }
    res.json({ success: true, data: crop });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new cropping pattern
exports.createCrop = async (req, res) => {
  try {
    const crop = await CroppingPattern.create(req.body);
    res.status(201).json({ success: true, data: crop });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update cropping pattern
exports.updateCrop = async (req, res) => {
  try {
    const crop = await CroppingPattern.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!crop) {
      return res.status(404).json({ success: false, error: 'Crop not found' });
    }
    res.json({ success: true, data: crop });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete cropping pattern
exports.deleteCrop = async (req, res) => {
  try {
    const crop = await CroppingPattern.findByIdAndDelete(req.params.id);
    if (!crop) {
      return res.status(404).json({ success: false, error: 'Crop not found' });
    }
    res.json({ success: true, message: 'Crop deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get crop statistics
exports.getCropStats = async (req, res) => {
  try {
    const stats = await CroppingPattern.aggregate([
      {
        $group: {
          _id: '$cropType',
          count: { $sum: 1 },
          totalArea: { $sum: '$areaCultivated' }
        }
      }
    ]);
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
