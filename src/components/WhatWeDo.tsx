import React from "react";

export function WhatWeDo() {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">
          What We Do
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Story Films</h3>
            <p className="text-lg md:text-xl text-gray-600">
              Short videos that show who you are, what you stand for, and why you exist.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Weekly Social Content
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              Simple, consistent Reels and photos so your brand stays present without you forcing posts.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 whitespace-nowrap">
              Event & Launch Coverage
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              We capture your events and launches and turn them into videos people can see and share right after.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-xl md:text-2xl font-medium">
            Brand films, weekly social, event recaps.
          </p>
        </div>
      </div>
    </section>
  );
}
