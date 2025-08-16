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
              Short‑form and long‑form brand films that show the heart behind
              your brand—launch pieces, mini‑docs, founder stories.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Social Refresh
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              Fresh photos & Reels every week so you stay in the conversation.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Event Memories
            </h3>
            <p className="text-lg md:text-xl text-gray-600">
              Pop-ups, launches, events, filmed today, shared tomorrow.
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
