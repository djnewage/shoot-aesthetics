import React, { useState } from "react";
import { ContactModal } from "./ContactModal";

export function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <footer className="w-full px-6 py-10 md:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto flex flex-col items-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors transform hover:scale-105"
          >
            GET IN TOUCH
          </button>
          <div className="mt-12 w-full border-t border-gray-200 pt-6 flex justify-center">
            <p className="text-sm text-gray-500">
              © 2025 Shoot Aesthetics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
