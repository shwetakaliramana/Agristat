const mongoose = require('mongoose');

const landHoldingSchema = new mongoose.Schema({
  state: {
    type: String,
    required: true,
    trim: true
  },
  district: {
    type: String,
    required: true,
    trim: true
  },
  village: {
    type: String,
    required: true,
    trim: true
  },
  farmerName: {
    type: String,
    required: true,
    trim: true
  },
  landSize: {
    type: Number,
    required: true, // in acres
    min: 0
  },
  landType: {
    type: String,
    enum: ['Marginal (<1 acre)', 'Small (1-2 acres)', 'Semi-Medium (2-4 acres)', 'Medium (4-10 acres)', 'Large (>10 acres)'],
    required: true
  },
  soilType: {
    type: String,
    enum: ['Alluvial', 'Black', 'Red', 'Laterite', 'Desert', 'Mountain'],
    required: true
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('LandHolding', landHoldingSchema);
