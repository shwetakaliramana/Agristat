const Irrigation = require('../models/Irrigation');

// Get all irrigation sources
exports.getAllIrrigation = async (req, res) => {
  try {
    const irrigation = await Irrigation.find().sort({ createdAt: -1 });
    res.json({ success: true, count: irrigation.length, data: irrigation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get irrigation by ID
exports.getIrrigationById = async (req, res) => {
  try {
    const irrigation = await Irrigation.findById(req.params.id);
    if (!irrigation) {
      return res.status(404).json({ success: false, error: 'Irrigation source not found' });
    }
    res.json({ success: true, data: irrigation });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Create new irrigation source
exports.createIrrigation = async (req, res) => {
  try {
    const irrigation = await Irrigation.create(req.body);
    res.status(201).json({ success: true, data: irrigation });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Update irrigation source
exports.updateIrrigation = async (req, res) => {
  try {
    const irrigation = await Irrigation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!irrigation) {
      return res.status(404).json({ success: false, error: 'Irrigation source not found' });
    }
    res.json({ success: true, data: irrigation });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Delete irrigation source
exports.deleteIrrigation = async (req, res) => {
  try {
    const irrigation = await Irrigation.findByIdAndDelete(req.params.id);
    if (!irrigation) {
      return res.status(404).json({ success: false, error: 'Irrigation source not found' });
    }
    res.json({ success: true, message: 'Irrigation source deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get irrigation statistics
exports.getIrrigationStats = async (req, res) => {
  try {
    const stats = await Irrigation.aggregate([
      {
        $group: {
          _id: '$irrigationSource',
          count: { $sum: 1 },
          totalArea: { $sum: '$irrigatedArea' }
        }
      }
    ]);
    res.json({ success: true, data: stats });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
