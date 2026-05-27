import React from 'react';
import { motion } from 'framer-motion';

/* ─────────────────────────────────────────────────────────────────
   SECTION 5 — Testimonials / Social Proof
   N7 dark fintech aesthetic
   Layout: Top stats row + staggered testimonial cards grid
   ───────────────────────────────────────────────────────────────── */

const stats = [
  { value: '$2.4B+', label: 'Total transactions processed' },
  { value: '180+',   label: 'Countries supported worldwide' },
  { value: '4.9★',  label: 'Average app store rating' },
  { value: '99.99%', label: 'Platform uptime guarantee' },
];

const testimonials = [
  {
    quote: "N7 replaced three of our legacy banking tools overnight. The API integration took less than a day and our team was live the next morning.",
    name: 'Sarah Chen',
    role: 'CTO, Horizon Payments',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    tag: 'Enterprise',
    tagColor: '#00B4FD',
    stars: 5,
  },
  {
    quote: "The analytics dashboard alone is worth it. We cut our financial reporting time from 3 days to under 2 hours.",
    name: 'Marcus Webb',
    role: 'CFO, Arcline Capital',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
    tag: 'Finance',
    tagColor: '#9280FD',
    stars: 5,
  },
  {
    quote: "As a startup founder, I needed banking infrastructure that could scale with us. N7 handled our 10x growth without a single hiccup.",
    name: 'Priya Nair',
    role: 'Founder, Velo Labs',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    tag: 'Startup',
    tagColor: '#34C759',
    stars: 5,
  },
  {
    quote: "Real-time cross-border payments with near-zero fees changed how we pay our global contractors. Completely transformed our operations.",
    name: 'James Okafor',
    role: 'COO, RemoteFirst Inc.',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100',
    tag: 'Global',
    tagColor: '#FFD60A',
    stars: 5,
  },
  {
    quote: "N7's compliance module auto-updated our KYC flows when regulations changed in 3 countries simultaneously. Invaluable.",
    name: 'Lena Fischer',
    role: 'Head of Compliance, BankCore EU',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100',
    tag: 'Compliance',
    tagColor: '#FF6B6B',
    stars: 5,
  },
  {
    quote: "The mobile app is genuinely beautiful. Our customers started sending us screenshots of their own N7 dashboards — unprompted.",
    name: 'David Kim',
    role: 'Product Lead, NuBank Asia',
    avatar: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=100',
    tag: 'Product',
    tagColor: '#00B4FD',
    stars: 5,
  },
];

const StarRating = ({ count }) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FFD60A">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const TestimonialCard = ({ quote, name, role, avatar, tag, tagColor, stars, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.6, delay }}
    whileHover={{ y: -4, transition: { duration: 0.25 } }}
    style={{
      background: 'rgba(233,244,249,0.03)',
      border: '1px solid rgba(233,244,249,0.08)',
      borderRadius: '16px',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      cursor: 'default',
      transition: 'border-color 0.3s',
    }}
    onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,180,253,0.25)'}
    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(233,244,249,0.08)'}
  >
    {/* Top row: tag + stars */}
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <span style={{
        fontFamily: 'Chivo Mono, monospace',
        fontSize: '10px',
        fontWeight: 400,
        textTransform: 'uppercase',
        letterSpacing: '0.08em',
        color: tagColor,
        background: tagColor + '18',
        padding: '3px 10px',
        borderRadius: '20px',
        border: `1px solid ${tagColor}30`,
      }}>
        {tag}
      </span>
      <StarRating count={stars} />
    </div>

    {/* Quote */}
    <p style={{
      fontFamily: 'Archivo, sans-serif',
      fontSize: '15px',
      lineHeight: '165%',
      color: 'rgba(233,244,249,0.80)',
      margin: 0,
      flex: 1,
    }}>
      "{quote}"
    </p>

    {/* Author */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{
        width: '40px', height: '40px',
        borderRadius: '12px',
        overflow: 'hidden',
        border: '1.5px solid rgba(233,244,249,0.12)',
        flexShrink: 0,
      }}>
        <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div>
        <div style={{
          fontFamily: 'Archivo, sans-serif',
          fontWeight: 600,
          fontSize: '14px',
          color: '#E9F4F9',
        }}>
          {name}
        </div>
        <div style={{
          fontFamily: 'Archivo, sans-serif',
          fontSize: '12px',
          color: 'rgba(233,244,249,0.45)',
        }}>
          {role}
        </div>
      </div>
    </div>
  </motion.div>
);

const TestimonialsSection = () => {
  return (
    <section
      style={{ background: '#000D12' }}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      {/* Top border accent */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,180,253,0.4), transparent)',
      }}/>

      {/* Background glow */}
      <div style={{
        position: 'absolute',
        width: '600px', height: '600px',
        right: '-200px', top: '50%', transform: 'translateY(-50%)',
        background: 'linear-gradient(103.43deg, #00B4FD, #003ACE)',
        opacity: 0.05, filter: 'blur(100px)',
        pointerEvents: 'none',
      }}/>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 relative z-10">

        {/* ── Section heading ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, transparent, #00B4FD)', borderRadius: '1px' }}/>
            <span style={{
              fontFamily: 'Chivo Mono, monospace', fontSize: '12px',
              letterSpacing: '0.12em', textTransform: 'uppercase', color: '#00B4FD',
            }}>
              Trusted Worldwide
            </span>
            <div style={{ width: '32px', height: '2px', background: 'linear-gradient(90deg, #00B4FD, transparent)', borderRadius: '1px' }}/>
          </div>

          <h2 style={{
            fontFamily: 'Archivo, sans-serif',
            fontWeight: 500,
            fontSize: 'clamp(32px, 3.5vw, 52px)',
            lineHeight: '120%',
            letterSpacing: '-0.01em',
            color: '#E9F4F9',
            margin: '0 auto 16px',
            maxWidth: '640px',
          }}>
            Trusted by leading teams around the world
          </h2>

          <p style={{
            fontFamily: 'Archivo, sans-serif',
            fontSize: '16px',
            lineHeight: '160%',
            color: 'rgba(233,244,249,0.6)',
            maxWidth: '480px',
            margin: '0 auto',
          }}>
            From startups to global enterprises — teams rely on N7 to power their financial infrastructure.
          </p>
        </motion.div>

        {/* ── Stats row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '1px',
            background: 'rgba(233,244,249,0.06)',
            borderRadius: '16px',
            overflow: 'hidden',
            marginBottom: '56px',
            border: '1px solid rgba(233,244,249,0.06)',
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: '#000D12',
                padding: '28px 32px',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontFamily: 'Archivo, sans-serif',
                fontWeight: 600,
                fontSize: 'clamp(28px, 2.5vw, 40px)',
                lineHeight: 1,
                background: 'linear-gradient(135deg, #00B4FD, #003ACE)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '8px',
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'Archivo, sans-serif',
                fontSize: '13px',
                color: 'rgba(233,244,249,0.45)',
                lineHeight: '140%',
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Testimonials grid ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '20px',
        }}>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} delay={i * 0.08} {...t} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
