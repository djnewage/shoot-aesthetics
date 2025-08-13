import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WorkShowcase } from './components/WorkShowcase';
import { ClientsSection } from './components/ClientsSection';
import { Footer } from './components/Footer';
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Header />
      <main className="w-full">
        <Hero />
        <WorkShowcase />
        <ClientsSection />
      </main>
      <Footer />
    </div>;
}