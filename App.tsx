
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GameCard from './components/GameCard';
import { Game } from './types';

const INITIAL_GAMES: Game[] = [
  {
    id: '1',
    title: 'คณิตศาสตร์ เรื่อง เซต โดย เจตนิพัทธ์ ชัยพฤกษ์',
    thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Venn_A_intersect_B.svg/1200px-Venn_A_intersect_B.svg.png',
    rating: 98,
    players: '1.2K',
    link: 'https://eba1a97d.gamesjedniphat.pages.dev'
  },
  {
    id: '2',
    title: 'คณิตศาสตร์ เรื่อง ตรรกศาสตร์ โดย หม่องเอ',
    thumbnail: 'https://www.lemon8-app.com/seo/image?item_id=7392169542337823248&index=0&sign=62959b7f11dea97d94a653cc92e2bd81',
    rating: 95,
    players: '850',
    link: 'https://8cf9a2dd-06ea-4de9-8d27-765cbd17c48e-00-ornx8mj1ikht.janeway.replit.dev/game'
  },
  {
    id: '3',
    title: 'คณิตศาสตร์ เรื่อง หลักการนับเบื้องต้น โดย เกษม ศิริบุตร',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO7l3wlCD-uRcxR7uIaTsuFd5h-00EsoLCiQ&s',
    rating: 92,
    players: '2.4K',
    link: ''
  },
  {
    id: '4',
    title: 'คณิตศาสตร์ เรื่อง ความน่าจะเป็น โดย รัฐศาสตร์ แซ่เติ๋น',
    thumbnail: 'https://www.smartmathpro.com/wp-content/uploads/2024/02/ความน่าจะเป็นม.3-2.jpg',
    rating: 89,
    players: '500',
    link: ''
  },
  {
    id: '5',
    title: 'คณิตศาสตร์ เรื่อง เลขยกกำลัง โดย ธนภัทร ปาละหน่อแก้ว',
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7PnQm9whzTnzOzz5vMRnG-ddgXxWbCHrDPQ&s',
    rating: 94,
    players: '1.1K',
    link: ''
  },
  {
    id: '6',
    title: 'คณิตศาสตร์ เรื่อง ฟังก์ชัน โดย รณพรี สายมูล',
    thumbnail: 'https://panyasociety.com/pages/wp-content/uploads/2021/12/f-1-1-A-onto-B-1024x819.png',
    rating: 91,
    players: '3.2K',
    link: ''
  }
];

function App() {
  const [games, setGames] = useState<Game[]>(INITIAL_GAMES);

  const handleUpdateGame = (updatedGame: Game) => {
    setGames(prev => prev.map(g => g.id === updatedGame.id ? updatedGame : g));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#191B1D]">
      <Navbar />
      
      <div className="flex flex-1">
        <Sidebar />
        
        <main className="flex-1 p-4 md:p-8 overflow-y-auto max-w-7xl mx-auto w-full">
          <div className="mb-10 relative h-32 md:h-40 rounded-xl overflow-hidden bg-gradient-to-r from-[#232527] to-[#191B1D] border border-[#393B3D] flex items-center p-8">
            <div className="z-10">
              <h1 className="text-2xl md:text-3xl font-extrabold text-white uppercase tracking-tighter">โครงงานเทคโนโลยี</h1>
              <p className="text-gray-400 text-sm md:text-base mt-1">เกมคณิตศาสตร์</p>
            </div>
            {/* Background design element */}
            <div className="absolute right-0 top-0 w-64 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          </div>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6 border-b border-[#393B3D] pb-2">
              <h2 className="text-xl font-bold tracking-wide uppercase">Featured Projects</h2>
              <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">6 Slots Active</span>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-6">
              {games.map((game) => (
                <GameCard 
                  key={game.id} 
                  game={game} 
                  onUpdate={handleUpdateGame}
                />
              ))}
            </div>
          </section>

          <footer className="mt-16 border-t border-[#393B3D] pt-8 pb-12 text-center text-gray-500 text-xs">
            <div className="flex flex-wrap justify-center gap-4 mb-4 uppercase tracking-widest font-bold">
              <a href="#" className="hover:text-white">Profile</a>
              <a href="#" className="hover:text-white">Settings</a>
              <a href="#" className="hover:text-white">Support</a>
              <a href="#" className="hover:text-white">Pom's work © 2025</a>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
