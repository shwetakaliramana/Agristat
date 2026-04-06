const mongoose = require('mongoose');

const wellSchema = new mongoose.Schema({
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
  wellType: {
    type: String,
    enum: ['Bore Well', 'Open Well', 'Tube Well', 'Step Well'],
    required: true
  },
  depth: {
    type: Number,
    required: true, // in feet
    min: 0
  },
  waterLevel: {
    type: Number,
    min: 0 // in feet from surface
  },
  diameter: {
    type: Number,
    min: 0 // in feet
  },
  waterQuality: {
    type: String,
    enum: ['Excellent', 'Good', 'Fair', 'Poor', 'Very Poor'],
    default: 'Good'
  },
  yearDug: {
    type: Number,
    min: 1900,
    max: new Date().getFullYear()
  },
  status: {
    type: String,
    enum: ['Active', 'Inactive', 'Seasonal', 'Dry'],
    default: 'Active'
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

module.exports = mongoose.model('Well', wellSchema);
