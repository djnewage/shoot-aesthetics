import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeDo } from './components/WhatWeDo';
import { HowItWorks } from './components/HowItWorks';
import { WorkShowcase } from './components/WorkShowcase';
import { WhyUs } from './components/WhyUs';
import { ClientsSection } from './components/ClientsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />
        <WhatWeDo />
        <HowItWorks />
        <WorkShowcase />
        <WhyUs />
        <ClientsSection />
      </main>
      <Footer />
    </div>;
}