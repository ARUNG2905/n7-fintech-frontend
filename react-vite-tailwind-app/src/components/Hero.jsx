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
   RECENT ACTIVITY CARD
   Figma: Home (position absolute, 208x177, left:353, top:calc(50%–177/2–39px))
   background: rgba(255,255,255,0.4), backdrop-filter: blur(6px), border-radius:12px

   Inner Frame 116 / Frame 5 fully reconstructed from Figma specs
   ───────────────────────────────────────────── */
const RecentActivityCard = () => {
  const transactions = [
    {
      id: 1,
      icon: '↗',
      iconBg: '#9280FD',
      name: 'To Jin',
      tag: 'Work',
      date: '12 jun 2022',
      amount: '-$59',
    },
    {
      id: 2,
      icon: '↙',
      iconBg: '#1738AD',
      name: 'From Google',
      tag: 'Salary',
      date: '10 jun 2022',
      amount: '+$859',
    },
    {
      id: 3,
      icon: '↗',
      iconBg: '#9280FD',
      name: 'To David',
      tag: 'Work',
      date: '7 jun 2022',
      amount: '-$479',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      style={{
        /* Figma: position absolute, w:254px h:117px (scaled), left:-28px, top:150px */
        position: 'absolute',
        left: '-28px',
        top: '140px',
        width: '254px',
        background: 'rgba(255,255,255,0.4)',
        backdropFilter: 'blur(8px)',
        borderRadius: '12px',
        zIndex: 30,
        overflow: 'hidden',
      }}
    >
      {/* Frame 116 inner white panel — rgba(255,255,255,0.7), border-radius:11px */}
      <div
        style={{
          margin: '4px',
          background: 'rgba(255,255,255,0.88)',
          borderRadius: '11px',
          padding: '10px 10px 8px',
        }}
      >
        {/* Header */}
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 700,
            fontSize: '12.6px',
            lineHeight: '18px',
            color: '#0F0F0F',
            marginBottom: '8px',
          }}
        >
          Recent activity
        </div>

        {/* Filter Pills – Figma exact: This Day | This Week (active #081E69) | This Month | 6 Month */}
        <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
          {['This Day', 'This Week', 'This Month', '6 Month'].map((t) => (
            <div
              key={t}
              style={{
                padding: '1.3px 7.6px',
                borderRadius: '10px',
                fontSize: '7.6px',
                fontWeight: 500,
                background: t === 'This Week' ? '#081E69' : '#F8F8F8',
                color: t === 'This Week' ? '#FFF' : '#0D0D0C',
                whiteSpace: 'nowrap',
                lineHeight: '13px',
              }}
            >
              {t}
            </div>
          ))}
        </div>

        {/* Transactions */}
        {transactions.map((tx, i) => (
          <div key={tx.id}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px 0',
              }}
            >
              {/* Icon box */}
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '8px',
                  background: tx.iconBg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ color: '#FCFEF5', fontSize: '12px', fontWeight: 700 }}>
                  {tx.icon}
                </span>
              </div>

              {/* Name / date */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: '8.6px',
                    lineHeight: '13px',
                    color: '#0B0B0B',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tx.name}{' '}
                  <span
                    style={{
                      fontWeight: 500,
                      opacity: 0.6,
                    }}
                  >
                    · {tx.tag}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '6.5px',
                    lineHeight: '11px',
                    color: '#0B0B0B',
                    opacity: 0.8,
                  }}
                >
                  {tx.date}
                </div>
              </div>

              {/* Amount */}
              <div
                style={{
                  fontWeight: 700,
                  fontSize: '8.6px',
                  lineHeight: '13px',
                  color: '#0B0B0B',
                  textAlign: 'right',
                  flexShrink: 0,
                }}
              >
                {tx.amount}
              </div>
            </div>

            {/* Figma divider: opacity 0.24, border 0.538px solid #0D0D0C */}
            {i < transactions.length - 1 && (
              <div
                style={{
                  borderBottom: '0.54px solid #0D0D0C',
                  opacity: 0.24,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   TOTAL BALANCE CARD
   Figma: Frame 116 — w:199px h:168px, left:5px, top:calc(50%–168px/2)
   background: rgba(255,255,255,0.7), border-radius:11px
   ───────────────────────────────────────────── */
const TotalBalanceCard = () => {
  const actions = [
    {
      label: 'Fund Transfer',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D0D0C" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
        </svg>
      ),
    },
    {
      label: 'Add Money',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D0D0C" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      ),
    },
    {
      label: 'More',
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0D0D0C" strokeWidth="1.5">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
        </svg>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{
        /* Figma outer: Home, w:208px h:177px – positioned top-right of image */
        position: 'absolute',
        right: '-24px',
        top: '-40px',
        width: '208px',
        background: 'rgba(255,255,255,0.4)',
        boxShadow: '0px 0px 27.57px 8.92px rgba(0,0,0,0.25)',
        backdropFilter: 'blur(6px)',
        borderRadius: '12px',
        zIndex: 30,
        overflow: 'hidden',
      }}
    >
      {/* Frame 116 inner: rgba(255,255,255,0.7), border-radius:11px */}
      <div
        style={{
          margin: '4px',
          background: 'rgba(255,255,255,0.82)',
          borderRadius: '11px',
          padding: '10px',
        }}
      >
        {/* Row 1: Avatar + Name + Bell */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
          {/* Avatar — Figma: Rectangle 11, w:32.92px, border-radius:10.97px */}
          <div
            style={{
              width: '33px',
              height: '33px',
              borderRadius: '11px',
              overflow: 'hidden',
              background: '#D9D9D9',
              flexShrink: 0,
            }}
          >
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100"
              alt="Toni Kross"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Name block */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '8.6px',
                lineHeight: '10px',
                color: '#0D0D0C',
              }}
            >
              Toni Kross
            </div>
            <div
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '6.5px',
                lineHeight: '8px',
                color: '#0D0D0C',
                opacity: 0.6,
                marginTop: '2px',
              }}
            >
              Good Morning
            </div>
          </div>

          {/* Bell — Figma: Rectangle 10, w:21.95px, rounded-[8px], bg:#F8F8F8 */}
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '8px',
              background: '#F8F8F8',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#0D0D0C" strokeWidth="1.8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        </div>

        {/* Balance block */}
        <div style={{ marginBottom: '8px' }}>
          <div
            style={{
              fontSize: '7.5px',
              lineHeight: '12px',
              color: '#1D1D1D',
              opacity: 0.6,
            }}
          >
            Total balance
          </div>
          <div
            style={{
              fontWeight: 700,
              fontSize: '15px',
              lineHeight: '19px',
              color: '#081E69',
            }}
          >
            $42,295.00 USD
          </div>
        </div>

        {/* Divider — Figma: Line 1, opacity 0.24, border 0.686px solid #FFFFFF */}
        <div style={{ borderBottom: '0.69px solid #FFFFFF', opacity: 0.24, marginBottom: '8px' }} />

        {/* Action grid – 3 items */}
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {actions.map((a) => (
            <div
              key={a.label}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}
            >
              {/* Icon box — Figma: Rectangle 3/1/7, w:41.16px h:41.16px, bg:#F8F8F8, border-radius:16.46px */}
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '10px',
                  background: '#F8F8F8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {a.icon}
              </div>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '7.5px',
                  lineHeight: '12px',
                  color: '#0D0D0C',
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                }}
              >
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

/* ─────────────────────────────────────────────
   HERO SECTION
   Figma: Desktop-1, w:1440px h:811px, bg:#000D12
   ───────────────────────────────────────────── */
const Hero = () => {
  return (
    <section
      style={{ background: '#000D12' }}
      className="relative w-full min-h-screen overflow-hidden flex items-center"
    >
      {/* ── Ellipse 1 gradient ──
          Figma: position absolute, w:398.87 h:398.87, left:873.13 top:204.52
          background: linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)
          opacity:0.5, filter:blur(50px)
      */}
      <div
        style={{
          position: 'absolute',
          width: '398.87px',
          height: '398.87px',
          /* Translate from absolute to % for responsiveness */
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
        style={{ padding: '0 40px' }}
      >
        <div className="flex items-center justify-between gap-8">

          {/* ── LEFT COLUMN ──
              Figma: Frame 5 — w:607.83 h:319, left:80, top:211.96
              display:flex, flex-direction:column, gap:52px
          */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '52px',
              width: '100%',
              maxWidth: '608px',
              flexShrink: 0,
            }}
          >
            {/* Frame 4: gap:16px */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* H1 — Figma: font-family:Archivo, weight:500, size:67px, lh:120%, ls:-0.01em, color:#E9F4F9 */}
              <h1
                style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontWeight: 500,
                  fontSize: 'clamp(38px, 4.65vw, 67px)',
                  lineHeight: '120%',
                  letterSpacing: '-0.01em',
                  color: '#E9F4F9',
                  margin: 0,
                  maxWidth: '608px',
                }}
              >
                The new foundation of modern banking
              </h1>

              {/* Subtitle — Figma: Archivo 400 16px lh:130% color:#E9F4F9 opacity:0.8, w:356.17px */}
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

            {/* Frame 3: CTA Buttons — Figma: flex-row, gap:20px, w:438 h:49 */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', alignItems: 'center' }}>
              {/* Frame 1 — Primary: w:210 h:49, padding:15px 51px, gradient, border-radius:10px */}
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

              {/* Frame 2 — Ghost: w:208 h:49, padding:15px 59px, border:1px solid #E9F4F9, border-radius:10px */}
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

            {/* Frame 75: Trusted By — Figma: left:80, top:655.06 (below frame 5), gap:16px */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {/* Label — Figma: Archivo 500 16px lh:130%, color:#E9F4F9, opacity:0.7, text-transform:capitalize */}
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

              {/* Row — Figma: flex-row, gap:18.4px, opacity:0.9 */}
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
                    {/* Figma: Roboto Bold 13.7984px lh:110%, color:#586E84 */}
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
          */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block"
            style={{
              position: 'relative',
              width: '562px',
              height: '301px',
              flexShrink: 0,
            }}
          >
            {/* Pexels Photo — Figma: w:362.64 h:300.71, left:87.13, border-radius:31px */}
            <div
              style={{
                position: 'absolute',
                width: '362.64px',
                height: '300.71px',
                left: '87.13px',
                top: '0.25px',
                borderRadius: '31px',
                overflow: 'hidden',
                background: '#1a1a1a',
              }}
            >
              <img
                src="https://images.pexels.com/photos/3756673/pexels-photo-3756673.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Person using banking app"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Floating cards layered over the photo */}
            <RecentActivityCard />
            <TotalBalanceCard />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
