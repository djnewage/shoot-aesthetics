import React from "react";
import { PlayCircleIcon } from "lucide-react";
export function Hero() {
  return (
    <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-4 text-center">
          Shoot Aesthetics
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mb-12 text-center text-gray-600">
          We get your customers to care about your story.
        </h2>
        <div className="rounded-lg overflow-hidden">
          <div className="relative aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/t6HD9SB8nUQ?si=Y2DXb2U5UWHck2T9"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0 w-full h-full"></iframe>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Core Mission</h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            To create honest, well-made video content that builds trust, supports growth, and helps brands convert naturally.
          </p>
        </div>
      </div>
    </section>
  );
}
