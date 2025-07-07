import React from 'react';
import { Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex space-x-8">
          <button className="relative font-bold">
            For you
            <div className="absolute bottom-0 left-0 w-full h-1 bg-[#1d9bf0] rounded-full"></div>
          </button>
          <button className="text-gray-500">Following</button>
        </div>
        <button>
          <Settings className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;