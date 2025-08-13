import React from 'react';
import { MenuIcon } from 'lucide-react';
export function Header() {
  return <header className="w-full px-6 py-4 md:px-12 lg:px-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-yellow-400 px-4 py-2 rounded-md">
            <h1 className="text-2xl md:text-3xl font-bold">
              Shoot<span className="text-3xl md:text-4xl">🎥</span>t
              <br />
              Aesthetics
            </h1>
          </div>
        </div>
        <div className="md:hidden">
          <button className="p-2">
            <MenuIcon size={24} />
          </button>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-lg font-medium hover:text-yellow-500 transition-colors">
            About
          </a>
          <a href="#work" className="text-lg font-medium hover:text-yellow-500 transition-colors">
            Our Work
          </a>
          <a href="#clients" className="text-lg font-medium hover:text-yellow-500 transition-colors">
            Clients
          </a>
        </nav>
      </div>
    </header>;
}