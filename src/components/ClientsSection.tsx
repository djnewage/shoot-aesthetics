import React from "react";
import brewersLogo from "../../assets/brewers.svg";
import bucksLogo from "../../assets/bucks.svg";
import mamLogo from "../../assets/mam.png";

export function ClientsSection() {
  return (
    <section id="clients" className="w-full px-6 py-16 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-10 text-center">
          Who we worked with{" "}
        </h2>
        <div className="grid grid-cols-3 gap-8 items-center justify-items-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center">
            <img
              src={brewersLogo}
              alt="Milwaukee Brewers"
              className="h-20 md:h-28 w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={bucksLogo}
              alt="Milwaukee Bucks"
              className="h-20 md:h-28 w-auto"
            />
          </div>
          <div className="flex items-center justify-center">
            <img
              src={mamLogo}
              alt="Milwaukee Art Museum"
              className="h-20 md:h-28 w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
