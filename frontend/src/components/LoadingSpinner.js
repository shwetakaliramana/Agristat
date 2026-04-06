import React from 'react';
import { motion } from 'framer-motion';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <motion.div
        className="loading-spinner"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      >
        <div className="spinner-leaf"></div>
        <div className="spinner-leaf"></div>
        <div className="spinner-leaf"></div>
      </motion.div>
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default LoadingSpinner;
