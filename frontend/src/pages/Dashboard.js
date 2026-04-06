import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLandmark, FaTint, FaSeedling, FaWater } from 'react-icons/fa';
import StatCard from '../components/StatCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { dashboardAPI } from '../services/api';
import { toast } from 'react-toastify';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats();
  }, []);

  const fetchDashboardStats = async () => {
    try {
      setLoading(true);
      const response = await dashboardAPI.getStats();
      setStats(response.data.data);
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
      toast.error('Failed to load dashboard statistics');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="dashboard-container">
      <motion.div
        className="dashboard-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="dashboard-title">Agricultural Assessment Dashboard</h1>
        <p className="dashboard-subtitle">
          Comprehensive analysis of land holdings, irrigation, crops, and wells across India
        </p>
      </motion.div>

      <div className="stats-grid">
        <StatCard
          icon={FaLandmark}
          title="Total Land Holdings"
          value={stats?.counts?.lands || 0}
          color="#10b981"
          trend={12}
        />
        <StatCard
          icon={FaTint}
          title="Irrigation Sources"
          value={stats?.counts?.irrigation || 0}
          color="#3b82f6"
          trend={8}
        />
        <StatCard
          icon={FaSeedling}
          title="Cropping Patterns"
          value={stats?.counts?.crops || 0}
          color="#f59e0b"
          trend={-3}
        />
        <StatCard
          icon={FaWater}
          title="Wells Registered"
          value={stats?.counts?.wells || 0}
          color="#8b5cf6"
          trend={15}
        />
      </div>

      <div className="dashboard-grid">
        <motion.div
          className="dashboard-card total-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h3>Total Areas</h3>
          <div className="area-stats">
            <div className="area-item">
              <span className="area-label">Land Area</span>
              <span className="area-value">{stats?.totals?.landArea?.toFixed(2) || 0} acres</span>
            </div>
            <div className="area-item">
              <span className="area-label">Irrigated Area</span>
              <span className="area-value">{stats?.totals?.irrigatedArea?.toFixed(2) || 0} acres</span>
            </div>
            <div className="area-item">
              <span className="area-label">Crop Area</span>
              <span className="area-value">{stats?.totals?.cropArea?.toFixed(2) || 0} acres</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="dashboard-card well-card"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h3>Average Well Depth</h3>
          <div className="well-depth-display">
            <div className="depth-value">{stats?.averages?.wellDepth?.toFixed(2) || 0}</div>
            <div className="depth-unit">feet</div>
          </div>
        </motion.div>
      </div>

      {stats?.stateWise && stats.stateWise.length > 0 && (
        <motion.div
          className="state-wise-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="section-title">State-wise Land Distribution</h2>
          <div className="state-grid">
            {stats.stateWise.slice(0, 6).map((state, index) => (
              <motion.div
                key={index}
                className="state-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h4 className="state-name">{state._id}</h4>
                <p className="state-land">
                  <span className="land-amount">{state.totalLand?.toFixed(2)}</span> acres
                </p>
                <p className="state-count">{state.count} holdings</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        className="welcome-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <div className="welcome-card">
          <h2>📊 Welcome to AgriStats</h2>
          <p>
            This comprehensive platform helps monitor and analyze agricultural data across different 
            regions of India. Track land holdings, irrigation sources, cropping patterns, and well depths 
            to make informed decisions for better agricultural planning.
          </p>
          <div className="feature-list">
            <div className="feature-item">✅ Real-time data tracking</div>
            <div className="feature-item">✅ Interactive visualizations</div>
            <div className="feature-item">✅ Comprehensive reports</div>
            <div className="feature-item">✅ Easy data entry</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;
