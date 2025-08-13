import React from 'react';
export function Footer() {
  return <footer className="w-full px-6 py-10 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <button className="bg-black text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-colors">
          GET IN TOUCH
        </button>
        <div className="mt-12 w-full border-t border-gray-200 pt-6 flex justify-center">
          <p className="text-sm text-gray-500">
            © 2023 Shoot Aesthetics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}