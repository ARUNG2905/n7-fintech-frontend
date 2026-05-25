import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', ...props }) => {
  return (
    <motion.div
      className={`bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
