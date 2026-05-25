import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 pb-12 overflow-hidden bg-background">
      {/* Background Deep Glows */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary-glow pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* Left Side: Copy & CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-8"
          >
            {/* Header */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-serif text-white leading-[1.05] tracking-tight">
              The new foundation<br/>of modern banking
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg text-text-muted max-w-lg leading-relaxed font-light">
              We are a next-generation digital banking platform which gives you all of the financial infrastructure features you expect, without any of the legacy overhead.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-base shadow-[0_0_24px_rgba(13,100,255,0.4)]">
                Open an account
              </Button>
              <Button variant="ghost" className="w-full sm:w-auto px-8 py-3.5 text-base text-text-muted hover:text-white">
                Contact sales
              </Button>
            </div>
            
            {/* Social Proof / Used By */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="pt-12 flex flex-col gap-4"
            >
              <span className="text-xs text-text-muted uppercase tracking-widest font-semibold">Used by</span>
              <div className="flex items-center gap-8 opacity-40 grayscale">
                 {/* Faint placeholder logos */}
                 <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-sm"></div><span className="text-white font-bold tracking-tight">Vercel</span></div>
                 <div className="flex items-center gap-2"><div className="w-4 h-4 bg-white rounded-full"></div><span className="text-white font-bold tracking-tight">AcmeCorp</span></div>
                 <div className="flex items-center gap-2"><div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-white"></div><span className="text-white font-bold tracking-tight">Pinnacle</span></div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Floating Dashboard UI Composition */}
          <div className="relative w-full h-[500px] sm:h-[600px] flex justify-center items-center lg:justify-end mt-12 lg:mt-0">
            
            {/* Main Light Dashboard Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="absolute z-20 w-full max-w-lg right-0 lg:-right-12 rounded-2xl bg-white shadow-2xl overflow-hidden border border-gray-100 flex flex-col"
            >
              {/* Dashboard Topbar mock */}
              <div className="h-12 border-b border-gray-100 flex items-center justify-between px-4">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="flex gap-2">
                   <div className="w-24 h-4 bg-gray-100 rounded-full"></div>
                 </div>
              </div>
              {/* Dashboard Content mock */}
              <div className="flex flex-1 p-4 gap-4 h-64">
                 {/* Sidebar */}
                 <div className="w-1/4 flex flex-col gap-3">
                   <div className="w-full h-8 bg-primary/10 rounded-md"></div>
                   <div className="w-3/4 h-4 bg-gray-100 rounded-md"></div>
                   <div className="w-5/6 h-4 bg-gray-100 rounded-md"></div>
                 </div>
                 {/* Main Content Area */}
                 <div className="flex-1 flex flex-col gap-4">
                   <div className="flex justify-between items-end">
                      <div>
                        <div className="text-xs text-gray-400 font-medium pb-1">Total Balance</div>
                        <div className="text-3xl font-bold text-gray-900">$124,563.00</div>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4"/></svg>
                      </div>
                   </div>
                   <div className="flex-1 bg-gray-50 rounded-xl border border-gray-100 p-4 border-dashed relative overflow-hidden">
                      {/* Graph lines mock */}
                      <svg className="w-full h-full text-primary opacity-20 absolute inset-0" preserveAspectRatio="none" viewBox="0 0 100 100">
                         <path d="M0 100 C 20 80, 40 90, 60 50 S 80 40, 100 20 L 100 100 Z" fill="currentColor"/>
                      </svg>
                      {/* Bar charts mock */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between h-16 gap-2">
                         {[40,70,45,90,55].map((h,i) => (
                            <div key={i} className="flex-1 bg-primary rounded-sm" style={{height: `${h}%`}}></div>
                         ))}
                      </div>
                   </div>
                 </div>
              </div>
            </motion.div>

            {/* Overlapping Floating Element (Left Bottom) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="absolute -bottom-8 left-4 lg:-left-16 z-30 w-64 rounded-xl bg-white p-4 shadow-[0_20px_40px_rgba(0,0,0,0.2)] border border-gray-100"
            >
               <div className="flex items-center gap-3 mb-3">
                 <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                 </div>
                 <div>
                   <div className="text-sm font-bold text-gray-900">Incoming wire</div>
                   <div className="text-xs text-gray-500">From Acme Corp</div>
                 </div>
               </div>
               <div className="text-xl font-bold text-gray-900">+$12,500.00</div>
            </motion.div>
            
            {/* Overlapping Floating Element (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="absolute -top-4 right-4 lg:right-12 z-30 w-48 rounded-xl bg-background/90 backdrop-blur-md p-3 shadow-2xl border border-white/10"
            >
               <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                 <div className="text-xs text-white">System fully operational</div>
               </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
