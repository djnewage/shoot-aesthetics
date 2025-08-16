import React, { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import logo from "../../public/SALOGO-bnw.png";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full px-6 py-4 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={logo} alt="Shoot Aesthetics" className="h-16 md:h-20" />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2"
            >
              <MenuIcon size={24} />
            </button>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-lg font-medium hover:text-yellow-500 transition-colors">
              About
            </a>
            <a
              href="#work"
              className="text-lg font-medium hover:text-yellow-500 transition-colors">
              Our Work
            </a>
            <a
              href="#clients"
              className="text-lg font-medium hover:text-yellow-500 transition-colors">
              Clients
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <img src={logo} alt="Shoot Aesthetics" className="h-12" />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <X size={24} />
                </button>
              </div>
              
              <nav className="space-y-6">
                <a
                  href="#about"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xl font-medium hover:text-yellow-500 transition-colors">
                  About
                </a>
                <a
                  href="#work"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xl font-medium hover:text-yellow-500 transition-colors">
                  Our Work
                </a>
                <a
                  href="#clients"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xl font-medium hover:text-yellow-500 transition-colors">
                  Clients
                </a>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
