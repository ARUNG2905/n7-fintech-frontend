import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SECTION — "A complete cloud-based core banking."  (Frame 12)
   Now uses actual Figma-exported MacBook-Pro-16.png image
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
    <div
      style={{
        width: '32.58px',
        height: '0px',
        borderBottom: '1px solid #00B4FD',
      }}
    />
  </div>
);

/* ── Main Section ── */
const CoreBankingSection = () => {
  return (
    <section
      style={{
        width: '100%',
        background: '#000D12',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="h-auto lg:h-[619px]"
    >
      {/* ── "CB7" Watermark ── */}
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

      {/* ══ DESKTOP LAYOUT ══ */}
      <div className="hidden lg:block relative w-full h-full" style={{ minHeight: '619px' }}>

        {/* ── Frame 93 — Left content column ── */}
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '36px',
              width: '607.83px',
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                width: '607.83px',
              }}
            >
              <h2
                style={{
                  width: '607.83px',
                  fontFamily: 'Archivo, sans-serif',
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

              <p
                style={{
                  width: '327.19px',
                  fontFamily: 'Archivo, sans-serif',
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

          <LearnMore />
        </motion.div>

        {/* ── Frame 90 — Right laptop mockup ──
            NOW USING ACTUAL MacBook-Pro-16.png IMAGE
        */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{
            position: 'absolute',
            left: '827px',
            top: '80px',
            width: '651px',
            height: '461px',
            zIndex: 10,
          }}
        >
          <img
            src="/n7-assets/MacBook-Pro-16.png"
            alt="AML Dashboard on MacBook Pro showing suspicious transaction reports and analytics"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              display: 'block',
            }}
          />
        </motion.div>
      </div>

      {/* ══ MOBILE / TABLET LAYOUT ══ */}
      <div className="lg:hidden relative z-10 px-6 py-16 flex flex-col gap-12">
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

        {/* Mobile mockup using actual image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ maxWidth: '100%' }}
        >
          <img
            src="/n7-assets/MacBook-Pro-16.png"
            alt="AML Dashboard"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CoreBankingSection;
