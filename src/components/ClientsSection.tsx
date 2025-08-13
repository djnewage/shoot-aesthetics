import React from 'react';
export function ClientsSection() {
  return <section id="clients" className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Our Clients</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          <div className="flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold">SONY</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold">NIKE</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold">BMW</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold">Spotify</span>
          </div>
        </div>
      </div>
    </section>;
}