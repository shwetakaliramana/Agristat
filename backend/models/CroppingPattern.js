const mongoose = require('mongoose');

const croppingPatternSchema = new mongoose.Schema({
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
  cropName: {
    type: String,
    required: true,
    trim: true
  },
  cropType: {
    type: String,
    enum: ['Kharif', 'Rabi', 'Zaid', 'Perennial'],
    required: true
  },
  cropCategory: {
    type: String,
    enum: ['Cereals', 'Pulses', 'Oilseeds', 'Cash Crops', 'Vegetables', 'Fruits', 'Spices'],
    required: true
  },
  areaCultivated: {
    type: Number,
    required: true, // in acres
    min: 0
  },
  expectedYield: {
    type: Number,
    min: 0 // in quintals per acre
  },
  season: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true,
    min: 2000,
    max: new Date().getFullYear() + 1
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('CroppingPattern', croppingPatternSchema);
