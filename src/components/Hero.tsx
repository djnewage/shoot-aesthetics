import React from 'react';
import { PlayCircleIcon } from 'lucide-react';
export function Hero() {
  return <section className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          We are a full-service
          <br />
          media agency.
        </h2>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl">
          We offer a range of high-quality video production and creative
          services for brands, companies, and creators.
        </p>
        <div className="bg-black rounded-lg overflow-hidden">
          <div className="relative aspect-video">
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-1 p-4">
              <div className="rounded overflow-hidden">
                <img src="/c8524f79-02a2-4855-945d-7477a48b4be4.jpg" alt="Person silhouette entering doorway" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden">
                <img src="/download.jpg" alt="Camera equipment setup" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden">
                <img src="/download.jpg" alt="Video production crew" className="w-full h-full object-cover" />
              </div>
              <div className="rounded overflow-hidden">
                <img src="/c8524f79-02a2-4855-945d-7477a48b4be4.jpg" alt="Person working with camera" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all transform hover:scale-105">
                <PlayCircleIcon size={48} className="text-black" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
}