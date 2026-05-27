import React from 'react';
import { motion } from 'framer-motion';
import PaperlessCTA from './PaperlessCTA';

/* ── Checkmark Item ── */
const CheckmarkItem = ({ title, desc }) => (
  <div className="flex flex-col gap-2">
    <div className="flex items-start gap-3">
      <div className="relative w-[18px] h-[18px] rounded-full flex-shrink-0 mt-[2px]" style={{ background: 'linear-gradient(87.28deg, #00B4FD -65.9%, #003ACE 78.4%)' }}>
        <svg className="absolute inset-0 m-auto text-white" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
      <span style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '16px', color: '#000D12' }}>
        {title}
      </span>
    </div>
    {desc && (
      <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000D12', opacity: 0.7, paddingLeft: '30px', margin: 0, lineHeight: '130%' }}>
        {desc}
      </p>
    )}
  </div>
);


const PaperlessSection = () => {
  return (
    <>
      {/* ══════════════════════════════════════════════════════════════
          PART 1: Dark CTA Card (Figma: sits in the dark #000D12 zone)
          ══════════════════════════════════════════════════════════════ */}
      <section style={{ background: '#000D12', paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <PaperlessCTA />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════
          PART 2: Marquee Banner (white bg, spans full width)
          ══════════════════════════════════════════════════════════════ */}
      <div className="w-full h-[116px] bg-white flex items-center relative z-10 overflow-hidden shadow-sm">
        <motion.div 
          animate={{ x: [0, -1440] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="flex items-center whitespace-nowrap pl-4" 
          style={{ gap: '24px' }}
        >
          {[1,2,3,4,5,6].map(i => (
            <React.Fragment key={i}>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '47px', background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                N7
              </div>
              <div style={{ fontSize: '47px' }}>👋</div>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: '47px', color: '#000D12' }}>
                Say
              </div>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: '47px', color: '#000D12' }}>
                to the new way of banking
              </div>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '47px', background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '24px' }}>
                CB7
              </div>
              <div style={{ fontSize: '47px' }}>👋</div>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: '47px', color: '#000D12' }}>
                Say
              </div>
              <div style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 600, fontSize: '47px', color: '#000D12' }}>
                to the new way of banking
              </div>
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PART 3: Digital Banking Out-of-the-box (light #E9F4F9 bg)
          Uses actual Figma-exported iPhone mockup PNGs
          ══════════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden" style={{ background: '#E9F4F9', paddingTop: '80px', paddingBottom: '120px' }}>
        
        {/* ── Background Watermarks & Glows ── */}
        <div style={{ position: 'absolute', top: '-66px', left: '277px', fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '572px', opacity: 0.03, color: '#000D12', pointerEvents: 'none', userSelect: 'none' }}>
          N7
        </div>
        <div style={{ position: 'absolute', top: '957px', left: '886px', fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '1524px', opacity: 0.02, color: '#000D12', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
          7
        </div>
        
        <div style={{ position: 'absolute', top: '-260px', left: '-85px', width: '585px', height: '585px', background: 'linear-gradient(103.43deg, #FDA700, #CE5700)', opacity: 0.02, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', top: '-91px', left: '661px', width: '778px', height: '778px', background: 'linear-gradient(103.43deg, #FDA700, #CE5700)', opacity: 0.05, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}/>
        <div style={{ position: 'absolute', top: '1928px', left: '-364px', width: '778px', height: '778px', background: 'linear-gradient(100.92deg, #00CFFD, #0015CE)', opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}/>

        {/* ── Section Title ── */}
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: 'clamp(36px, 4vw, 53px)', lineHeight: '120%', letterSpacing: '-0.01em', color: '#000D12', margin: 0, marginBottom: '16px' }}>
              Digital banking<br/>out-of-the-box
            </h2>
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000D12', opacity: 0.7, maxWidth: '460px', margin: 0, lineHeight: '130%' }}>
              Our Digital Banking solution lets you accelerate innovation while reducing risks and optimising operational costs.
            </p>
            <motion.a
              href="#"
              whileHover={{ opacity: 0.8 }}
              style={{
                display: 'inline-block',
                marginTop: '24px',
                fontFamily: 'Chivo Mono, monospace',
                fontSize: '15px',
                textTransform: 'uppercase',
                color: '#003ACE',
                textDecoration: 'none',
                borderBottom: '1px solid #003ACE',
                paddingBottom: '2px',
              }}
            >
              Learn More
            </motion.a>
          </motion.div>
        </div>

        {/* ── Staggered Phone Layout Rows — ACTUAL FIGMA IMAGES ── */}
        <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col gap-32">
          
          {/* ROW 1 — Home screen (iPhone 13 Pro.png) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col md:flex-row items-center gap-16 md:gap-24 md:justify-center"
          >
            <img
              src="/n7-assets/iPhone-13-Pro.png"
              alt="N7 Home Dashboard - Toni Kross account with $42,295.00 balance, fund transfer, and recent activity"
              style={{ width: '268px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <div className="flex flex-col gap-10 max-w-[320px]">
              <CheckmarkItem 
                title="Fully compliant with regulatory requirement" 
                desc="The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures." 
              />
              <div className="flex flex-col gap-5">
                <CheckmarkItem title="Pre-integrated Security System" />
                <CheckmarkItem title="Fully Compliant With Regulatory Requirement" />
                <CheckmarkItem title="Digitally Connected Core" />
              </div>
            </div>
          </motion.div>

          {/* ROW 2 — Transaction/Card screen (iPhone 13 Pro-1.png) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 md:justify-center"
          >
            <img
              src="/n7-assets/iPhone-13-Pro-1.png"
              alt="N7 Card Screen - March 2022 spending $8,295.00, income and spend analytics chart"
              style={{ width: '268px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <div className="flex flex-col gap-10 max-w-[320px]">
              <div>
                <h3 style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '16px', color: '#000D12', marginBottom: '8px' }}>
                  No legacy IT systems
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000D12', opacity: 0.7, lineHeight: '130%' }}>
                  Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <CheckmarkItem title="Adaptive & Intelligent API monetization" />
                <CheckmarkItem title="Ambient User Experience" />
                <CheckmarkItem title="Cloud-native With lower TCO" />
              </div>
            </div>
          </motion.div>

          {/* ROW 3 — Profile screen (iPhone 13 Pro-2.png) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            className="flex flex-col md:flex-row items-center gap-16 md:gap-24 md:justify-center"
          >
            <img
              src="/n7-assets/iPhone-13-Pro-2.png"
              alt="N7 Profile Screen - Toni Kross profile settings, support, and sign out options"
              style={{ width: '268px', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
            />
            <div className="flex flex-col gap-10 max-w-[320px]">
              <div>
                <h3 style={{ fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '16px', color: '#000D12', marginBottom: '8px' }}>
                  No traditional branches
                </h3>
                <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#000D12', opacity: 0.7, lineHeight: '130%' }}>
                  Our Digital Banking out-of-the-box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branchless experience.
                </p>
              </div>
              <div className="flex flex-col gap-5">
                <CheckmarkItem title="Branchless & Paperless Banking" />
                <CheckmarkItem title="Digital Transformation Capability" />
                <CheckmarkItem title="Optimized, Adoptable and Scalable" />
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Bottom Dark CTA Card (2nd instance) ── */}
        <div className="max-w-[1280px] mx-auto mt-32 relative z-10 px-6">
          <PaperlessCTA />
        </div>

      </section>
    </>
  );
};

export default PaperlessSection;
