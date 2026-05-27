import React from 'react';
import PaperlessCTA from './PaperlessCTA';

/* ─────────────────────────────────────────────────────────────────
   SITE FOOTER — N7 Fintech (Matching Figma Frame 74 design)
   Final CTA + Large N7 watermark + 4-column links + bottom bar
   ───────────────────────────────────────────────────────────────── */

const footerLinks = [
  {
    heading: 'Product',
    links: ['Overview', 'Features', 'Dashboard', 'Mobile App', 'Pricing', 'Changelog'],
  },
  {
    heading: 'Solutions',
    links: ['Core Banking', 'Digital Banking', 'Open Banking', 'Loan Origination', 'Risk Management'],
  },
  {
    heading: 'N7 Banking',
    links: ['Documentation', 'API Reference', 'Blog', 'Case Studies', 'Status Page'],
  },
  {
    heading: 'N7 Accounts',
    links: ['About', 'Careers', 'Press', 'Partners', 'Contact'],
  },
];

const Footer = () => {
  return (
    <footer style={{ background: '#000D12', position: 'relative', overflow: 'hidden' }}>

      {/* ── Final CTA Card ── */}
      <div className="max-w-[1280px] mx-auto relative z-10 px-6 lg:px-20 pt-16 pb-20">
        <PaperlessCTA />
      </div>

      {/* ── Footer Links with Large N7 Watermark ── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 relative">
        
        {/* Large N7 Watermark */}
        <div style={{
          position: 'absolute',
          left: '20px',
          top: '-20px',
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(120px, 15vw, 200px)',
          lineHeight: 1,
          background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          opacity: 0.9,
          pointerEvents: 'none',
          userSelect: 'none',
          zIndex: 0,
        }}>
          N7
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '250px repeat(4, 1fr)', 
          gap: '40px', 
          position: 'relative', 
          zIndex: 1,
        }}>

          {/* Brand spacer column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ marginTop: '100px' }}>
              <p style={{
                fontFamily: 'Archivo, sans-serif',
                fontSize: '13px',
                lineHeight: '170%',
                color: 'rgba(233,244,249,0.4)',
                margin: 0,
                maxWidth: '200px',
              }}>
                The new foundation of modern banking — built for the next generation of finance.
              </p>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 600,
                fontSize: '13px',
                color: '#E9F4F9',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '4px',
              }}>
                {col.heading}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(233,244,249,0.45)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#E9F4F9'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(233,244,249,0.45)'}
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(233,244,249,0.06)',
          paddingTop: '24px',
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          position: 'relative',
          zIndex: 1,
        }}>
          <span style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '13px',
            color: 'rgba(233,244,249,0.3)',
          }}>
            © {new Date().getFullYear()} N7 Financial Technologies, Inc. All rights reserved.
          </span>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings'].map((item) => (
              <a
                key={item}
                href="#"
                style={{
                  fontFamily: 'Archivo, sans-serif',
                  fontSize: '13px',
                  color: 'rgba(233,244,249,0.3)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'rgba(233,244,249,0.7)'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(233,244,249,0.3)'}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
