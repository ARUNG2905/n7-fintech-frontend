import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────
   TRUSTED LOGOS  (Figma: Row, gap 18.4px, opacity 0.9)
   font: Roboto Bold 13.7984px, color #586E84
   ───────────────────────────────────────────── */
const logos = [
  { icon: 'shells', label: 'SHELLS' },
  { icon: 'smartfinder', label: 'SmartFinder' },
  { icon: 'zoomerr', label: 'Zoomerr' },
  { icon: 'artvenue', label: 'ArtVenue' },
  { icon: 'kontrastr', label: 'kontrastr' },
  { icon: 'waves', label: 'WAVESMARATHON' },
];

/* Minimal inline SVG glyphs matching Figma vector shapes */
const LogoIcon = ({ name }) => {
  const s = { fill: '#586E84', display: 'block' };
  switch (name) {
    case 'shells':
      return (
        <svg width="18" height="19" viewBox="0 0 18 19" style={s}>
          <path d="M9 1C4.58 1 1 4.58 1 9s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14.4A6.4 6.4 0 012.6 9 6.4 6.4 0 019 2.6a6.37 6.37 0 014.8 2.18l-1.6-2.76c-.07-.11-.2-.18-.33-.15-.37.07-.74.21-1.08.4C9.69 3.09 9 4.17 8.92 5.49A1.6 1.6 0 017.36 6.94H6.8c-.44 0-.8-.36-.8-.8v-1.6c0-1.77 1.43-3.2 3.2-3.2 1.07 0 2.02.53 2.6 1.34A6.39 6.39 0 013 9c0 1.78.84 3.37 2.14 4.38l1.33-4.1c.25-.4.82-.39 1.07.02l1.89 3.2A6.37 6.37 0 019 12.8a4.8 4.8 0 010-9.6z" />
        </svg>
      );
    case 'smartfinder':
      return (
        <svg width="19" height="19" viewBox="0 0 19 19" style={s}>
          <rect x="1" y="1" width="17" height="17" rx="2" fill="none" stroke="#586E84" strokeWidth="1.5" />
          <circle cx="8" cy="8" r="3.5" fill="none" stroke="#586E84" strokeWidth="1.5" />
          <line x1="11" y1="11" x2="15" y2="15" stroke="#586E84" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'zoomerr':
      return (
        <svg width="19" height="19" viewBox="0 0 19 19" style={s}>
          <circle cx="9.5" cy="9.5" r="8" fill="none" stroke="#586E84" strokeWidth="1.5" />
          <polygon points="9.5,4 14,14 5,14" fill="#586E84" />
        </svg>
      );
    case 'artvenue':
      return (
        <svg width="14" height="17" viewBox="0 0 14 17" fill="none">
          <rect x="1" y="1" width="3.5" height="15" rx="1" fill="#586E84" />
          <rect x="5.25" y="3" width="3.5" height="13" rx="1" fill="#586E84" />
          <rect x="9.5" y="5" width="3.5" height="11" rx="1" fill="#586E84" />
        </svg>
      );
    case 'kontrastr':
      return (
        <svg width="13" height="19" viewBox="0 0 13 19" style={s}>
          <path d="M0 0h6.5v19H0zM6.5 9.5l6 9.5H6.5V9.5zM6.5 9.5V0l6 9.5H6.5z" />
        </svg>
      );
    case 'waves':
    default:
      return (
        <svg width="12" height="19" viewBox="0 0 12 19" style={s}>
          <rect x="0" y="0" width="3" height="19" rx="1.5" />
          <rect x="4.5" y="4" width="3" height="15" rx="1.5" />
          <rect x="9" y="8" width="3" height="11" rx="1.5" />
        </svg>
      );
  }
};

/* ─────────────────────────────────────────────
   HERO SECTION
   Figma: Desktop-1, w:1440px h:811px, bg:#000D12
   ───────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      style={{ background: '#000D12' }}
      className="relative w-full overflow-hidden"
    >
      {/* ── Ellipse 1 gradient ── */}
      <div
        className="absolute w-[200px] h-[200px] md:w-[398.87px] md:h-[398.87px] right-0 lg:right-0 top-1/4 lg:top-[204px] z-0 pointer-events-none"
        style={{
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          opacity: 0.5,
          filter: 'blur(50px)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto min-h-[100vh] lg:min-h-[811px] px-6 lg:px-0 flex flex-col lg:block pt-32 lg:pt-0 pb-16 lg:pb-0">
        
        {/* ── LEFT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="flex flex-col gap-8 lg:gap-[52px] w-full lg:w-[607.83px] lg:absolute lg:left-[80px] lg:top-[211.96px] z-10"
        >
          {/* Text Content */}
          <div className="flex flex-col gap-4 lg:gap-[16px]">
            <h1
              style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.01em',
                color: '#E9F4F9',
              }}
              className="text-4xl md:text-5xl lg:text-[67px] leading-[1.2] m-0 max-w-full lg:max-w-[608px]"
            >
              The new foundation of modern banking
            </h1>

            <p
              style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 400,
                color: '#E9F4F9',
              }}
              className="text-base lg:text-[16px] leading-[1.3] opacity-80 max-w-full lg:max-w-[356px] m-0"
            >
              We drive innovation and growth, provide seamless customer experience and operational excellence
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-[20px] items-start sm:items-center w-full">
            <button
              style={{
                background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
                fontFamily: 'Chivo Mono, monospace',
              }}
              className="flex items-center justify-center w-full sm:w-[210px] h-[49px] px-[51px] py-[15px] rounded-[10px] border-none cursor-pointer font-normal text-[15px] leading-[1.3] uppercase text-white whitespace-nowrap transition-opacity hover:opacity-85"
            >
              Request Demo
            </button>

            <button
              style={{
                background: 'transparent',
                border: '1px solid #E9F4F9',
                fontFamily: 'Chivo Mono, monospace',
              }}
              className="flex items-center justify-center w-full sm:w-[208px] h-[49px] px-[59px] py-[15px] rounded-[10px] cursor-pointer font-normal text-[15px] leading-[1.3] uppercase text-[#E9F4F9] whitespace-nowrap transition-colors hover:bg-white/5"
            >
              Contact Us
            </button>
          </div>

          {/* Trusted By */}
          <div className="flex flex-col gap-4 lg:gap-[16px]">
            <div
              style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 500,
              }}
              className="text-[16px] leading-[1.3] capitalize text-[#E9F4F9] opacity-70"
            >
              trusted by:
            </div>

            <div className="flex flex-row items-center flex-wrap gap-4 lg:gap-[18.4px] opacity-90">
              {logos.map((logo) => (
                <div
                  key={logo.label}
                  className="flex flex-row items-center justify-center gap-1.5 lg:gap-[4.6px]"
                >
                  <LogoIcon name={logo.icon} />
                  <span
                    style={{
                      fontFamily: 'Roboto, sans-serif',
                      fontWeight: 700,
                      color: '#586E84',
                    }}
                    className="text-xs lg:text-[13.8px] leading-[1.1] flex items-center"
                  >
                    {logo.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full mt-12 lg:mt-0 lg:absolute lg:left-[818px] lg:top-[255px] lg:w-[562px] lg:h-[301px] z-10"
        >
          <img
            src="/n7-assets/Frame-114.png"
            alt="N7 Banking App - Dashboard with Total Balance, Recent Activity, and Fund Transfer features"
            className="w-full h-auto lg:w-full lg:h-full object-contain mx-auto"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
