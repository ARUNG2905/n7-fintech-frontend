import React from 'react';
import { motion } from 'framer-motion';

/* ── Screen Mockups (Internal Screens reused for visual depth) ── */
const DashboardScreen = () => (
  <div style={{ padding: '28px 12px 60px', display: 'flex', flexDirection: 'column', gap: '12px', background: '#F5F6FA', minHeight: '100%' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
      <div>
        <div style={{ fontSize: '7px', color: '#888', fontWeight: 500 }}>Good Morning</div>
        <div style={{ fontSize: '11px', fontWeight: 700, color: '#0D0D0C' }}>Toni Kross</div>
      </div>
      <div style={{ width: '28px', height: '28px', borderRadius: '10px', background: '#D9D9D9', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=60" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
      </div>
    </div>
    <div style={{ background: 'linear-gradient(135deg, #00B4FD 0%, #003ACE 100%)', borderRadius: '16px', padding: '14px', color: 'white' }}>
      <div style={{ fontSize: '7px', opacity: 0.8, marginBottom: '4px' }}>Total Balance</div>
      <div style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.5px' }}>$42,295.00</div>
      <div style={{ fontSize: '7px', opacity: 0.7, marginTop: '2px' }}>USD</div>
      <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
        {['↑ Send', '↓ Receive', '+ Top Up'].map(a => (
          <div key={a} style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', padding: '4px 6px', fontSize: '6px', fontWeight: 600 }}>{a}</div>
        ))}
      </div>
    </div>
    <div style={{ background: 'white', borderRadius: '12px', padding: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: '8px', fontWeight: 700, color: '#0F0F0F', marginBottom: '8px' }}>Recent activity</div>
      {[
        { name: 'To Jin', tag: 'Work', date: '12 jun', amount: '-$59', color: '#9280FD', dir: '↗' },
        { name: 'From Google', tag: 'Salary', date: '10 jun', amount: '+$859', color: '#1738AD', dir: '↙' },
        { name: 'To David', tag: 'Work', date: '7 jun', amount: '-$479', color: '#9280FD', dir: '↗' },
      ].map((tx) => (
        <div key={tx.name} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '5px 0', borderBottom: '0.5px solid rgba(0,0,0,0.06)' }}>
          <div style={{ width: '22px', height: '22px', borderRadius: '7px', background: tx.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', color: 'white', flexShrink: 0 }}>{tx.dir}</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '7px', fontWeight: 700, color: '#0B0B0B' }}>{tx.name} <span style={{ fontWeight: 400, opacity: 0.5 }}>· {tx.tag}</span></div>
            <div style={{ fontSize: '6px', color: '#0B0B0B', opacity: 0.6 }}>{tx.date}</div>
          </div>
          <div style={{ fontSize: '7px', fontWeight: 700, color: '#0B0B0B' }}>{tx.amount}</div>
        </div>
      ))}
    </div>
  </div>
);

const AnalyticsScreen = () => (
  <div style={{ padding: '28px 12px 60px', background: '#F5F6FA', minHeight: '100%' }}>
    <div style={{ fontSize: '11px', fontWeight: 700, color: '#0D0D0C', marginBottom: '4px', marginTop: '8px' }}>Analytics</div>
    <div style={{ fontSize: '7px', color: '#888', marginBottom: '12px' }}>June 2022</div>
    <div style={{ background: 'white', borderRadius: '12px', padding: '14px', marginBottom: '10px', textAlign: 'center', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
      <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'conic-gradient(#003ACE 0% 42%, #00B4FD 42% 67%, #9280FD 67% 83%, #34C759 83% 100%)', margin: '0 auto 8px', position: 'relative' }}>
        <div style={{ position: 'absolute', inset: '16px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: '8px', fontWeight: 700, color: '#0D0D0C' }}>$2,841</span>
        </div>
      </div>
      <div style={{ fontSize: '7px', fontWeight: 600, color: '#888' }}>Total spent this month</div>
    </div>
    {[
      { cat: 'Housing', pct: 42, color: '#003ACE', amount: '$1,193' },
      { cat: 'Food & Drinks', pct: 25, color: '#00B4FD', amount: '$710' },
      { cat: 'Entertainment', pct: 16, color: '#9280FD', amount: '$454' },
      { cat: 'Transport', pct: 17, color: '#34C759', amount: '$484' },
    ].map((c) => (
      <div key={c.cat} style={{ marginBottom: '8px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3px' }}>
          <span style={{ fontSize: '7px', fontWeight: 600, color: '#0D0D0C' }}>{c.cat}</span>
          <span style={{ fontSize: '7px', fontWeight: 700, color: '#0D0D0C' }}>{c.amount}</span>
        </div>
        <div style={{ height: '4px', background: '#F0F0F0', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{ width: `${c.pct}%`, height: '100%', background: c.color, borderRadius: '2px' }}/>
        </div>
      </div>
    ))}
  </div>
);

const ProfileScreen = () => (
  <div style={{ padding: '28px 12px 60px', background: '#F5F6FA', minHeight: '100%' }}>
    <div style={{ textAlign: 'center', marginBottom: '12px', marginTop: '8px' }}>
      <div style={{ width: '48px', height: '48px', borderRadius: '16px', overflow: 'hidden', margin: '0 auto 6px', border: '2px solid #003ACE' }}>
        <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
      </div>
      <div style={{ fontSize: '11px', fontWeight: 700, color: '#0D0D0C' }}>Toni Kross</div>
      <div style={{ fontSize: '7px', color: '#888' }}>Premium Member</div>
    </div>
    {[
      { icon: '🔒', label: 'Security Settings', desc: 'Biometrics, PIN, 2FA' },
      { icon: '💳', label: 'My Cards', desc: '2 cards active' },
      { icon: '🔔', label: 'Notifications', desc: 'Customise alerts' },
      { icon: '🌐', label: 'Language & Region', desc: 'English (US)' },
      { icon: '❓', label: 'Help & Support', desc: '24/7 live chat' },
    ].map((item) => (
      <div key={item.label} style={{ background: 'white', borderRadius: '10px', padding: '8px 10px', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', boxShadow: '0 1px 4px rgba(0,0,0,0.06)' }}>
        <div style={{ fontSize: '14px', width: '24px', textAlign: 'center' }}>{item.icon}</div>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: '8px', fontWeight: 700, color: '#0D0D0C' }}>{item.label}</div>
          <div style={{ fontSize: '6px', color: '#888' }}>{item.desc}</div>
        </div>
        <div style={{ fontSize: '10px', color: '#ccc' }}>›</div>
      </div>
    ))}
  </div>
);

const MobilePhoneMockup = ({ children }) => (
  <div style={{
    width: '268px', height: '542px',
    background: 'linear-gradient(160deg, #1a1f2e 0%, #0d1117 100%)',
    borderRadius: '40px', border: '6px solid #2a2f3f',
    position: 'relative', overflow: 'hidden', flexShrink: 0,
    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
  }}>
    <div style={{
      position: 'absolute', top: '10px', left: '50%', transform: 'translateX(-50%)',
      width: '70px', height: '10px', background: '#0d1117', borderRadius: '8px', zIndex: 10
    }}/>
    <div style={{ width: '100%', height: '100%', overflowY: 'hidden', background: '#F5F6FA' }}>
      {children}
    </div>
    <div style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, height: '44px',
      background: 'rgba(231,231,231,0.85)', backdropFilter: 'blur(20px)', borderRadius: '0 0 34px 34px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: '0 8px', zIndex: 20,
    }}>
      {[{ icon: '⌂', active: true }, { icon: '⇋' }, { icon: '↕' }, { icon: '◉' }].map((item, i) => (
        <span key={i} style={{ fontSize: '16px', color: item.active ? '#081E69' : '#1B1B1B', opacity: item.active ? 1 : 0.5 }}>
          {item.icon}
        </span>
      ))}
    </div>
  </div>
);

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
    <section className="relative w-full overflow-hidden" style={{ background: '#E9F4F9', paddingBottom: '120px' }}>
      
      {/* ── Background Watermarks & Glows ── */}
      <div style={{ position: 'absolute', top: '-66px', left: '277px', fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '572px', opacity: 0.5, color: '#000D12', pointerEvents: 'none', userSelect: 'none' }}>
        N7
      </div>
      <div style={{ position: 'absolute', top: '957px', left: '886px', fontFamily: 'Archivo, sans-serif', fontWeight: 500, fontSize: '1524px', opacity: 0.2, color: '#000D12', pointerEvents: 'none', userSelect: 'none', lineHeight: 1 }}>
        7
      </div>
      
      <div style={{ position: 'absolute', top: '-260px', left: '-85px', width: '585px', height: '585px', background: 'linear-gradient(103.43deg, #FDA700, #CE5700)', opacity: 0.02, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: '-91px', left: '661px', width: '778px', height: '778px', background: 'linear-gradient(103.43deg, #FDA700, #CE5700)', opacity: 0.05, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}/>
      <div style={{ position: 'absolute', top: '1928px', left: '-364px', width: '778px', height: '778px', background: 'linear-gradient(100.92deg, #00CFFD, #0015CE)', opacity: 0.1, filter: 'blur(50px)', borderRadius: '50%', pointerEvents: 'none' }}/>

      {/* ── Top Banner Marquee ── */}
      <div className="w-full h-[116px] bg-white flex items-center mb-32 relative z-10 overflow-hidden shadow-sm">
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
              {/* Hand Wave Emoji placeholder for lottie animation */}
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

      {/* ── Staggered Phone Layout Rows ── */}
      <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col gap-32">
        
        {/* ROW 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row items-center gap-16 md:gap-24 md:justify-center"
        >
          <MobilePhoneMockup>
            <DashboardScreen/>
          </MobilePhoneMockup>
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

        {/* ROW 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-24 md:justify-center"
        >
          <MobilePhoneMockup>
            <AnalyticsScreen/>
          </MobilePhoneMockup>
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

        {/* ROW 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="flex flex-col md:flex-row items-center gap-16 md:gap-24 md:justify-center"
        >
          <MobilePhoneMockup>
            <ProfileScreen/>
          </MobilePhoneMockup>
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

      {/* ── Footer Dark CTA Card ── */}
      <div className="max-w-[1280px] mx-auto mt-32 relative z-10 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            background: 'linear-gradient(99.21deg, #031E2A -12.22%, #000D12 59.26%)', 
            borderRadius: '27px', 
            padding: '64px 80px', 
            position: 'relative', 
            overflow: 'hidden' 
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
            <p style={{ fontFamily: 'Archivo, sans-serif', fontSize: '16px', color: '#E9F4F9', opacity: 0.7, maxWidth: '460px', margin: '0 auto', lg: { margin: 0 } }}>
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
      </div>

    </section>
  );
};

export default PaperlessSection;
