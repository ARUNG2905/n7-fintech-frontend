import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-start p-8 rounded-3xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] transition-colors duration-300"
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary mb-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
        {icon}
      </div>
      <h3 className="text-xl font-medium text-white mb-3 tracking-tight">{title}</h3>
      <p className="text-text-muted text-sm leading-relaxed mb-8 font-light">{description}</p>
      
      <a href="#" className="mt-auto inline-flex items-center text-sm font-medium text-primary hover:text-white transition-colors duration-300 group">
        Learn more 
        <svg className="w-4 h-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  );
};

export default FeatureCard;
