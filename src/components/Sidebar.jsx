import React from 'react';
import { Home, Search, Bell, Mail, Clipboard, Bookmark, Users, Diamond, User, MoreHorizontal, Plus } from 'lucide-react';

const Sidebar = ({ onOpenPostModal }) => {
  return (
    <nav className="w-[68px] xl:w-[275px] h-screen fixed">
      <div className="flex flex-col h-full px-2">
        {/* Logo */}
        <div className="p-2 xl:p-4 hover:bg-gray-900/50 rounded-full w-fit cursor-pointer">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="w-8 h-8">
            <g>
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </g>
          </svg>
        </div>

        {/* Navigation */}
        <div className="mt-2 space-y-1">
          <a href="#" className="flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl group">
            <Home className="w-7 h-7" />
            <span className="hidden xl:block">Home</span>
          </a>
          <a href="#" className="flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Search className="w-7 h-7" />
            <span className="hidden xl:block">Explore</span>
          </a>
          <a href="#" className="flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Bell className="w-7 h-7" />
            <span className="hidden xl:block">Notifications</span>
          </a>
          <a href="#" className="flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Mail className="w-7 h-7" />
            <span className="hidden xl:block">Messages</span>
          </a>
          <a href="#" className="hidden md:flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Clipboard className="w-7 h-7" />
            <span className="hidden xl:block">Lists</span>
          </a>
          <a href="#" className="hidden md:flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Bookmark className="w-7 h-7" />
            <span className="hidden xl:block">Bookmarks</span>
          </a>
          <a href="#" className="hidden md:flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Users className="w-7 h-7" />
            <span className="hidden xl:block">Communities</span>
          </a>
          <a href="#" className="hidden md:flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <Diamond className="w-7 h-7" />
            <span className="hidden xl:block">Premium</span>
          </a>
          <a href="#" className="hidden md:flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <User className="w-7 h-7" />
            <span className="hidden xl:block">Profile</span>
          </a>
          <a href="#" className="hidden md:flex items-center justify-center xl:justify-start gap-4 p-3 hover:bg-gray-900/50 rounded-full text-xl">
            <MoreHorizontal className="w-7 h-7" />
            <span className="hidden xl:block">More</span>
          </a>
        </div>

        {/* Post Button */}
        <button 
          onClick={onOpenPostModal}
          className="hidden md:block bg-[#1d9bf0] text-white rounded-full py-3 px-4 xl:px-24 text-lg font-bold hover:bg-[#1a8cd8] transition-colors mt-4"
        >
          <span className="hidden xl:block">Post</span>
          <Plus className="w-6 h-6 xl:hidden" />
        </button>

        {/* Mobile Post Button */}
        <button 
          onClick={onOpenPostModal}
          className="md:hidden fixed bottom-20 right-4 bg-[#1d9bf0] text-white p-4 rounded-full shadow-lg hover:bg-[#1a8cd8] transition-colors z-50"
        >
          <Plus className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;