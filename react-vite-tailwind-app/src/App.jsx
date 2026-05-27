import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSection';
import CoreBankingSection from './components/CoreBankingSection';
import CoreBankingDetailsSection from './components/CoreBankingDetailsSection';
import PaperlessSection from './components/PaperlessSection';
import InsightsSection from './components/InsightsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-background relative flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <SolutionsSection />
        <CoreBankingSection />
        <CoreBankingDetailsSection />
        <PaperlessSection />
        <InsightsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;