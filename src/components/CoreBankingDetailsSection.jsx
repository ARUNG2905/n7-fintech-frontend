import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SECTION — Core Banking Details (Frame 80)
   Uses actual Figma-exported Frame-98.png for the left laptop mockup
   ───────────────────────────────────────────────────────────────── */

/* ── Gradient Checkmark Icon ── */
const CheckIcon = () => (
  <div
    style={{
      position: 'relative',
      width: '29.98px',
      height: '31.41px',
      flexShrink: 0,
    }}
  >
    <div
      style={{
        position: 'absolute',
        width: '18.52px',
        height: '18.52px',
        left: '5.62px',
        top: '6.79px',
        background: 'linear-gradient(87.28deg, #00B4FD -65.9%, #003ACE 78.4%)',
        borderRadius: '50%',
      }}
    />
    <svg
      style={{
        position: 'absolute',
        width: '13.14px',
        height: '13.14px',
        left: '8.32px',
        top: '9.48px',
      }}
      viewBox="0 0 14 14"
      fill="none"
    >
      <path
        d="M3 7L6 10L11 4"
        stroke="#E9F4F9"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

/* ── Checklist Item ── */
const CheckItem = ({ text }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      padding: '0px',
      gap: '5px',
      width: '100%',
    }}
  >
    <CheckIcon />
    <span
      style={{
        fontFamily: 'Archivo, sans-serif',
        fontWeight: 400,
        fontSize: '16px',
        lineHeight: '130%',
        color: '#E9F4F9',
        opacity: 0.8,
        flex: 1,
      }}
    >
      {text}
    </span>
  </div>
);

/* ── Left-column checklist items ── */
const leftItems = [
  'Customer-On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc)',
];

/* ── Right-column checklist items ── */
const rightItems = [
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

/* ── Main Section ── */
const CoreBankingDetailsSection = () => {
  return (
    <section
      style={{
        width: '100%',
        background: '#000D12',
        position: 'relative',
        overflow: 'hidden',
      }}
      className="h-auto lg:h-[681px]"
    >
      {/* ══ DESKTOP LAYOUT ══ */}
      <div className="hidden lg:block relative w-full h-full" style={{ minHeight: '681px' }}>

        {/* ── Frame 99 — Left laptop mockup ──
            NOW USING ACTUAL Frame-98.png (CKYC Dashboard with floating failed records card)
        */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.1 }}
          style={{
            position: 'absolute',
            left: '-159px',
            top: '110px',
            width: '780px',
            height: '461px',
            zIndex: 10,
          }}
        >
          <img
            src="/n7-assets/Frame-98.png"
            alt="CKYC Dashboard showing file upload records, branch statistics, and periodic response charts"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain',
              objectPosition: 'left center',
              display: 'block',
            }}
          />
        </motion.div>

        {/* ── Frame 105 — Right content column ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{
            position: 'absolute',
            left: '770px',
            top: '168.68px',
            width: '590px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '34px',
            zIndex: 10,
          }}
        >
          <h2
            style={{
              width: '495.3px',
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 400,
              fontSize: '27px',
              lineHeight: '130%',
              color: '#E9F4F9',
              margin: 0,
            }}
          >
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '14px',
              width: '590px',
            }}
          >
            <span
              style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '130%',
                color: '#E9F4F9',
              }}
            >
              What you will get:
            </span>

            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'flex-start',
                gap: '29px',
                width: '590px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '296px',
                }}
              >
                {leftItems.map((item, idx) => (
                  <CheckItem key={idx} text={item} />
                ))}
              </div>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  width: '265px',
                }}
              >
                {rightItems.map((item, idx) => (
                  <CheckItem key={idx} text={item} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ══ MOBILE / TABLET LAYOUT ══ */}
      <div className="lg:hidden relative z-10 px-6 py-16 flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '100%' }}
        >
          <img
            src="/n7-assets/Frame-98.png"
            alt="CKYC Dashboard"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </motion.div>

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
              fontSize: 'clamp(22px, 5vw, 27px)',
              lineHeight: '130%',
              color: '#E9F4F9',
              margin: 0,
            }}
          >
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>

          <span
            style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '130%',
              color: '#E9F4F9',
            }}
          >
            What you will get:
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {[...leftItems, ...rightItems].map((item, idx) => (
              <CheckItem key={idx} text={item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreBankingDetailsSection;
