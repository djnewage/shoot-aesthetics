import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Idea Call',
      description: 'A 30-minute conversation to understand your goals and direction.'
    },
    {
      number: '02',
      title: 'Simple Plan',
      description: "A one-page outline so everyone knows what's being made."
    },
    {
      number: '03',
      title: 'Shoot Day',
      description: 'A small, professional crew that keeps things relaxed and on time.'
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Final videos ready to post within 7 days (faster if needed).'
    }
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-12 text-center">How It Works (4‑Easy Steps)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-gray-300 mb-4">{step.number}</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
              <p className="text-lg md:text-xl text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}