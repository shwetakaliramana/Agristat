const LandHolding = require('../models/LandHolding');
const Irrigation = require('../models/Irrigation');
const CroppingPattern = require('../models/CroppingPattern');
const Well = require('../models/Well');

// Get overall dashboard statistics
exports.getDashboardStats = async (req, res) => {
  try {
    const landCount = await LandHolding.countDocuments();
    const irrigationCount = await Irrigation.countDocuments();
    const cropCount = await CroppingPattern.countDocuments();
    const wellCount = await Well.countDocuments();

    const totalLandArea = await LandHolding.aggregate([
      { $group: { _id: null, total: { $sum: '$landSize' } } }
    ]);

    const totalIrrigatedArea = await Irrigation.aggregate([
      { $group: { _id: null, total: { $sum: '$irrigatedArea' } } }
    ]);

    const totalCropArea = await CroppingPattern.aggregate([
      { $group: { _id: null, total: { $sum: '$areaCultivated' } } }
    ]);

    const avgWellDepth = await Well.aggregate([
      { $group: { _id: null, average: { $avg: '$depth' } } }
    ]);

    // State-wise data
    const stateWiseData = await LandHolding.aggregate([
      {
        $group: {
          _id: '$state',
          totalLand: { $sum: '$landSize' },
          count: { $sum: 1 }
        }
      },
      { $sort: { totalLand: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        counts: {
          lands: landCount,
          irrigation: irrigationCount,
          crops: cropCount,
          wells: wellCount
        },
        totals: {
          landArea: totalLandArea[0]?.total || 0,
          irrigatedArea: totalIrrigatedArea[0]?.total || 0,
          cropArea: totalCropArea[0]?.total || 0
        },
        averages: {
          wellDepth: avgWellDepth[0]?.average || 0
        },
        stateWise: stateWiseData
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
