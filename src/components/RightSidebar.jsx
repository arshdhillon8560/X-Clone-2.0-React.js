import React from 'react';
import { Search } from 'lucide-react';


//RightSidebar component displays search input, trends, who to follow suggestions, and footer links

const RightSidebar = ({ onSearch }) => {
  const trends = [
    { category: 'Technology', tag: '#Cybertruck', posts: '892K' },
    { category: 'Business', tag: '#OpenAI', posts: '524K' },
    { category: 'Entertainment', tag: '#GTA6', posts: '956K' },
  ];

  const suggestions = [
    {
      name: 'Elon Musk',
      username: 'elonmusk',
      avatar: 'https://pbs.twimg.com/profile_images/1683325380441128960/yRsRRjGO_400x400.jpg'
    },
    {
      name: 'Sam Altman',
      username: 'sama',
      avatar: 'https://image.cnbcfm.com/api/v1/image/107346333-1702387207956-gettyimages-1841164656-HOPE_GLOBAL_FORUMS.jpeg?v=1705571376&w=1920&h=1080'
    }
  ];

  return (
    <aside className="hidden lg:block w-[350px] ml-8 mr-4">
      <div className="sticky top-0 max-h-screen overflow-y-auto scrollbar-hidden">
        {/* Search */}
        <div className="bg-black py-2">
          <div className="relative">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-500" />
            <input 
              type="text" 
              placeholder="Search" 
              onChange={(e) => onSearch(e.target.value)}
              className="w-full bg-[#202327] rounded-full py-3 pl-12 pr-4 text-white focus:bg-black focus:outline-none focus:ring-1 focus:ring-[#1d9bf0]"
            />
          </div>
        </div>

        {/* Trends */}
        <div className="bg-[#16181c] rounded-2xl mt-4">
          <h2 className="text-xl font-bold p-4">Trends for you</h2>
          {trends.map((trend, index) => (
            <div key={index} className="hover:bg-white/5 p-4 cursor-pointer">
              <p className="text-sm text-gray-500">{trend.category} · Trending</p>
              <p className="font-bold">{trend.tag}</p>
              <p className="text-sm text-gray-500">{trend.posts} posts</p>
            </div>
          ))}
          <button className="p-4 text-[#1d9bf0] hover:bg-white/5 w-full text-left rounded-b-2xl">
            Show more
          </button>
        </div>

        {/* Who to follow */}
        <div className="bg-[#16181c] rounded-2xl mt-4">
          <h2 className="text-xl font-bold p-4">Who to follow</h2>
          {suggestions.map((user, index) => (
            <div key={index} className="hover:bg-white/5 p-4 flex items-center justify-between">
              <div className="flex items-center">
                <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full" />
                <div className="ml-3">
                  <p className="font-bold">{user.name}</p>
                  <p className="text-gray-500">@{user.username}</p>
                </div>
              </div>
              <button className="bg-white text-black rounded-full px-4 py-1.5 font-bold hover:bg-gray-200">
                Follow
              </button>
            </div>
          ))}
          <button className="p-4 text-[#1d9bf0] hover:bg-white/5 w-full text-left rounded-b-2xl">
            Show more
          </button>
        </div>

        {/* Footer */}
        <footer className="text-gray-500 text-sm mt-4 px-4 space-y-2 pb-4">
          <div className="space-x-3">
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
          <div className="space-x-3">
            <a href="#" className="hover:underline">Accessibility</a>
            <a href="#" className="hover:underline">Ads info</a>
            <a href="#" className="hover:underline">More</a>
          </div>
          <div>© 2025 X Corp.</div>
        </footer>
      </div>
    </aside>
  );
};

export default RightSidebar;
