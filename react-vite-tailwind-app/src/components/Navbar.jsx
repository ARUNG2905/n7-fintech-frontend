import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        {/* Brand Logo "N7" */}
        <div className="text-[#E9F4F9] font-sans text-xl leading-none font-medium cursor-pointer">
          N7
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
           <a href="#" className="flex items-center gap-1 text-[13px] font-mono text-[#E9F4F9] hover:text-white uppercase transition-colors tracking-wide">
              SOLUTIONS 
              <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
           </a>
           <a href="#" className="flex items-center gap-1 text-[13px] font-mono text-[#E9F4F9] hover:text-white uppercase transition-colors tracking-wide">
              RESOURCES 
              <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
           </a>
           <a href="#" className="text-[13px] font-mono text-[#E9F4F9] hover:text-white uppercase transition-colors tracking-wide">
              ABOUT US
           </a>
        </div>

        {/* Right side: CTA + Hamburger */}
        <div className="flex items-center gap-2">
          <button className="h-[31px] px-[20px] rounded-[8px] border border-[#E9F4F9] text-[#E9F4F9] font-mono text-[12px] hover:bg-white/10 transition-colors uppercase whitespace-nowrap hidden sm:block">
            REQUEST DEMO
          </button>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden flex items-center justify-center w-[36px] h-[36px] rounded-[8px] hover:bg-white/10 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-5 h-5 text-[#E9F4F9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </motion.nav>

      {/* Mobile Slide-Out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="pointer-events-auto absolute top-[60px] left-4 right-4 mx-auto max-w-[716px] bg-[#1A1F25]/95 backdrop-blur-[20px] rounded-[12px] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-5 flex flex-col gap-1 md:hidden"
          >
            <a href="#" className="flex items-center justify-between text-[14px] font-mono text-[#E9F4F9] hover:text-[#00B4FD] uppercase transition-colors tracking-wide py-3 border-b border-white/5">
              SOLUTIONS
              <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="flex items-center justify-between text-[14px] font-mono text-[#E9F4F9] hover:text-[#00B4FD] uppercase transition-colors tracking-wide py-3 border-b border-white/5">
              RESOURCES
              <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#" className="text-[14px] font-mono text-[#E9F4F9] hover:text-[#00B4FD] uppercase transition-colors tracking-wide py-3 border-b border-white/5">
              ABOUT US
            </a>
            <button className="mt-3 w-full h-[44px] rounded-[10px] bg-gradient-to-r from-[#00B4FD] to-[#003ACE] text-white font-mono text-[13px] uppercase tracking-wide hover:opacity-90 transition-opacity">
              REQUEST DEMO
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
