import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <div className="fixed top-[31px] left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      {/* 
        Figma Specs Implementation:
        width: 716.45px
        height: 47px
        border-radius: 12px
        background: #2F2F2FB2 (Opacity roughly 70%)
        backdrop-filter: blur(15px)
      */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-auto flex items-center justify-between w-full max-w-[716px] h-[47px] bg-[#2F2F2F]/70 backdrop-blur-[15px] rounded-[12px] pl-[24px] pr-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.5)] border border-white/5"
      >
        {/* Brand Logo "N7" - Clean white vector text based on image */}
        <div className="text-[#E9F4F9] font-sans text-xl leading-none font-medium cursor-pointer">
          N7
        </div>

        {/* Centered Navigation Links using exact spacing derived from structure */}
        <div className="hidden md:flex items-center gap-8">
           <a href="#" className="flex items-center gap-1 text-[13px] font-mono text-[#E9F4F9] hover:text-white uppercase transition-colors tracing-wide">
              SOLUTIONS 
              <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
           </a>
           <a href="#" className="flex items-center gap-1 text-[13px] font-mono text-[#E9F4F9] hover:text-white uppercase transition-colors tracing-wide">
              RESOURCES 
              <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
           </a>
           <a href="#" className="text-[13px] font-mono text-[#E9F4F9] hover:text-white uppercase transition-colors tracing-wide">
              ABOUT US
           </a>
        </div>

        {/* Right CTA Button - Ghost style embedded natively in the bar */}
        <button className="h-[31px] px-[20px] rounded-[8px] border border-[#E9F4F9] text-[#E9F4F9] font-mono text-[12px] hover:bg-white/10 transition-colors uppercase whitespace-nowrap">
          REQUEST DEMO
        </button>

      </motion.nav>
    </div>
  );
};

export default Navbar;
