import React from 'react';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import StatsSection from './components/StatsSection';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PublishSection from './components/PublishSection';
import CreateSection from './components/CreateSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <StatsSection />
      <PublishSection />
      <CreateSection />
     </div>
  );
}

export default App;