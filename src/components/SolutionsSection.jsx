import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SOLUTIONS SECTION  (Frame 13 — "All of our solutions are
   tailor-made to your needs")
   
   Figma specs:
   • bg: #000D12, w:1440 h:1177
   • Left col (Frame 31): left:80, top:47, w:433
     - Heading: Archivo 400 37px lh:120% ls:-0.01em #E9F4F9
     - Button: ghost, w:226 h:49, border:1px solid #E9F4F9, border-radius:10px
   • Right col (Frame 87): left:730, flex-wrap, gap:52px 76px
     - 5 cards: w:268.51px each
     - Icon: 47x49px SVG
     - Title: Archivo 400 22px lh:120% #E9F4F9
     - Body: Archivo 400 16px lh:130% #E9F4F9 opacity:0.7
     - "LEARN MORE →": Chivo Mono 400 14px uppercase #00B4FD
     - Underline: 32.58px, 1px solid #00B4FD
   ───────────────────────────────────────────────────────────────── */

/* ── SVG Icons (line-art, stroke style matching Figma vectors) ── */
const CoreBankingIcon = () => (
  <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="23.5" cy="24.5" r="14" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <circle cx="23.5" cy="24.5" r="7" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="23.5" y1="4" x2="23.5" y2="10" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="23.5" y1="39" x2="23.5" y2="45" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="4" y1="24.5" x2="10" y2="24.5" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="37" y1="24.5" x2="43" y2="24.5" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="9.5" y1="9.5" x2="14" y2="14" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="33" y1="33" x2="37.5" y2="37.5" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="37.5" y1="9.5" x2="33" y2="14" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
    <line x1="14" y1="33" x2="9.5" y2="37.5" stroke="#E9F4F9" strokeWidth="1.2" strokeOpacity="0.7"/>
  </svg>
);

const DigitalBankingIcon = () => (
  <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 4-petal flower / propeller shape */}
    <path d="M23.5 12C23.5 12 18 18 23.5 24.5C29 18 23.5 12 23.5 12Z" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7" fill="none"/>
    <path d="M35 24.5C35 24.5 29 30 23.5 24.5C29 19 35 24.5 35 24.5Z" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7" fill="none"/>
    <path d="M23.5 37C23.5 37 29 31 23.5 24.5C18 31 23.5 37 23.5 37Z" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7" fill="none"/>
    <path d="M12 24.5C12 24.5 18 19 23.5 24.5C18 30 12 24.5 12 24.5Z" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7" fill="none"/>
    <circle cx="23.5" cy="24.5" r="2.5" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
  </svg>
);

const OpenBankingIcon = () => (
  <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* X / crossing arrows shape */}
    <circle cx="23.5" cy="24.5" r="14" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <line x1="13" y1="14" x2="34" y2="35" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <line x1="34" y1="14" x2="13" y2="35" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <circle cx="23.5" cy="24.5" r="5" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
  </svg>
);

const LoanOriginationIcon = () => (
  <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 4 squares / grid */}
    <rect x="9" y="10" width="12" height="12" rx="1.5" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <rect x="26" y="10" width="12" height="12" rx="1.5" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <rect x="9" y="27" width="12" height="12" rx="1.5" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <rect x="26" y="27" width="12" height="12" rx="1.5" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
  </svg>
);

const LoanManagementIcon = () => (
  <svg width="47" height="49" viewBox="0 0 47 49" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Diamond / rhombus shape */}
    <path d="M23.5 8L39 24.5L23.5 41L8 24.5L23.5 8Z" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <path d="M23.5 16L32 24.5L23.5 33L15 24.5L23.5 16Z" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7"/>
    <line x1="23.5" y1="8" x2="23.5" y2="41" stroke="#E9F4F9" strokeWidth="1.1" strokeOpacity="0.7" strokeDasharray="2 3"/>
  </svg>
);

/* ── "Learn More →" link component ── */
const LearnMore = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', width: '102.57px' }}>
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '5px' }}>
      {/* "learn more" text — Figma: Chivo Mono 14px uppercase #00B4FD */}
      <span style={{
        fontFamily: 'Chivo Mono, monospace',
        fontWeight: 400,
        fontSize: '14px',
        lineHeight: '130%',
        textTransform: 'uppercase',
        color: '#00B4FD',
        cursor: 'pointer',
      }}>
        learn more
      </span>
      {/* Arrow — Figma: rotated arrow vectors in #00B4FD */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="#00B4FD" strokeWidth="0.94" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    {/* Figma: Line 1 — width:32.58px, border:1px solid #00B4FD */}
    <div style={{ width: '32.58px', height: '0px', borderBottom: '1px solid #00B4FD' }}/>
  </div>
);

/* ── Individual solution card ── */
const SolutionCard = ({ icon: Icon, title, body, tag, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
    /* Figma: Frame 27/28/29/30/31 — w: 268.5060729980469px, h: 327px, gap: 26px, flex-col */
    className="flex flex-col items-start justify-start w-full lg:w-[268.5060729980469px] lg:h-[327px] gap-[26px]"
    style={{
      boxSizing: 'border-box',
    }}
  >
    {/* Icon header row — Figma Frame 26: 47×49 + optional NBFC label */}
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%', paddingRight: tag ? '0' : '26px' }}>
      <div style={{ width: '47px', height: '49px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon />
      </div>
      {/* NBFC label — Figma: Chivo Mono 14px #E9F4F9 opacity:0.6 */}
      {tag && (
        <span style={{
          fontFamily: 'Chivo Mono, monospace',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '130%',
          textTransform: 'uppercase',
          color: '#E9F4F9',
          opacity: 0.6,
        }}>
          {tag}
        </span>
      )}
    </div>

    {/* Content block — Title & Description */}
    <div className="flex flex-col items-start w-full lg:w-[268.5060729980469px]">
      {/* Title — Figma: Archivo 400 22px lh:120% #E9F4F9 */}
      <div style={{
        fontFamily: 'Archivo, sans-serif',
        fontWeight: 400,
        fontSize: '22px',
        lineHeight: '120%',
        color: '#E9F4F9',
        marginBottom: '12px',
        width: '100%',
        maxWidth: '263.72px',
      }}>
        {title}
      </div>
      {/* Description — Figma: Archivo 400 16px lh:130% #E9F4F9 opacity:0.7 */}
      <p style={{
        fontFamily: 'Archivo, sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '130%',
        color: '#E9F4F9',
        opacity: 0.7,
        margin: 0,
        width: '100%',
      }}>
        {body}
      </p>
    </div>

    <LearnMore />
  </motion.div>
);

/* ── Solution data ── */
const solutions = [
  {
    icon: CoreBankingIcon,
    title: 'Core Banking CB7',
    body: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    tag: null,
  },
  {
    icon: DigitalBankingIcon,
    title: 'Digital Banking N7',
    body: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: null,
  },
  {
    icon: OpenBankingIcon,
    title: 'Open Banking',
    body: 'Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.',
    tag: null,
  },
  {
    icon: LoanOriginationIcon,
    title: 'Loan Origination System',
    body: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: 'NBFC',
  },
  {
    icon: LoanManagementIcon,
    title: 'Loan Management System',
    body: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    tag: 'NBFC',
  },
];

const SolutionsSection = () => {
  return (
    <section
      style={{ background: '#000D12', position: 'relative', overflow: 'hidden' }}
      className="py-16 lg:py-0"
    >
      {/* Ellipse 1 — Figma: left:968.64 top:447.5, w:556.77 h:556.77
          bg: gradient, opacity:0.1, blur:100px */}
      <div style={{
        position: 'absolute',
        width: '556.77px',
        height: '556.77px',
        right: 0,
        bottom: '100px',
        background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
        opacity: 0.1,
        filter: 'blur(100px)',
        pointerEvents: 'none',
        zIndex: 0,
      }}/>

      {/* Top separator line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '80%', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(233,244,249,0.08), transparent)',
      }}/>

      <div
        className="relative z-10 max-w-[1440px] mx-auto w-full lg:h-[1177px] lg:px-0 px-6"
        style={{ paddingTop: '47.09px', paddingBottom: '44.91px' }}
      >
        {/* Mobile container - simple vertical flow */}
        <div className="flex flex-col lg:hidden gap-12">
          {/* LEFT COLUMN (Mobile) */}
          <div className="flex flex-col items-start gap-6">
            <h2 style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: '28px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#E9F4F9',
              margin: 0,
            }}>
              All of our solutions are tailor-made to your needs
            </h2>
            <button
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px 59px',
                gap: '8px',
                width: '226px',
                height: '49px',
                border: '1px solid #E9F4F9',
                borderRadius: '10px',
                background: 'transparent',
                cursor: 'pointer',
                fontFamily: 'Chivo Mono, monospace',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '130%',
                textTransform: 'uppercase',
                color: '#E9F4F9',
                whiteSpace: 'nowrap',
              }}
            >
              request demo
            </button>
          </div>

          {/* RIGHT COLUMN (Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {solutions.map((sol, i) => (
              <SolutionCard
                key={sol.title}
                icon={sol.icon}
                title={sol.title}
                body={sol.body}
                tag={sol.tag}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

        {/* Desktop container - Absolute pixel perfect matching to Figma coordinates */}
        <div className="hidden lg:block relative w-full h-full">
          {/* ── LEFT COLUMN ──
              Figma: Frame 31 — left:80px, top:47.09px, w:433px
          */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            style={{
              position: 'absolute',
              left: '80px',
              top: '47.09px',
              width: '433px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '48px',
            }}
          >
            {/* Heading — Figma: Archivo 400 37px lh:120% ls:-0.01em #E9F4F9 */}
            <h2 style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: '37px',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#E9F4F9',
              margin: 0,
              width: '433px',
            }}>
              All of our solutions are tailor-made to your needs
            </h2>

            {/* Ghost button — Figma Frame 36: w:226 h:49, padding:15px 59px, border:1px solid #E9F4F9 */}
            <motion.button
              whileHover={{ background: 'rgba(233,244,249,0.05)', scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px 59px',
                gap: '8px',
                width: '226px',
                height: '49px',
                border: '1px solid #E9F4F9',
                borderRadius: '10px',
                background: 'transparent',
                cursor: 'pointer',
                fontFamily: 'Chivo Mono, monospace',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '130%',
                textTransform: 'uppercase',
                color: '#E9F4F9',
                whiteSpace: 'nowrap',
                transition: 'all 0.25s',
              }}
            >
              request demo
            </motion.button>
          </motion.div>

          {/* ── RIGHT COLUMN ──
              Figma: Frame 87 — left:730, top:47.09px, w:613.0121459960938px, h:1085px, gap:76px
              inside we have frame 27,28,29,30,31 (each w:268.5060729980469, h:327)
          */}
          <div
            style={{
              position: 'absolute',
              left: '730px',
              top: '47.09px',
              width: '613.0121459960938px',
              height: '1085px',
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 268.5060729980469px)',
              columnGap: '76px',
              rowGap: '52px',
              alignContent: 'start',
            }}
          >
            {solutions.map((sol, i) => (
              <SolutionCard
                key={sol.title}
                icon={sol.icon}
                title={sol.title}
                body={sol.body}
                tag={sol.tag}
                delay={i * 0.1}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionsSection;
