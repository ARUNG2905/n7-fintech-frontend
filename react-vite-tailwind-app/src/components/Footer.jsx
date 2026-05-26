import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SITE FOOTER — N7 Fintech
   Sections: Final CTA band + 4-column links + bottom bar
   ───────────────────────────────────────────────────────────────── */

const footerLinks = [
  {
    heading: 'Product',
    links: ['Overview', 'Features', 'Dashboard', 'Mobile App', 'Pricing', 'Changelog'],
  },
  {
    heading: 'Solutions',
    links: ['Startups', 'Enterprise', 'Freelancers', 'Global Teams', 'Compliance', 'API Access'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'API Reference', 'Blog', 'Case Studies', 'Status Page', 'Community'],
  },
  {
    heading: 'Company',
    links: ['About', 'Careers', 'Press', 'Partners', 'Contact', 'Legal'],
  },
];

const socialLinks = [
  {
    label: 'Twitter',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: '#',
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
];

const Footer = () => {
  return (
    <footer style={{ background: '#000D12', position: 'relative', overflow: 'hidden' }}>

      {/* ── Final CTA Band ────────────────────────────────────── */}
      <div style={{
        borderTop: '1px solid rgba(233,244,249,0.06)',
        borderBottom: '1px solid rgba(233,244,249,0.06)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* CTA gradient glow */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 80% 100% at 50% 120%, rgba(0,58,206,0.25) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}/>
        <div style={{
          position: 'absolute',
          width: '500px', height: '300px',
          left: '50%', top: '50%',
          transform: 'translate(-50%, -20%)',
          background: 'linear-gradient(103.43deg, #00B4FD -1.02%, #003ACE 83.53%)',
          opacity: 0.12, filter: 'blur(80px)',
          pointerEvents: 'none',
        }}/>

        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'center' }}
          >
            {/* Label */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '24px' }}>
              <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, transparent, #00B4FD)', borderRadius: '1px' }}/>
              <span style={{
                fontFamily: 'Chivo Mono, monospace', fontSize: '12px',
                letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00B4FD',
              }}>
                Get Started Today
              </span>
              <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #00B4FD, transparent)', borderRadius: '1px' }}/>
            </div>

            <h2 style={{
              fontFamily: 'Archivo, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(32px, 4vw, 60px)',
              lineHeight: '115%',
              letterSpacing: '-0.01em',
              color: '#E9F4F9',
              margin: '0 auto 20px',
              maxWidth: '700px',
            }}>
              Ready to redefine your banking infrastructure?
            </h2>

            <p style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '16px',
              lineHeight: '160%',
              color: 'rgba(233,244,249,0.6)',
              maxWidth: '460px',
              margin: '0 auto 40px',
            }}>
              Join thousands of companies that trust N7 to run their financial operations — no long contracts, no hidden fees.
            </p>

            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {/* Primary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  height: '52px', padding: '0 40px',
                  background: 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
                  borderRadius: '10px', border: 'none', cursor: 'pointer',
                  fontFamily: 'Chivo Mono, monospace', fontSize: '14px',
                  textTransform: 'uppercase', color: 'white', fontWeight: 400,
                  boxShadow: '0 8px 32px rgba(0,180,253,0.3)',
                }}
              >
                Request Demo
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  height: '52px', padding: '0 40px',
                  background: 'transparent',
                  borderRadius: '10px', border: '1px solid rgba(233,244,249,0.25)',
                  cursor: 'pointer',
                  fontFamily: 'Chivo Mono, monospace', fontSize: '14px',
                  textTransform: 'uppercase', color: '#E9F4F9', fontWeight: 400,
                }}
              >
                Contact Sales
              </motion.button>
            </div>

            {/* Trust note */}
            <div style={{
              marginTop: '28px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap',
            }}>
              {['No credit card required', 'Free 30-day trial', 'Cancel anytime'].map((note) => (
                <div key={note} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#00B4FD" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
                  </svg>
                  <span style={{ fontFamily: 'Archivo, sans-serif', fontSize: '13px', color: 'rgba(233,244,249,0.5)' }}>
                    {note}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Footer Links ─────────────────────────────────────── */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '40px', marginBottom: '56px' }}>

          {/* Brand column */}
          <div style={{ gridColumn: 'span 1', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* N7 Logo */}
            <div style={{
              fontFamily: 'Archivo, sans-serif',
              fontSize: '28px',
              fontWeight: 500,
              letterSpacing: '-0.02em',
              color: '#E9F4F9',
              lineHeight: 1,
              marginBottom: '4px',
            }}>
              N7
            </div>
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

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '4px' }}>
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: '36px', height: '36px',
                    borderRadius: '10px',
                    border: '1px solid rgba(233,244,249,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(233,244,249,0.4)',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'rgba(0,180,253,0.4)';
                    e.currentTarget.style.color = '#00B4FD';
                    e.currentTarget.style.background = 'rgba(0,180,253,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(233,244,249,0.1)';
                    e.currentTarget.style.color = 'rgba(233,244,249,0.4)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {s.icon}
                </a>
              ))}
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

        {/* ── Bottom bar ─────────────────────────────────────── */}
        <div style={{
          borderTop: '1px solid rgba(233,244,249,0.06)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <span style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '13px',
            color: 'rgba(233,244,249,0.3)',
          }}>
            © {new Date().getFullYear()} N7 Financial Technologies, Inc. All rights reserved.
          </span>

          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service', 'Cookie Settings', 'Security'].map((item) => (
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
