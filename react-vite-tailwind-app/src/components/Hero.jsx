import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

// Utility for rendering the simple vector logos from Figma specs
const TrustedLogo = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity cursor-default">
    <div className="text-[#586E84] flex items-center justify-center">
      {Icon}
    </div>
    {text && <span className="font-bold text-[14px] text-[#586E84] tracking-tight">{text}</span>}
  </div>
);

// Figma-to-Tailwind implementation of the "Recent Activity" floating card
const RecentActivityCard = () => {
  return (
    <motion.div 
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute z-30 left-[-40px] top-[150px] sm:left-[-120px] sm:top-[220px] w-[260px] md:w-[320px] rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.4)] bg-white/70 backdrop-blur-md overflow-hidden border border-white/40"
    >
      <div className="p-5 flex flex-col gap-4 relative">
        <h3 className="font-bold text-[#0F0F0F] text-[13px] leading-tight">Recent activity</h3>
        
        {/* Toggle Pills */}
        <div className="flex items-center gap-1.5 text-[8px] font-medium text-[#0D0D0C]">
          <div className="bg-[#F8F8F8] px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">This Day</div>
          <div className="bg-[#081E69] text-white px-3 py-1 rounded-full shadow-md cursor-pointer">This Week</div>
          <div className="bg-[#F8F8F8] px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">This Month</div>
          <div className="bg-[#F8F8F8] px-3 py-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors">6 Month</div>
        </div>

        {/* Transactions list */}
        <div className="flex flex-col gap-3 mt-1 relative">
           
           {/* Item 1 */}
           <div className="flex items-center justify-between border-b border-[#0D0D0C]/10 pb-3">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-[#9280FD] flex items-center justify-center shadow-inner">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5m0 0v10m0-10H9" />
                    </svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-[#0B0B0B] text-[11px]">To Jin <span className="font-medium opacity-60">· Work</span></span>
                    <span className="text-[9px] text-[#0B0B0B] opacity-60">12 jun 2022</span>
                 </div>
              </div>
              <span className="font-bold text-[#0B0B0B] text-[12px]">-$59</span>
           </div>

           {/* Item 2 */}
           <div className="flex items-center justify-between border-b border-[#0D0D0C]/10 pb-3">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-[#1738AD] flex items-center justify-center shadow-inner">
                    <svg className="w-3.5 h-3.5 text-white transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5m0 0v10m0-10H9" />
                    </svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-[#0B0B0B] text-[11px]">From Google <span className="font-medium opacity-60">· Salary</span></span>
                    <span className="text-[9px] text-[#0B0B0B] opacity-60">10 jun 2022</span>
                 </div>
              </div>
              <span className="font-bold text-[#0B0B0B] text-[12px]">+$859</span>
           </div>
           
           {/* Item 3 */}
           <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-xl bg-[#9280FD] flex items-center justify-center shadow-inner">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 19L19 5m0 0v10m0-10H9" />
                    </svg>
                 </div>
                 <div className="flex flex-col">
                    <span className="font-bold text-[#0B0B0B] text-[11px]">To David <span className="font-medium opacity-60">· Work</span></span>
                    <span className="text-[9px] text-[#0B0B0B] opacity-60">7 jun 2022</span>
                 </div>
              </div>
              <span className="font-bold text-[#0B0B0B] text-[12px]">-$479</span>
           </div>

        </div>
      </div>
    </motion.div>
  );
};

// Figma-to-Tailwind implementation of the "Total balance" floating card
const TotalBalanceCard = () => {
  return (
    <motion.div 
      animate={{ y: [0, 15, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute z-20 right-[-20px] sm:right-[-90px] top-[-30px] sm:top-[-60px] p-[20px] w-[240px] md:w-[260px] rounded-[18px] bg-white/75 backdrop-blur-lg border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex flex-col gap-6"
    >
        {/* User Handle Layer */}
        <div className="flex justify-between items-start">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cover bg-center bg-[#D9D9D9] shadow-sm relative overflow-hidden">
                 <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150" alt="Avatar" className="object-cover w-full h-full" />
              </div>
              <div className="flex flex-col justify-center">
                 <span className="font-inter font-bold text-[#0D0D0C] text-[11px] leading-none mb-1">Toni Kross</span>
                 <span className="font-inter text-[#0D0D0C]/60 text-[9px] leading-none">Good Morning</span>
              </div>
           </div>
           
           <div className="w-7 h-7 bg-[#F8F8F8] rounded-xl flex items-center justify-center shadow-sm cursor-pointer hover:bg-gray-200 transition-colors border border-black/5">
              <svg className="w-3.5 h-3.5 text-[#0D0D0C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
           </div>
        </div>

        {/* Balance */}
        <div className="flex flex-col gap-1.5 pb-5 border-b border-white">
           <span className="font-sans text-[#1D1D1D]/60 text-[10px]">Total balance</span>
           <span className="font-bold text-[#081E69] text-[20px] tracking-tight leading-none">$42,295.00 USD</span>
        </div>

        {/* Action Grid */}
        <div className="flex justify-between items-center px-1 pb-1">
           <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm">
                 <svg className="w-5 h-5 text-[#0D0D0C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                 </svg>
              </div>
              <span className="font-bold text-[#0D0D0C] text-[9px]">Fund Transfer</span>
           </div>
           <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm border border-black/5">
                 <svg className="w-5 h-5 text-[#0D0D0C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>
              </div>
              <span className="font-bold text-[#0D0D0C] text-[9px]">Add Money</span>
           </div>
           <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="w-12 h-12 rounded-2xl bg-[#F8F8F8] flex items-center justify-center group-hover:bg-primary/10 transition-colors shadow-sm border border-black/5">
                 <svg className="w-4 h-4 text-[#0D0D0C]" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="3" y="3" width="7" height="7" rx="1.5" />
                    <rect x="14" y="3" width="7" height="7" rx="1.5" />
                    <rect x="3" y="14" width="7" height="7" rx="1.5" />
                    <rect x="14" y="14" width="7" height="7" rx="1.5" />
                 </svg>
              </div>
              <span className="font-bold text-[#0D0D0C] text-[9px]">More</span>
           </div>
        </div>
    </motion.div>
  );
};


const Hero = () => {
  return (
    <section className="relative min-h-[820px] bg-[#000D12] overflow-hidden flex items-center pt-24 pb-16 lg:pt-32">
      
      {/* Background Gradient Ellipse exactly to Figma Specs */}
      <div 
        className="absolute w-[400px] h-[400px] right-[-100px] top-[20%] pointer-events-none opacity-50 z-0"
        style={{
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          filter: 'blur(50px)'
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-20 lg:gap-8">
          
          {/* Left Column: Typography & CTAs Component exactly to Figma bounds */}
          <div className="flex flex-col w-full lg:w-[608px] pt-4 lg:pt-10 z-10 shrink-0">
            
            <div className="flex flex-col gap-4 max-w-[608px] mb-[52px]">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-sans font-medium text-[48px] sm:text-[67px] leading-[1.1] sm:leading-[120%] tracking-[-0.01em] text-[#E9F4F9]"
              >
                The new foundation of modern banking
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-sans text-[16px] leading-[130%] text-[#E9F4F9] opacity-80 max-w-[356px]"
              >
                We drive innovation and growth, provide seamless customer experience and operational excellence
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center gap-5 mb-16"
            >
              <Button variant="primary" className="w-full sm:w-[210px]">
                Request Demo
              </Button>
              <Button variant="ghost" className="w-full sm:w-[208px]">
                Contact Us
              </Button>
            </motion.div>

            {/* Trusted By Section directly mapped to Figma structure */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col gap-4 mt-8"
            >
              <span className="font-sans font-medium text-[16px] text-[#E9F4F9] opacity-70 capitalize">
                trusted by:
              </span>
              <div className="flex flex-wrap items-center gap-[18px] opacity-90">
                 {/* Re-created SVG abstractions matching the exact spacing and hex codes */}
                 <TrustedLogo 
                    text="SHELLS" 
                    icon={<svg width="18" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 4c4.41 0 8 3.59 8 8 0 1.25-.29 2.43-.8 3.48l-2.02-3.48c-.08-.14-.24-.22-.41-.19-.48.09-.94.27-1.37.51-1.37.81-2.28 2.22-2.38 3.86a2.001 2.001 0 01-1.95 1.81H11c-.55 0-1-.45-1-1v-2c0-2.21 1.79-4 4-4 1.34 0 2.53.66 3.25 1.68C16.32 6.13 14.31 5 12 5c-3.87 0-7 3.13-7 7 0 2.23 1.05 4.21 2.68 5.48L9.93 13.5c.31-.5 1.03-.49 1.34.02l2.36 4C13.2 17.82 12.61 18 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6z"/></svg>} 
                 />
                 <TrustedLogo 
                    text="SmartFinder" 
                    icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 13.09C9 13.58 8.58 14 8.09 14H5V5h14v9H12.91C12.42 14 12 13.58 12 13.09V11c0-.55-.45-1-1-1s-1 .45-1 1v2.09z"/></svg>} 
                 />
                 <TrustedLogo 
                    text="Zoomerr" 
                    icon={<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="3"/><path d="M12 7l-5 8h10l-5-8z" /></svg>} 
                 />
                 <TrustedLogo 
                    text="ArtVenue" 
                    icon={<svg width="24" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6L10 18M10 6L16 18M16 6L22 18" /></svg>} 
                 />
                 <TrustedLogo 
                    text="kontrastr" 
                    icon={<svg width="14" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3h18v18H3zM12 5v14l7-7-7-7z" /></svg>} 
                 />
                 <TrustedLogo 
                    text="WAVESMARATHON" 
                    icon={<svg width="13" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M3 12l4-8v16L3 12zm8 0l4-8v16l-4-8zm8 0l4-8v16l-4-8z" /></svg>} 
                 />
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Showcase Image / Cards perfectly translated from Figma */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[562px]"
          >
             <div className="relative w-full h-[400px]">
                {/* The core 'Pexels Photo' */}
                <div className="absolute right-[50px] sm:right-[110px] top-[40px] shadow-2xl overflow-hidden rounded-[31px] bg-[#222]">
                   <img 
                      src="https://images.pexels.com/photos/3756673/pexels-photo-3756673.jpeg?auto=compress&cs=tinysrgb&w=800" 
                      alt="Modern Banking User" 
                      className="w-[362px] h-[300px] object-cover opacity-90 block"
                   />
                </div>

                {/* The Floating UI Cards */}
                <RecentActivityCard />
                <TotalBalanceCard />
             </div>
          </motion.div>
        
        </div>
      </div>
    </section>
  );
};

export default Hero;
