const mongoose = require('mongoose');

const irrigationSchema = new mongoose.Schema({
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
  irrigationSource: {
    type: String,
    enum: ['Canal', 'Tube Well', 'Well', 'Tank', 'River', 'Rainwater Harvesting', 'Drip Irrigation', 'Sprinkler'],
    required: true
  },
  irrigatedArea: {
    type: Number,
    required: true, // in acres
    min: 0
  },
  efficiency: {
    type: Number,
    min: 0,
    max: 100 // percentage
  },
  waterAvailability: {
    type: String,
    enum: ['Abundant', 'Sufficient', 'Moderate', 'Scarce', 'Very Scarce'],
    required: true
  },
  yearEstablished: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear()
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

module.exports = mongoose.model('Irrigation', irrigationSchema);
