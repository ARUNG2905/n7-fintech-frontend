import React from 'react';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import FeatureCard from './ui/FeatureCard';

// Clean SVG icons matching the N7 exact aesthetic
const icons = {
  security: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  lightning: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  analytics: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ),
  global: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
};

const features = [
  {
    title: "Secure Data Base",
    description: "Every transaction is securely stored in a scalable distributed database, effectively eliminating the possibility of theft or systemic operational failures.",
    icon: icons.security
  },
  {
    title: "High-Speed Analytics",
    description: "Process thousands of massive queries globally in under 20ms. Seamlessly hook real-time analytics to your decision-making workflows easily.",
    icon: icons.analytics
  },
  {
    title: "Fast Global Payments",
    description: "Whether transferring funds to suppliers in Europe or paying remote workers in Asia, our network settles instantly without exorbitant fees.",
    icon: icons.global
  },
  {
    title: "Automated Compliance",
    description: "Stay compliant automatically in over 190 countries and specific state regulations. We continuously update our security and regulatory protocols.",
    icon: icons.lightning
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 sm:py-32 bg-background border-t border-white/5 relative z-10 overflow-hidden">
      {/* Subtle Background Glow behind the section */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 xl:gap-24">
          
          {/* Left Column: Heading & CTA */}
          <div className="lg:w-[40%] flex flex-col items-start lg:sticky lg:top-40 h-max">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.1] mb-8"
            >
              All the features you need in one single platform.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
               <Button variant="secondary" className="px-6 py-2.5 rounded-full hover:bg-white/10 text-xs font-semibold tracking-wide uppercase group border-white/20">
                  Explore all features
                  <svg className="w-3.5 h-3.5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
               </Button>
            </motion.div>
          </div>

          {/* Right Column: Dynamic Feature Cards Grid */}
          <div className="lg:w-[60%] grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, idx) => (
              <FeatureCard 
                key={idx}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={0.2 + (idx * 0.15)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
