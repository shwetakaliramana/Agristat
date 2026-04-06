import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLandmark, FaTint, FaSeedling, FaWater } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { landAPI, irrigationAPI, croppingAPI, wellAPI } from '../services/api';
import './DataEntry.css';

const DataEntry = () => {
  const [activeTab, setActiveTab] = useState('land');
  const [landData, setLandData] = useState({
    state: '', district: '', village: '', farmerName: '', landSize: '',
    landType: '', soilType: '', latitude: '', longitude: ''
  });
  const [irrigationData, setIrrigationData] = useState({
    state: '', district: '', village: '', irrigationSource: '', irrigatedArea: '',
    efficiency: '', waterAvailability: '', yearEstablished: ''
  });
  const [cropData, setCropData] = useState({
    state: '', district: '', village: '', cropName: '', cropType: '',
    cropCategory: '', areaCultivated: '', expectedYield: '', season: '', year: ''
  });
  const [wellData, setWellData] = useState({
    state: '', district: '', village: '', wellType: '', depth: '',
    waterLevel: '', diameter: '', waterQuality: '', yearDug: '', status: '',
    latitude: '', longitude: ''
  });

  const tabs = [
    { id: 'land', label: 'Land Holding', icon: FaLandmark },
    { id: 'irrigation', label: 'Irrigation', icon: FaTint },
    { id: 'crop', label: 'Cropping', icon: FaSeedling },
    { id: 'well', label: 'Wells', icon: FaWater },
  ];

  const handleLandSubmit = async (e) => {
    e.preventDefault();
    try {
      await landAPI.create(landData);
      toast.success('Land holding data added successfully!');
      setLandData({ state: '', district: '', village: '', farmerName: '', landSize: '',
        landType: '', soilType: '', latitude: '', longitude: '' });
    } catch (error) {
      toast.error('Failed to add land holding data');
    }
  };

  const handleIrrigationSubmit = async (e) => {
    e.preventDefault();
    try {
      await irrigationAPI.create(irrigationData);
      toast.success('Irrigation data added successfully!');
      setIrrigationData({ state: '', district: '', village: '', irrigationSource: '',
        irrigatedArea: '', efficiency: '', waterAvailability: '', yearEstablished: '' });
    } catch (error) {
      toast.error('Failed to add irrigation data');
    }
  };

  const handleCropSubmit = async (e) => {
    e.preventDefault();
    try {
      await croppingAPI.create(cropData);
      toast.success('Cropping data added successfully!');
      setCropData({ state: '', district: '', village: '', cropName: '', cropType: '',
        cropCategory: '', areaCultivated: '', expectedYield: '', season: '', year: '' });
    } catch (error) {
      toast.error('Failed to add cropping data');
    }
  };

  const handleWellSubmit = async (e) => {
    e.preventDefault();
    try {
      await wellAPI.create(wellData);
      toast.success('Well data added successfully!');
      setWellData({ state: '', district: '', village: '', wellType: '', depth: '',
        waterLevel: '', diameter: '', waterQuality: '', yearDug: '', status: '',
        latitude: '', longitude: '' });
    } catch (error) {
      toast.error('Failed to add well data');
    }
  };

  return (
    <div className="data-entry-container">
      <motion.div
        className="data-entry-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Data Entry Portal</h1>
        <p>Add new agricultural assessment data</p>
      </motion.div>

      <div className="tabs-container">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon className="tab-icon" />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      <motion.div
        className="form-container"
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'land' && (
          <form onSubmit={handleLandSubmit} className="data-form">
            <h2>Land Holding Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>State *</label>
                <input type="text" value={landData.state} onChange={(e) => setLandData({...landData, state: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>District *</label>
                <input type="text" value={landData.district} onChange={(e) => setLandData({...landData, district: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Village *</label>
                <input type="text" value={landData.village} onChange={(e) => setLandData({...landData, village: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Farmer Name *</label>
                <input type="text" value={landData.farmerName} onChange={(e) => setLandData({...landData, farmerName: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Land Size (acres) *</label>
                <input type="number" step="0.01" value={landData.landSize} onChange={(e) => setLandData({...landData, landSize: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Land Type *</label>
                <select value={landData.landType} onChange={(e) => setLandData({...landData, landType: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Marginal (&lt;1 acre)</option>
                  <option>Small (1-2 acres)</option>
                  <option>Semi-Medium (2-4 acres)</option>
                  <option>Medium (4-10 acres)</option>
                  <option>Large (&gt;10 acres)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Soil Type *</label>
                <select value={landData.soilType} onChange={(e) => setLandData({...landData, soilType: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Alluvial</option>
                  <option>Black</option>
                  <option>Red</option>
                  <option>Laterite</option>
                  <option>Desert</option>
                  <option>Mountain</option>
                </select>
              </div>
              <div className="form-group">
                <label>Latitude</label>
                <input type="number" step="0.000001" value={landData.latitude} onChange={(e) => setLandData({...landData, latitude: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Longitude</label>
                <input type="number" step="0.000001" value={landData.longitude} onChange={(e) => setLandData({...landData, longitude: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="submit-btn">Submit Land Data</button>
          </form>
        )}

        {activeTab === 'irrigation' && (
          <form onSubmit={handleIrrigationSubmit} className="data-form">
            <h2>Irrigation Source Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>State *</label>
                <input type="text" value={irrigationData.state} onChange={(e) => setIrrigationData({...irrigationData, state: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>District *</label>
                <input type="text" value={irrigationData.district} onChange={(e) => setIrrigationData({...irrigationData, district: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Village *</label>
                <input type="text" value={irrigationData.village} onChange={(e) => setIrrigationData({...irrigationData, village: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Irrigation Source *</label>
                <select value={irrigationData.irrigationSource} onChange={(e) => setIrrigationData({...irrigationData, irrigationSource: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Canal</option>
                  <option>Tube Well</option>
                  <option>Well</option>
                  <option>Tank</option>
                  <option>River</option>
                  <option>Rainwater Harvesting</option>
                  <option>Drip Irrigation</option>
                  <option>Sprinkler</option>
                </select>
              </div>
              <div className="form-group">
                <label>Irrigated Area (acres) *</label>
                <input type="number" step="0.01" value={irrigationData.irrigatedArea} onChange={(e) => setIrrigationData({...irrigationData, irrigatedArea: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Efficiency (%)</label>
                <input type="number" min="0" max="100" value={irrigationData.efficiency} onChange={(e) => setIrrigationData({...irrigationData, efficiency: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Water Availability *</label>
                <select value={irrigationData.waterAvailability} onChange={(e) => setIrrigationData({...irrigationData, waterAvailability: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Abundant</option>
                  <option>Sufficient</option>
                  <option>Moderate</option>
                  <option>Scarce</option>
                  <option>Very Scarce</option>
                </select>
              </div>
              <div className="form-group">
                <label>Year Established</label>
                <input type="number" min="1900" max={new Date().getFullYear()} value={irrigationData.yearEstablished} onChange={(e) => setIrrigationData({...irrigationData, yearEstablished: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="submit-btn">Submit Irrigation Data</button>
          </form>
        )}

        {activeTab === 'crop' && (
          <form onSubmit={handleCropSubmit} className="data-form">
            <h2>Cropping Pattern Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>State *</label>
                <input type="text" value={cropData.state} onChange={(e) => setCropData({...cropData, state: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>District *</label>
                <input type="text" value={cropData.district} onChange={(e) => setCropData({...cropData, district: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Village *</label>
                <input type="text" value={cropData.village} onChange={(e) => setCropData({...cropData, village: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Crop Name *</label>
                <input type="text" value={cropData.cropName} onChange={(e) => setCropData({...cropData, cropName: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Crop Type *</label>
                <select value={cropData.cropType} onChange={(e) => setCropData({...cropData, cropType: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Kharif</option>
                  <option>Rabi</option>
                  <option>Zaid</option>
                  <option>Perennial</option>
                </select>
              </div>
              <div className="form-group">
                <label>Crop Category *</label>
                <select value={cropData.cropCategory} onChange={(e) => setCropData({...cropData, cropCategory: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Cereals</option>
                  <option>Pulses</option>
                  <option>Oilseeds</option>
                  <option>Cash Crops</option>
                  <option>Vegetables</option>
                  <option>Fruits</option>
                  <option>Spices</option>
                </select>
              </div>
              <div className="form-group">
                <label>Area Cultivated (acres) *</label>
                <input type="number" step="0.01" value={cropData.areaCultivated} onChange={(e) => setCropData({...cropData, areaCultivated: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Expected Yield (quintals/acre)</label>
                <input type="number" step="0.01" value={cropData.expectedYield} onChange={(e) => setCropData({...cropData, expectedYield: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Season *</label>
                <input type="text" value={cropData.season} onChange={(e) => setCropData({...cropData, season: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Year *</label>
                <input type="number" min="2000" max={new Date().getFullYear() + 1} value={cropData.year} onChange={(e) => setCropData({...cropData, year: e.target.value})} required />
              </div>
            </div>
            <button type="submit" className="submit-btn">Submit Crop Data</button>
          </form>
        )}

        {activeTab === 'well' && (
          <form onSubmit={handleWellSubmit} className="data-form">
            <h2>Well Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label>State *</label>
                <input type="text" value={wellData.state} onChange={(e) => setWellData({...wellData, state: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>District *</label>
                <input type="text" value={wellData.district} onChange={(e) => setWellData({...wellData, district: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Village *</label>
                <input type="text" value={wellData.village} onChange={(e) => setWellData({...wellData, village: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Well Type *</label>
                <select value={wellData.wellType} onChange={(e) => setWellData({...wellData, wellType: e.target.value})} required>
                  <option value="">Select</option>
                  <option>Bore Well</option>
                  <option>Open Well</option>
                  <option>Tube Well</option>
                  <option>Step Well</option>
                </select>
              </div>
              <div className="form-group">
                <label>Depth (feet) *</label>
                <input type="number" step="0.01" value={wellData.depth} onChange={(e) => setWellData({...wellData, depth: e.target.value})} required />
              </div>
              <div className="form-group">
                <label>Water Level (feet)</label>
                <input type="number" step="0.01" value={wellData.waterLevel} onChange={(e) => setWellData({...wellData, waterLevel: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Diameter (feet)</label>
                <input type="number" step="0.01" value={wellData.diameter} onChange={(e) => setWellData({...wellData, diameter: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Water Quality</label>
                <select value={wellData.waterQuality} onChange={(e) => setWellData({...wellData, waterQuality: e.target.value})}>
                  <option value="">Select</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                  <option>Poor</option>
                  <option>Very Poor</option>
                </select>
              </div>
              <div className="form-group">
                <label>Year Dug</label>
                <input type="number" min="1900" max={new Date().getFullYear()} value={wellData.yearDug} onChange={(e) => setWellData({...wellData, yearDug: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select value={wellData.status} onChange={(e) => setWellData({...wellData, status: e.target.value})}>
                  <option value="">Select</option>
                  <option>Active</option>
                  <option>Inactive</option>
                  <option>Seasonal</option>
                  <option>Dry</option>
                </select>
              </div>
              <div className="form-group">
                <label>Latitude</label>
                <input type="number" step="0.000001" value={wellData.latitude} onChange={(e) => setWellData({...wellData, latitude: e.target.value})} />
              </div>
              <div className="form-group">
                <label>Longitude</label>
                <input type="number" step="0.000001" value={wellData.longitude} onChange={(e) => setWellData({...wellData, longitude: e.target.value})} />
              </div>
            </div>
            <button type="submit" className="submit-btn">Submit Well Data</button>
          </form>
        )}
      </motion.div>
    </div>
  );
};

export default DataEntry;
