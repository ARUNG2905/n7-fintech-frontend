import React from 'react';
import './styles/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSection from './components/FeaturesSection';
import CoreBankingSection from './components/CoreBankingSection';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-background relative flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <FeaturesSection />
          <CoreBankingSection />
        </main>
      </div>
    </Router>
  );
};

export default App;