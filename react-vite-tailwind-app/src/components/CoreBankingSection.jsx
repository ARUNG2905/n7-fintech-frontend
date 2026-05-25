import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

// Importing the actual mapped assets from the index
import { 
  FloatingDashboardCard, 
  TransactionHistoryScreen, 
  VectorGridDecoration 
} from '../assets';

const CoreBankingSection = () => {
  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Massive Faded Background Watermark corresponding to Section "3" in the N7 design */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span 
          className="text-[400px] sm:text-[600px] md:text-[800px] font-bold tracking-tighter leading-none"
          style={{ 
            color: 'transparent',
            WebkitTextStroke: '2px rgba(255,255,255,0.02)' 
          }}
        >
          3
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12 xl:gap-24">
           
           {/* Left Copy Container */}
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
             className="w-full lg:w-5/12 flex flex-col items-start gap-8"
           >
              <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-serif text-white leading-tight tracking-tight">
                A completely new built from core banking
              </h2>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                 <Button variant="primary" className="px-8 flex-shrink-0">
                   Get Started
                 </Button>
                 <Button variant="ghost" className="px-8 border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all text-sm h-[48px] rounded-full text-text flex-shrink-0 group">
                   View Demo
                   <svg className="w-4 h-4 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                 </Button>
              </div>
           </motion.div>

           {/* Right Dashboard Composition overlapping image layers */}
           <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="w-full lg:w-7/12 relative flex items-center justify-center pt-10 pb-20 sm:pb-0"
           >
              {/* Background abstract decoration pattern vector */}
              <img 
                src={VectorGridDecoration} 
                alt="Mesh decorative grid" 
                className="absolute w-full h-[150%] max-w-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover opacity-10 mask-radial-faded pointer-events-none" 
              />
              
              {/* Primary Background Dashboard Display Mockup */}
              <motion.div 
                whileHover={{ y: -5 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative z-20 w-[85%] md:w-3/4 max-w-xl bg-background/50 backdrop-blur rounded-2xl border border-white/10 shadow-2xl p-1 md:ml-auto"
              >
                  {/* Since image resolution can vary, object-cover and standardizing block helps shape it natively */}
                  <img 
                    src={TransactionHistoryScreen} 
                    alt="Transaction History Global Interface" 
                    className="w-full h-auto rounded-xl object-contain opacity-90"
                    onError={(e) => {
                       // Fallback UI block specifically if 1x1 base64 transparent pixel is loaded to still mock layout gracefully visually
                       if(e.currentTarget.src.length < 200) e.currentTarget.classList.add("hidden"); 
                    }} 
                  />
                  
                  {/* Graceful Fallback if the image lacks data (e.g. 1x1 pixel scenario) */}
                  <div className="absolute inset-0 bg-[#0A1017] rounded-xl flex flex-col justify-center items-center opacity-0 [img.hidden~&]:opacity-100 transition-opacity -z-10 text-white/20 font-bold p-8 text-center text-sm border border-white/5">
                      Waiting for [TransactionHistoryScreen] true image payload
                  </div>

              </motion.div>
              
              {/* Overlapping Detail 'FloatingDashboardCard' Element */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 sm:left-4 lg:-left-12 bottom-0 sm:-bottom-12 z-30 w-3/5 sm:w-1/2 max-w-[280px] rounded-3xl p-1 bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.8)]"
              >
                 <img 
                    src={FloatingDashboardCard} 
                    alt="Account Details Floater" 
                    className="w-full h-auto rounded-2xl object-cover hover:opacity-100 opacity-90 transition-opacity duration-300"
                    onError={(e) => {
                       if(e.currentTarget.src.length < 200) e.currentTarget.classList.add("hidden"); 
                    }}  
                 />
                 
                  <div className="absolute inset-0 bg-[#0A1017] rounded-2xl flex flex-col justify-center items-center opacity-0 [img.hidden~&]:opacity-100 transition-opacity -z-10 text-white/20 font-bold p-4 text-center text-xs">
                      Waiting for [FloatingDashboardCard]
                  </div>
              </motion.div>
           </motion.div>
           
        </div>
      </div>
    </section>
  );
};

export default CoreBankingSection;
