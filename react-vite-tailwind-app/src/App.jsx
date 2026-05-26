import React from 'react';
import './styles/tailwind.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SolutionsSection from './components/SolutionsSection';
import CoreBankingSection from './components/CoreBankingSection';
import PaperlessSection from './components/PaperlessSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background relative flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <SolutionsSection />
          <CoreBankingSection />
          <PaperlessSection />
          <TestimonialsSection />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;