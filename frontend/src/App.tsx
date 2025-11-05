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
import CollaborateSection from './components/CollaborateSection';
import EngageSection from './components/EngageSection';
import AnalyzeSection from './components/AnalyzeSection';
import ConnectSection from './components/ConnectSection';
import GrowSection from './components/GrowSection';
import SupportSection from './components/SupportSection';
import ResourcesSection from './components/ResourcesSection';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <Hero />
      <StatsSection />
      <PublishSection />
      <CreateSection />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <CollaborateSection />
        <EngageSection />
      </div>
      <div className="max-w-9xl mx-auto mt-8 grid md:grid-cols-1 gap-7">
        <AnalyzeSection />
      </div>
      <ConnectSection />
      <GrowSection />
      <SupportSection />
      <ResourcesSection />
     </div>
  );
}

export default App;