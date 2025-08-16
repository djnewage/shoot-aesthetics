import React from 'react';

export function WhyUs() {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">Why Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">We Care</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Your story comes first; the camera is second.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">We're Quick</h3>
            <p className="text-lg md:text-xl text-gray-600">
              One-week turnaround, because momentum matters.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">We're Human</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Friendly crew, clear talk, easy to work with.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}