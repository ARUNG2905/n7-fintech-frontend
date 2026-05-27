import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const caseStudies = [
  {
    id: 1,
    title: 'How we help brand reach out to more people',
    category: 'Brand Strategy',
    client: 'Download',
    clientIcon: '🟢',
  },
  {
    id: 2,
    title: 'Transforming digital payments for emerging markets',
    category: 'Fintech Innovation',
    client: 'Download',
    clientIcon: '🟢',
  },
  {
    id: 3,
    title: 'Building scalable banking infrastructure from scratch',
    category: 'Core Banking',
    client: 'Download',
    clientIcon: '🟢',
  },
];

/* N7 branded vector icon grid – uses the actual Figma exported Vector-12 through Vector-15 PNGs */
const VectorIconGrid = () => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    width: '220px',
    height: '220px',
    padding: '20px',
    alignItems: 'center',
    justifyItems: 'center',
  }}>
    <img src="/n7-assets/Vector-12.png" alt="" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
    <img src="/n7-assets/Vector-13.png" alt="" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
    <img src="/n7-assets/Vector-14.png" alt="" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
    <img src="/n7-assets/Vector-15.png" alt="" style={{ width: '70px', height: '70px', objectFit: 'contain' }} />
  </div>
);

const CaseStudiesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = caseStudies[activeIndex];

  return (
    <section
      id="case-studies"
      className="w-full relative overflow-hidden"
      style={{ background: '#000D12', paddingTop: '100px', paddingBottom: '100px' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', width: '500px', height: '500px',
        left: '50%', top: '50%', transform: 'translate(-50%, -50%)',
        background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
        opacity: 0.06, filter: 'blur(120px)', pointerEvents: 'none',
      }} />

      <div className="max-w-[1280px] mx-auto px-6 lg:px-20 relative z-10">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 400,
            fontSize: '37px',
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            color: '#E9F4F9',
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          Our Case Studies
        </motion.h2>

        {/* Featured Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            style={{
              background: '#01141B',
              borderRadius: '18px',
              border: '1px solid rgba(255,255,255,0.03)',
              overflow: 'hidden',
              maxWidth: '900px',
              margin: '0 auto',
            }}
            className="flex flex-col md:flex-row items-center"
          >
            {/* Left: Vector Icon Grid */}
            <div style={{
              background: '#07193C',
              minHeight: '280px',
              width: '100%',
              maxWidth: '360px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '30px',
              flexShrink: 0,
            }}>
              <VectorIconGrid />
            </div>

            {/* Right: Info */}
            <div style={{ padding: '40px', flex: 1, display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <h3 style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 400,
                fontSize: '27px',
                lineHeight: '130%',
                color: '#E9F4F9',
                margin: 0,
              }}>
                {current.title}
              </h3>

              {/* Download link */}
              <a
                href="#"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '14px',
                  color: '#00B4FD',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s',
                }}
              >
                <span style={{
                  width: '24px', height: '24px', borderRadius: '50%',
                  background: '#1DB954', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M12 16l-6-6h4V4h4v6h4l-6 6zM4 18h16v2H4v-2z"/>
                  </svg>
                </span>
                {current.client}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Carousel Dots */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          marginTop: '40px',
        }}>
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              style={{
                width: index === activeIndex ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: index === activeIndex
                  ? 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)'
                  : 'rgba(233, 244, 249, 0.2)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                padding: 0,
              }}
              aria-label={`Case study ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
