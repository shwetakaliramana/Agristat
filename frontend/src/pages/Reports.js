import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, PieChart, Pie, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { toast } from 'react-toastify';
import LoadingSpinner from '../components/LoadingSpinner';
import { landAPI, irrigationAPI, croppingAPI, wellAPI } from '../services/api';
import './Reports.css';

const Reports = () => {
  const [landStats, setLandStats] = useState([]);
  const [irrigationStats, setIrrigationStats] = useState([]);
  const [cropStats, setCropStats] = useState([]);
  const [wellStats, setWellStats] = useState([]);
  const [loading, setLoading] = useState(true);

  const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'];

  useEffect(() => {
    fetchAllStats();
  }, []);

  const fetchAllStats = async () => {
    try {
      setLoading(true);
      const [landRes, irrigationRes, cropRes, wellRes] = await Promise.all([
        landAPI.getStats(),
        irrigationAPI.getStats(),
        croppingAPI.getStats(),
        wellAPI.getStats()
      ]);

      setLandStats(landRes.data.data.map(item => ({
        name: item._id,
        count: item.count,
        area: item.totalArea
      })));

      setIrrigationStats(irrigationRes.data.data.map(item => ({
        name: item._id,
        count: item.count,
        area: item.totalArea
      })));

      setCropStats(cropRes.data.data.map(item => ({
        name: item._id,
        count: item.count,
        area: item.totalArea
      })));

      setWellStats(wellRes.data.data.map(item => ({
        name: item._id,
        count: item.count,
        avgDepth: item.avgDepth?.toFixed(2) || 0
      })));
    } catch (error) {
      console.error('Error fetching stats:', error);
      toast.error('Failed to load report data');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="reports-container">
      <motion.div
        className="reports-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1>Analytics & Reports</h1>
        <p>Comprehensive data visualization and analysis</p>
      </motion.div>

      <div className="charts-grid">
        {/* Land Holdings Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          <h3>Land Holdings by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={landStats}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label
              >
                {landStats.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Irrigation Sources Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Irrigation Sources Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={irrigationStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Cropping Pattern Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Cropping Pattern by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={cropStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="area" fill="#10b981" name="Area (acres)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Well Depth Chart */}
        <motion.div
          className="chart-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
        >
          <h3>Average Well Depth by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={wellStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="avgDepth" stroke="#8b5cf6" strokeWidth={3} name="Avg Depth (ft)" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Land Area Distribution */}
        <motion.div
          className="chart-card chart-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h3>Total Land Area by Type</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={landStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-30} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="area" fill="#f59e0b" name="Total Area (acres)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Irrigation Area Chart */}
        <motion.div
          className="chart-card chart-wide"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <h3>Irrigated Area by Source</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={irrigationStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-30} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="area" fill="#06b6d4" name="Irrigated Area (acres)" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      <motion.div
        className="report-summary"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
      >
        <h2>📊 Report Summary</h2>
        <div className="summary-grid">
          <div className="summary-item">
            <h4>Land Analysis</h4>
            <p>Total land types recorded: {landStats.length}</p>
            <p>Most common: {landStats[0]?.name || 'N/A'}</p>
          </div>
          <div className="summary-item">
            <h4>Irrigation Analysis</h4>
            <p>Total irrigation sources: {irrigationStats.length}</p>
            <p>Primary source: {irrigationStats[0]?.name || 'N/A'}</p>
          </div>
          <div className="summary-item">
            <h4>Crop Analysis</h4>
            <p>Crop types monitored: {cropStats.length}</p>
            <p>Dominant type: {cropStats[0]?.name || 'N/A'}</p>
          </div>
          <div className="summary-item">
            <h4>Well Analysis</h4>
            <p>Well types registered: {wellStats.length}</p>
            <p>Common type: {wellStats[0]?.name || 'N/A'}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;
