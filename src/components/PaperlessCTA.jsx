import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   PAPERLESS CTA — "Take the full advantage of going paper-less now."
   Dark card CTA that appears in the dark sections of the Figma design.
   Matches Frame 74 Figma layout exactly.
   ───────────────────────────────────────────────────────────────── */

const PaperlessCTA = () => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    style={{ 
      background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)', 
      borderRadius: '27px', 
      padding: '64px 80px', 
      position: 'relative', 
      overflow: 'hidden',
      border: '1px solid rgba(233,244,249,0.04)',
    }} 
    className="flex flex-col lg:flex-row justify-between items-center gap-10"
  >
    {/* Faded N7 watermark inside card */}
    <div style={{ position: 'absolute', right: '5%', top: '-30%', fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '572px', color: '#fff', opacity: 0.05, pointerEvents: 'none', lineHeight: 1 }}>
      N7
    </div>
    
    <div className="max-w-[600px] z-10 flex flex-col gap-6 text-center lg:text-left">
      <h2 style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 400, fontSize: 'clamp(36px, 4vw, 53px)', lineHeight: '120%', color: '#E9F4F9', letterSpacing: '-0.01em', margin: 0 }}>
        Take the full advantage of going paper-less now.
      </h2>
      <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#E9F4F9', opacity: 0.7, maxWidth: '460px', margin: 0 }}>
        N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-center gap-6 z-10 mt-6 lg:mt-0">
      <button style={{ 
        border: '1px solid #E9F4F9', 
        borderRadius: '10px', 
        padding: '14px 40px', 
        background: 'transparent', 
        color: '#E9F4F9', 
        fontFamily: 'Chivo Mono, monospace', 
        textTransform: 'uppercase', 
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'all 0.3s'
      }} className="hover:bg-white hover:text-black">
        Contact Us
      </button>
      <button style={{ 
        background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)', 
        borderRadius: '10px', 
        padding: '15px 40px', 
        color: '#FFF', 
        fontFamily: 'Chivo Mono, monospace', 
        textTransform: 'uppercase', 
        fontSize: '15px', 
        border: 'none',
        cursor: 'pointer',
        transition: 'opacity 0.3s'
      }} className="hover:opacity-90">
        Request Demo
      </button>
    </div>
  </motion.div>
);

export default PaperlessCTA;
