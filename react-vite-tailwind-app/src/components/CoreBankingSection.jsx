import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SECTION — "A complete cloud-based core banking."  (Frame 12)

   Figma Specs:
   • Frame 12: w:1440 h:619, bg:#000D12
   • "CB7" watermark: absolute, left:-163.31px top:-2.25px,
       font:Archivo 500 572.632px, opacity:0.5
   • Frame 90 (right mockup): absolute, left:927px top:80.17px,
       w:651.67 h:461.42
     – Rectangle 78 (body): 651.67×431.99, border-radius: 15.77px 15.77px 0 0
     – Rectangle 80 (base): 765.94×30.3, centered, top:431.12px,
         border-radius: 5.26px 5.26px 14.72px 14.72px
     – Mask group (screen): 631.15×408.8, left:10.22 top:7.57
     – image 3 (AML dash): 631.15×483.14, left:10.22 top:7.57, opacity:0.8
   • Frame 93 (left col): absolute left:80px top:156.88px w:607.83
     – Heading: Archivo 400 53px lh:120% ls:-0.01em #E9F4F9
     – Subtitle: Archivo 400 16px lh:130% #E9F4F9 opacity:0.8 w:327.19
     – Button: 210×49 gradient border-radius:10px, Chivo Mono 15px uppercase
     – LearnMore: Chivo Mono 14px uppercase #00B4FD + 32.58px underline
   ───────────────────────────────────────────────────────────────── */

/* ── Learn More link (Component 3) ── */
const LearnMore = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '3px',
      width: '102.57px',
    }}
  >
    {/* Frame 59 — row: text + arrow */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5px',
        width: '102.57px',
        height: '18px',
      }}
    >
      <span
        style={{
          fontFamily: 'Chivo Mono, monospace',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '130%',
          textTransform: 'uppercase',
          color: '#00B4FD',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        learn more
      </span>
      {/* Arrow → (Figma: rotate(-180deg) effectively = → direction) */}
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M2 7H12M12 7L8 3M12 7L8 11"
          stroke="#00B4FD"
          strokeWidth="0.94"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    {/* Line 1 — Figma: width:32.58px, border:1px solid #00B4FD */}
    <div
      style={{
        width: '32.58px',
        height: '0px',
        borderBottom: '1px solid #00B4FD',
      }}
    />
  </div>
);

/* ── Laptop / Screen Mockup (Frame 90) ── */
const LaptopMockup = () => (
  <div
    style={{
      position: 'relative',
      width: '651.67px',
      height: '461.42px',
    }}
  >
    {/* Rectangle 78 — laptop screen body (Sibling) */}
    <div
      style={{
        position: 'absolute',
        width: '651.67px',
        height: '431.99px',
        left: '0px',
        top: '0px',
        background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
        opacity: 0.5,
        borderRadius: '15.7661px 15.7661px 0px 0px',
        border: '1px solid #00B4FD',
      }}
    />

    {/* Mask group / screen inner content */}
    <div
      style={{
        position: 'absolute',
        width: '631.15px',
        height: '408.8px',
        left: '10.22px',
        top: '7.57px',
      }}
    >
      {/* Rectangle 79 — screen background */}
      <div
        style={{
          position: 'absolute',
          width: '631.15px',
          height: '408.8px',
          left: '0px',
          top: '0px',
          background: '#D9D9D9',
          borderRadius: '5.25537px 5.25537px 0px 0px',
          overflow: 'hidden',
        }}
      >
        {/* image 3 — AML Dashboard */}
        <img
          src="/aml-dashboard.png"
          alt="AML Dashboard"
          style={{
            position: 'absolute',
            width: '631.15px',
            height: '483.14px',
            left: '0px',
            top: '0px',
            objectFit: 'cover',
            objectPosition: 'top left',
          }}
        />
      </div>
    </div>

    {/* Rectangle 80 — laptop base / chin bar */}
    <div
      style={{
        position: 'absolute',
        width: '765.94px',
        height: '29.43px',
        left: 'calc(50% - 382.97px)',
        top: '431.99px',
        background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
        opacity: 0.4,
        boxShadow: '0px -12.6129px 12.6129px #000000',
        borderRadius: '5.25537px 5.25537px 14.715px 14.715px',
        border: '1px solid #00B4FD',
      }}
    />
  </div>
);

/* ── Main Section ── */
const CoreBankingSection = () => {
  return (
    <section
      style={{
        /* Frame 12: w:1440 h:619, bg:#000D12 */
        width: '100%',
        background: '#000D12',
        position: 'relative',
        overflow: 'hidden',
        /* Enforce 619px height on desktop */
      }}
      className="h-auto lg:h-[619px]"
    >
      {/* ── "CB7" Watermark ──
          Figma: position absolute, w:1141 h:687, left:-163.31px top:-2.25px
          Archivo 500, 572.632px, opacity:0.5
      */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: '1141px',
          height: '687px',
          left: '-163.31px',
          top: '-2.25px',
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 500,
          fontSize: '572.632px',
          lineHeight: '120%',
          color: 'transparent',
          WebkitTextStroke: '1px rgba(233,244,249,0.12)',
          opacity: 0.5,
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0,
          letterSpacing: '-0.02em',
        }}
      >
        CB7
      </div>

      {/* ── Top separator line ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent, rgba(233,244,249,0.07), transparent)',
        }}
      />

      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT — absolute pixel-perfect
          ══════════════════════════════════════════════ */}
      <div className="hidden lg:block relative w-full h-full" style={{ minHeight: '619px' }}>

        {/* ── Frame 93 — Left content column ──
            Figma: absolute left:80px top:156.88px w:607.83 h:308
        */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            left: '80px',
            top: '156.88px',
            width: '607.83px',
            height: '308px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '16px',
            zIndex: 10,
          }}
        >
          {/* Frame 92 — inner layout: gap 36px */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '36px',
              width: '607.83px',
            }}
          >
            {/* Frame 14 — text block: gap 16px */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                width: '607.83px',
              }}
            >
              {/* Heading */}
              <h2
                style={{
                  width: '607.83px',
                  fontFamily: 'Archivo, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '53px',
                  lineHeight: '120%',
                  letterSpacing: '-0.01em',
                  color: '#E9F4F9',
                  margin: 0,
                }}
              >
                A complete cloud-based core banking.
              </h2>

              {/* Subtitle */}
              <p
                style={{
                  width: '327.19px',
                  fontFamily: 'Archivo, sans-serif',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '130%',
                  color: '#E9F4F9',
                  opacity: 0.8,
                  margin: 0,
                }}
              >
                Faster time to market with our cloud-based core banking services
              </p>
            </div>

            {/* Frame 1 — REQUEST DEMO button */}
            <motion.button
              whileHover={{ opacity: 0.88 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '15px 51px',
                gap: '8px',
                width: '210px',
                height: '49px',
                background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
                borderRadius: '10px',
                border: 'none',
                cursor: 'pointer',
                /* Text */
                fontFamily: 'Chivo Mono, monospace',
                fontWeight: 400,
                fontSize: '15px',
                lineHeight: '130%',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                whiteSpace: 'nowrap',
                transition: 'opacity 0.2s',
              }}
            >
              REQUEST DEMO
            </motion.button>
          </div>

          {/* Component 3 — Learn More link */}
          <LearnMore />
        </motion.div>

        {/* ── Frame 90 — Right laptop mockup ──
            Figma: absolute left:927px top:80.17px w:651.67 h:461.42
        */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: 'absolute',
            left: '927px',
            top: '80.17px',
            width: '651.67px',
            height: '461.42px',
            zIndex: 10,
          }}
        >
          <LaptopMockup />
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════
          MOBILE / TABLET LAYOUT — responsive stack
          ══════════════════════════════════════════════ */}
      <div className="lg:hidden relative z-10 px-6 py-16 flex flex-col gap-12">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <h2
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(32px, 6vw, 53px)',
              lineHeight: '120%',
              letterSpacing: '-0.01em',
              color: '#E9F4F9',
              margin: 0,
            }}
          >
            A complete cloud-based core banking.
          </h2>
          <p
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '130%',
              color: '#E9F4F9',
              opacity: 0.8,
              margin: 0,
              maxWidth: '327px',
            }}
          >
            Faster time to market with our cloud-based core banking services
          </p>
          <button
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '210px',
              height: '49px',
              background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
              borderRadius: '10px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'Chivo Mono, monospace',
              fontWeight: 400,
              fontSize: '15px',
              textTransform: 'uppercase',
              color: '#FFFFFF',
            }}
          >
            REQUEST DEMO
          </button>
          <LearnMore />
        </motion.div>

        {/* Mobile mockup — scaled down */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            transform: 'scale(0.55)',
            transformOrigin: 'top center',
            height: '260px',  /* collapsed height after scale */
          }}
        >
          <LaptopMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default CoreBankingSection;
