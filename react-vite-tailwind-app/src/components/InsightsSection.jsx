import React from 'react';
import { motion } from 'framer-motion';

// Custom clean SVG vector graphic elements inside the top card (representing Frame 55's four vector shapes)
const VectorGraphicGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full h-full p-2 items-center justify-items-center">
      {/* Vector 1: Node Connection */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-[90px] h-[90px] rounded-xl bg-[#00B4FD]/10 border border-[#00B4FD]/30 flex items-center justify-center relative overflow-hidden group/vector"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4FD]/20 to-transparent opacity-0 group-hover/vector:opacity-100 transition-opacity" />
        <svg className="w-10 h-10 text-[#00B4FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="5" r="3" />
          <circle cx="5" cy="19" r="3" />
          <circle cx="19" cy="19" r="3" />
          <path d="M12 8v8M7.5 17h9M12 12l-4.5 5M12 12l4.5 5" />
        </svg>
      </motion.div>

      {/* Vector 2: Growth Analytics */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-[90px] h-[90px] rounded-xl bg-[#00B4FD]/10 border border-[#00B4FD]/30 flex items-center justify-center relative overflow-hidden group/vector"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4FD]/20 to-transparent opacity-0 group-hover/vector:opacity-100 transition-opacity" />
        <svg className="w-10 h-10 text-[#00B4FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </motion.div>

      {/* Vector 3: Security Shield */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-[90px] h-[90px] rounded-xl bg-[#00B4FD]/10 border border-[#00B4FD]/30 flex items-center justify-center relative overflow-hidden group/vector"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4FD]/20 to-transparent opacity-0 group-hover/vector:opacity-100 transition-opacity" />
        <svg className="w-10 h-10 text-[#00B4FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </motion.div>

      {/* Vector 4: Database / Cloud Stack */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: -5 }}
        className="w-[90px] h-[90px] rounded-xl bg-[#00B4FD]/10 border border-[#00B4FD]/30 flex items-center justify-center relative overflow-hidden group/vector"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-[#00B4FD]/20 to-transparent opacity-0 group-hover/vector:opacity-100 transition-opacity" />
        <svg className="w-10 h-10 text-[#00B4FD]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      </motion.div>
    </div>
  );
};

const InsightsSection = () => {
  // Anim variants for staggered card reveals
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: customDelay,
        ease: [0.16, 1, 0.3, 1]
      }
    })
  };

  return (
    <section 
      id="insights"
      className="w-full bg-[#000D12] text-[#E9F4F9] py-16 lg:py-0 lg:h-[853px] relative overflow-hidden flex items-center z-20 border-t border-white/5"
    >
      {/* ── Background Ellipse Glow (Ellipse 1) ── */}
      <div 
        style={{
          position: 'absolute',
          width: '556.77px',
          height: '556.77px',
          left: '58.23px',
          top: '160.23px',
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          opacity: 0.1,
          filter: 'blur(100px)',
        }}
        className="pointer-events-none"
      />

      <div className="max-w-[1440px] w-full h-full relative px-6 md:px-12 lg:px-20 mx-auto flex flex-col justify-between lg:block">
        
        {/* ── Left Header (Frame 31) ── */}
        <div className="lg:absolute lg:left-[80px] lg:top-[80px] w-full lg:w-[463.26px] flex flex-col items-start gap-8 lg:gap-12 mb-12 lg:mb-0">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Archivo',
              fontWeight: 400,
              fontSize: '37px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
            }}
            className="text-[#E9F4F9] leading-tight"
          >
            Get yourself up-to-speed on all the things happening in fintech
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(233, 244, 249, 0.05)' }}
            whileTap={{ scale: 0.98 }}
            style={{
              boxSizing: 'border-box',
              width: '190px',
              height: '49px',
              border: '1px solid #E9F4F9',
              borderRadius: '10px',
              fontFamily: 'Chivo Mono Medium, monospace',
              fontSize: '15px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
            className="flex items-center justify-center text-[#E9F4F9] transition-colors"
          >
            request demo
          </motion.button>
        </div>

        {/* ── Right Content: Stack of Cards ── */}
        
        {/* Top Card (Frame 50) */}
        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={cardVariants}
          className="lg:absolute lg:left-[690px] lg:top-[80px] w-full lg:w-[670px] lg:h-[318px] bg-[#01141B] rounded-[18px] p-6 flex flex-col md:flex-row gap-6 items-center justify-between border border-white/[0.03] hover:border-[#00B4FD]/20 transition-all duration-300 group"
        >
          {/* Graphic Container (Frame 54) */}
          <div className="w-full md:w-[295px] h-[250px] md:h-[267px] bg-[#07193C] rounded-lg flex items-center justify-center overflow-hidden shrink-0">
            <VectorGraphicGrid />
          </div>

          {/* Info Area (Frame 57 & Frame 36) */}
          <div className="flex-1 flex flex-col justify-between h-full py-1">
            <div className="flex flex-col gap-2">
              <span className="text-[#2490BB] font-mono text-[12px] uppercase tracking-wider font-semibold opacity-80">
                getting started
              </span>
              <h3 
                style={{ fontFamily: 'Archivo' }}
                className="text-[#E9F4F9] text-[24px] lg:text-[27px] font-normal leading-[1.2] group-hover:text-[#00B4FD] transition-colors duration-300"
              >
                How to transition from a traditional to a digital bank
              </h3>
              
              {/* Author Row (Frame 56) */}
              <div className="flex gap-4 text-[#64A8C4]/80 font-normal text-[14px] mt-2">
                <span>David Grohl</span>
                <span>•</span>
                <span>17/08/24</span>
              </div>
            </div>

            {/* Outlined request demo button inside card (Frame 36) */}
            <motion.button 
              whileHover={{ scale: 1.01, borderColor: '#E9F4F9', color: '#E9F4F9' }}
              whileTap={{ scale: 0.99 }}
              style={{
                width: '100%',
                maxWidth: '287px',
                height: '36px',
                border: '1px solid rgba(233, 244, 249, 0.3)',
                borderRadius: '10px',
                fontFamily: 'Chivo Mono Medium, monospace',
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
              className="mt-6 md:mt-0 flex items-center justify-center text-white/50 transition-colors"
            >
              Request Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Cards Row (Frame 53) */}
        <div className="lg:absolute lg:left-[690px] lg:top-[431px] w-full lg:w-[670px] flex flex-col md:flex-row gap-[29px] mt-6 lg:mt-0">
          
          {/* Bottom Card Left (Frame 51) */}
          <motion.div
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="w-full md:w-[320.5px] h-[318px] bg-[#01141B] rounded-[18px] p-6 flex flex-col justify-between border border-white/[0.03] hover:border-[#00B4FD]/20 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[#2490BB] font-mono text-[12px] uppercase tracking-wider font-semibold opacity-80">
                getting started
              </span>
              <h3 
                style={{ fontFamily: 'Archivo' }}
                className="text-[#E9F4F9] text-[20px] lg:text-[22px] font-normal leading-[1.3] group-hover:text-[#00B4FD] transition-colors duration-300"
              >
                The future of API banking in emerging markets
              </h3>
              
              <div className="flex gap-4 text-[#64A8C4]/80 font-normal text-[13px] mt-2">
                <span>David Grohl</span>
                <span>•</span>
                <span>17/08/24</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01, borderColor: '#E9F4F9', color: '#E9F4F9' }}
              whileTap={{ scale: 0.99 }}
              style={{
                width: '100%',
                height: '36px',
                border: '1px solid rgba(233, 244, 249, 0.3)',
                borderRadius: '10px',
                fontFamily: 'Chivo Mono Medium, monospace',
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
              className="flex items-center justify-center text-white/50 transition-colors"
            >
              Request Demo
            </motion.button>
          </motion.div>

          {/* Bottom Card Right (Frame 53/51 clone) */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={cardVariants}
            className="w-full md:w-[320.5px] h-[318px] bg-[#01141B] rounded-[18px] p-6 flex flex-col justify-between border border-white/[0.03] hover:border-[#00B4FD]/20 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-2">
              <span className="text-[#2490BB] font-mono text-[12px] uppercase tracking-wider font-semibold opacity-80">
                getting started
              </span>
              <h3 
                style={{ fontFamily: 'Archivo' }}
                className="text-[#E9F4F9] text-[20px] lg:text-[22px] font-normal leading-[1.3] group-hover:text-[#00B4FD] transition-colors duration-300"
              >
                Securing multi-tenant cloud structures in finance
              </h3>
              
              <div className="flex gap-4 text-[#64A8C4]/80 font-normal text-[13px] mt-2">
                <span>David Grohl</span>
                <span>•</span>
                <span>17/08/24</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.01, borderColor: '#E9F4F9', color: '#E9F4F9' }}
              whileTap={{ scale: 0.99 }}
              style={{
                width: '100%',
                height: '36px',
                border: '1px solid rgba(233, 244, 249, 0.3)',
                borderRadius: '10px',
                fontFamily: 'Chivo Mono Medium, monospace',
                fontSize: '12px',
                textTransform: 'uppercase',
              }}
              className="flex items-center justify-center text-white/50 transition-colors"
            >
              Request Demo
            </motion.button>
          </motion.div>

        </div>

        {/* ── Bottom Right: Read All Insights (Component 1) ── */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="lg:absolute lg:left-[1198.43px] lg:top-[767px] flex flex-col gap-[3px] items-end justify-center w-[161.57px] cursor-pointer group/link mt-12 lg:mt-0 self-end"
        >
          <div className="flex items-center gap-[5px] w-full h-[18px]">
            <span className="text-[#00B4FD] text-[14px] font-mono uppercase text-right flex-1 tracking-wider">
              read all insights
            </span>
            {/* Arrow Wrapper Frame 58 */}
            <div className="w-[14px] h-[15px] flex items-center justify-center overflow-hidden shrink-0">
              <svg 
                className="w-3.5 h-3.5 text-[#00B4FD] transform group-hover/link:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
          {/* Blue Line Underneath (Line 1) */}
          <div className="w-[32.58px] h-0 border-t border-[#00B4FD] group-hover/link:w-full transition-all duration-300" />
        </motion.div>

      </div>
    </section>
  );
};

export default InsightsSection;
