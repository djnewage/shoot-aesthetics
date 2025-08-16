import React from 'react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Idea Call',
      description: '30 min to swap references and set a budget.'
    },
    {
      number: '02',
      title: 'Plan Sheet',
      description: '1-page mood board in your inbox.'
    },
    {
      number: '03',
      title: 'Shoot Day',
      description: 'Small pro crew shows up, directs talent, keeps things on time.'
    },
    {
      number: '04',
      title: 'Files Delivered',
      description: 'Ready to post in 7 days (faster if you need).'
    }
  ];

  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center">How It Works</h2>
        <p className="text-2xl md:text-3xl text-gray-600 mb-12 text-center">4 Easy Steps</p>
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