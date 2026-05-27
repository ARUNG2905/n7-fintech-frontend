import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SECTION — Core Banking Details (Frame 80)

   Figma Specs:
   • Frame 80: w:1440 h:681, bg:#000D12
   • Frame 99 (laptop): absolute left:-159px top:110px, w:651.67 h:461.42
     – Rectangle 78 (body): 651.67×431.99, border-radius:15.77 15.77 0 0
     – Rectangle 80 (base): 765.94×30.3, centered, top:431.12
     – Screen: 631.15×408.8, left:10.22 top:7.57, with dashboard image
   • Frame 105 (right content): absolute left:770px top:168.68px w:590
     – Title: Archivo 400 27px #E9F4F9
     – "What you will get:" Archivo 600 16px
     – Two-column checklist with blue gradient checkmarks
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
    {/* Ellipse 53 — gradient circle */}
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
    {/* White check vector */}
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
        fontStyle: 'normal',
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

/* ── Laptop Mockup with Neon Glow (Frame 99) ── */
const LaptopMockup = () => (
  <div
    style={{
      position: 'relative',
      width: '651.67px',
      height: '461.42px',
    }}
  >
    {/* Rectangle 78 — laptop body with neon glow */}
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
        boxShadow: '0 0 15px rgba(0, 180, 253, 0.4), 0 0 30px rgba(0, 180, 253, 0.2), inset 0 0 15px rgba(0, 180, 253, 0.1)',
      }}
    />

    {/* Mask group — screen content area */}
    <div
      style={{
        position: 'absolute',
        width: '631.15px',
        height: '408.8px',
        left: '10.22px',
        top: '7.57px',
        overflow: 'hidden',
        borderRadius: '5.25537px 5.25537px 0px 0px',
      }}
    >
      {/* Rectangle 79 — screen bg */}
      <div
        style={{
          position: 'absolute',
          width: '631.15px',
          height: '408.8px',
          left: '0px',
          top: '0px',
          background: '#D9D9D9',
          borderRadius: '5.25537px 5.25537px 0px 0px',
        }}
      />
      {/* Dashboard Image */}
      <img
        src="/aml-dashboard.png"
        alt="CKYC Dashboard"
        style={{
          position: 'absolute',
          width: '631.2px',
          height: '480.83px',
          left: '0px',
          top: '0px',
          objectFit: 'cover',
          objectPosition: 'top left',
          opacity: 0.8,
        }}
      />

      {/* ── Failed Records Floating Card Overlay ── */}
      <div
        style={{
          position: 'absolute',
          right: '20px',
          top: '60px',
          width: '220px',
          background: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 8px 32px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.1)',
          padding: '14px',
          zIndex: 20,
          fontFamily: 'Arial, sans-serif',
        }}
      >
        {/* Failed Records Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{
            background: '#FF3B30',
            color: '#FFF',
            fontSize: '11px',
            fontWeight: 700,
            borderRadius: '50%',
            width: '24px',
            height: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>22</div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#1a1a1a' }}>Failed Records</div>
            <div style={{ fontSize: '9px', color: '#888' }}>Branch No. 02</div>
          </div>
        </div>
        <div style={{ fontSize: '8px', color: '#666', marginBottom: '6px' }}>Branch Name: Chandni Chowk</div>

        {/* Customer Row */}
        <div style={{
          background: '#F8F9FA',
          borderRadius: '6px',
          padding: '8px',
          marginBottom: '6px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '8px', color: '#888', marginBottom: '2px' }}>
            <span>Customer ID</span><span>Customer Name</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', fontWeight: 600, color: '#1a1a1a' }}>
            <span>0076541</span><span>Ajaye Krishna</span>
          </div>
          <div style={{ marginTop: '6px', fontSize: '8px', color: '#333', background: '#FFF', borderRadius: '4px', padding: '5px' }}>
            <div style={{ fontWeight: 600, marginBottom: '2px' }}>Reason:</div>
            <div>1. Aadhaar Number not matching</div>
            <div>2. PAN No. missing</div>
          </div>
          <div style={{ marginTop: '6px', display: 'flex', justifyContent: 'flex-end' }}>
            <div style={{
              fontSize: '8px',
              fontWeight: 600,
              color: '#1a1a1a',
              border: '1px solid #ddd',
              borderRadius: '4px',
              padding: '3px 10px',
              cursor: 'pointer',
            }}>Update</div>
          </div>
        </div>

        {/* Mini customer list */}
        {[1, 2, 3].map((i) => (
          <div key={i} style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '8px',
            color: '#555',
            padding: '3px 0',
            borderBottom: '1px solid #f0f0f0',
          }}>
            <span style={{ color: '#aaa' }}>{i + 1}.</span>
            <span>0099423</span>
            <span>Raghu Nandan</span>
            <span style={{ color: '#aaa' }}>›</span>
          </div>
        ))}
      </div>
    </div>

    {/* Rectangle 80 — laptop base/chin with neon glow */}
    <div
      style={{
        position: 'absolute',
        width: '765.94px',
        height: '30.3px',
        left: 'calc(50% - 382.97px)',
        top: '431.12px',
        background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
        opacity: 0.4,
        boxShadow: '0px -12.6129px 12.6129px #000000, 0 0 12px rgba(0, 180, 253, 0.35)',
        borderRadius: '5.25537px 5.25537px 14.715px 14.715px',
        border: '1px solid #00B4FD',
      }}
    />
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
      {/* ══════════════════════════════════════════════
          DESKTOP LAYOUT — absolute pixel-perfect
          ══════════════════════════════════════════════ */}
      <div className="hidden lg:block relative w-full h-full" style={{ minHeight: '681px' }}>

        {/* ── Frame 99 — Left laptop mockup ──
            Figma: absolute left:-159px top:110px
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
            width: '651.67px',
            height: '461.42px',
            zIndex: 10,
          }}
        >
          <LaptopMockup />
        </motion.div>

        {/* ── Frame 105 — Right content column ──
            Figma: absolute left:770px top:168.68px w:590 h:350.41
        */}
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
          {/* Title */}
          <h2
            style={{
              width: '495.3px',
              fontFamily: 'Archivo, sans-serif',
              fontStyle: 'normal',
              fontWeight: 400,
              fontSize: '27px',
              lineHeight: '130%',
              color: '#E9F4F9',
              margin: 0,
            }}
          >
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>

          {/* Frame 104 — "What you will get" + checklist columns */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: '14px',
              width: '590px',
            }}
          >
            {/* Label */}
            <span
              style={{
                fontFamily: 'Archivo, sans-serif',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '130%',
                color: '#E9F4F9',
              }}
            >
              What you will get:
            </span>

            {/* Frame 103 — Two columns of checklist items */}
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
              {/* Left column (Frame 18) */}
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

              {/* Right column (Frame 77) */}
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

      {/* ══════════════════════════════════════════════
          MOBILE / TABLET LAYOUT — responsive stack
          ══════════════════════════════════════════════ */}
      <div className="lg:hidden relative z-10 px-6 py-16 flex flex-col gap-12">
        {/* Mobile laptop mockup — scaled down */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            transform: 'scale(0.5)',
            transformOrigin: 'top center',
            height: '240px',
            marginLeft: '-80px',
          }}
        >
          <LaptopMockup />
        </motion.div>

        {/* Mobile content */}
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
