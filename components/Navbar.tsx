
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="h-14 bg-[#232527] border-b border-[#393B3D] flex items-center justify-between px-4 sticky top-0 z-50">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center rounded-sm">
             <div className="w-4 h-4 bg-[#232527]"></div>
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline uppercase">Pom's work</span>
        </div>
        
        {/* Navigation links removed as requested */}
      </div>

      <div className="flex-1 max-w-xl px-4 hidden sm:block">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search Games"
            className="w-full bg-[#191B1D] border border-[#393B3D] rounded-md py-1.5 pl-10 pr-4 text-sm focus:outline-none focus:border-white transition-colors"
          />
          <svg className="w-4 h-4 absolute left-3 top-2 text-gray-400 group-focus-within:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-600 border border-gray-400 flex items-center justify-center overflow-hidden">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Guest" alt="Avatar" />
          </div>
          <span className="text-sm font-medium hidden sm:inline">Guest</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
