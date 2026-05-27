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
      {/* Figma Desktop-1: w:1440px h:811px */}
      <div style={{ height: '811px', position: 'relative' }}>
        {/* ── Ellipse 1 gradient ── */}
        <div
          style={{
            position: 'absolute',
            width: '398.87px',
            height: '398.87px',
            right: '0',
            top: '204px',
            background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
            opacity: 0.5,
            filter: 'blur(50px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        <div
          className="relative z-10 w-full max-w-[1440px] mx-auto"
          style={{ position: 'relative', height: '100%' }}
        >
          <div style={{ position: 'relative', height: '100%' }}>

            {/* ── LEFT COLUMN ──
                Figma: Frame 5 — w:607.83 h:319, left:80, top:211.96
            */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              style={{
                position: 'absolute',
                left: '80px',
                top: '211.96px',
                display: 'flex',
                flexDirection: 'column',
                gap: '52px',
                width: '607.83px',
              }}
            >
              {/* Frame 4: gap:16px */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* H1 — Figma: Archivo 500 67px lh:120% ls:-0.01em color:#E9F4F9 */}
                <h1
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 500,
                    fontSize: '67px',
                    lineHeight: '120%',
                    letterSpacing: '-0.01em',
                    color: '#E9F4F9',
                    margin: 0,
                    maxWidth: '608px',
                  }}
                >
                  The new foundation of modern banking
                </h1>

                {/* Subtitle — Figma: Archivo 400 16px lh:130% color:#E9F4F9 opacity:0.8 w:356.17px */}
                <p
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '130%',
                    color: '#E9F4F9',
                    opacity: 0.8,
                    maxWidth: '356px',
                    margin: 0,
                  }}
                >
                  We drive innovation and growth, provide seamless customer experience and operational excellence
                </p>
              </div>

              {/* Frame 3: CTA Buttons — Figma: flex-row, gap:20px */}
              <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '210px',
                    height: '49px',
                    padding: '15px 51px',
                    background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
                    borderRadius: '10px',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Chivo Mono, monospace',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '130%',
                    textTransform: 'uppercase',
                    color: '#FFFFFF',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  Request Demo
                </button>

                <button
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '208px',
                    height: '49px',
                    padding: '15px 59px',
                    background: 'transparent',
                    borderRadius: '10px',
                    border: '1px solid #E9F4F9',
                    cursor: 'pointer',
                    fontFamily: 'Chivo Mono, monospace',
                    fontWeight: 400,
                    fontSize: '15px',
                    lineHeight: '130%',
                    textTransform: 'uppercase',
                    color: '#E9F4F9',
                    whiteSpace: 'nowrap',
                    transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(233,244,249,0.07)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  Contact Us
                </button>
              </div>

              {/* Frame 75: Trusted By */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '130%',
                    textTransform: 'capitalize',
                    color: '#E9F4F9',
                    opacity: 0.7,
                  }}
                >
                  trusted by:
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '18.4px',
                    opacity: 0.9,
                  }}
                >
                  {logos.map((logo) => (
                    <div
                      key={logo.label}
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '4.6px',
                      }}
                    >
                      <LogoIcon name={logo.icon} />
                      <span
                        style={{
                          fontFamily: 'Roboto, sans-serif',
                          fontWeight: 700,
                          fontSize: '13.8px',
                          lineHeight: '110%',
                          color: '#586E84',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        {logo.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ── RIGHT COLUMN ──
                Figma: Frame 114 — w:562 h:301, left:818, top:calc(50%–301/2)
                NOW USING THE ACTUAL EXPORTED Frame-114.png IMAGE
            */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:block"
              style={{
                position: 'absolute',
                left: '818px',
                top: 'calc(50% - 301px/2)',
                width: '562px',
                height: '301px',
              }}
            >
              {/* Single exported image replaces all hardcoded photo + floating cards */}
              <img
                src="/n7-assets/Frame-114.png"
                alt="N7 Banking App - Dashboard with Total Balance, Recent Activity, and Fund Transfer features"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  display: 'block',
                }}
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
