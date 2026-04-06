import React from 'react';
import { motion } from 'framer-motion';
import './StatCard.css';

const StatCard = ({ icon: Icon, title, value, color, trend }) => {
  return (
    <motion.div
      className="stat-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="stat-card-content">
        <div className="stat-icon-container" style={{ background: `${color}20` }}>
          <Icon className="stat-icon" style={{ color: color }} />
        </div>
        <div className="stat-details">
          <h3 className="stat-title">{title}</h3>
          <p className="stat-value">{value}</p>
          {trend && (
            <span className={`stat-trend ${trend > 0 ? 'positive' : 'negative'}`}>
              {trend > 0 ? '↑' : '↓'} {Math.abs(trend)}%
            </span>
          )}
        </div>
      </div>
      <motion.div
        className="stat-card-glow"
        style={{ background: color }}
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.1 }}
      />
    </motion.div>
  );
};

export default StatCard;
