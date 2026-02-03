
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GameCard from './components/GameCard';
import { Game } from './types';

const INITIAL_GAMES: Game[] = [
  {
    id: '1',
    title: 'คณิตศาสตร์ เรื่อง เซต โดย เจตนิพัทธ์ ชัยพฤกษ์',
    thumbnail: 'https://img5.pic.in.th/file/secure-sv1/1fdadab0a778d13b7.png',
    rating: 98,
    players: '1.2K',
    link: 'https://74f77131.gamesjedniphat.pages.dev'
  },
  {
    id: '2',
    title: 'คณิตศาสตร์ เรื่อง ตรรกศาสตร์ โดย หม่องเอ',
    thumbnail: 'https://img2.pic.in.th/2513ac5120c103126.png',
    rating: 95,
    players: '850',
    link: 'https://d2ea8018.gamesa.pages.dev'
  },
  {
    id: '3',
    title: 'คณิตศาสตร์ เรื่อง หลักการนับเบื้องต้น โดย เกษม ศิริบุตร',
    thumbnail: 'https://img2.pic.in.th/3924f3e57687d4d5a.png',
    rating: 92,
    players: '2.4K',
    link: 'https://1dd7926d.gameskasem.pages.dev'
  },
  {
    id: '4',
    title: 'คณิตศาสตร์ เรื่อง ความน่าจะเป็น โดย รัฐศาสตร์ แซ่เติ๋น',
    thumbnail: 'https://img2.pic.in.th/417907303f9a4e67f.png',
    rating: 89,
    players: '500',
    link: 'https://eca9efd9.gamesflok.pages.dev'
  },
  {
    id: '5',
    title: 'คณิตศาสตร์ เรื่อง เลขยกกำลัง โดย ธนภัทร ปาละหน่อแก้ว',
    thumbnail: 'https://img5.pic.in.th/file/secure-sv1/5e843e139f05e6671.png',
    rating: 94,
    players: '1.1K',
    link: 'https://f8ed6eaf.gamesthanaphat.pages.dev'
  },
  {
    id: '6',
    title: 'คณิตศาสตร์ เรื่อง ฟังก์ชัน โดย รณพรี สายมูล',
    thumbnail: 'https://img5.pic.in.th/file/secure-sv1/6504400d9d70d4c23.png',
    rating: 91,
    players: '3.2K',
    link: 'https://ac7d78ae.gamesfirst.pages.dev'
  }
];

function App() {
  const [games, setGames] = useState<Game[]>(INITIAL_GAMES);

  const handleUpdateGame = (updatedGame: Game) => {
    setGames(prev => prev.map(g => g.id === updatedGame.id ? updatedGame : g));
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#191B1D] font-sans">
      <Navbar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-8">
        <div className="mb-10 relative h-32 md:h-40 rounded-3xl overflow-hidden bg-gradient-to-r from-[#232527] to-[#191B1D] border border-[#393B3D] flex items-center p-8 shadow-2xl">
          <div className="z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide font-['Mali']">โครงงานเทคโนโลยี</h1>
            <p className="text-gray-300 text-lg md:text-xl mt-1 font-['Mali']">เกมคณิตศาสตร์</p>
          </div>
          {/* Background design element */}
          <div className="absolute right-0 top-0 w-64 h-full bg-white/5 skew-x-12 transform translate-x-20"></div>
          <div className="absolute left-10 bottom-[-20px] w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>

        <section className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-2xl font-bold tracking-wide text-white/90 font-['Mali'] border-b-2 border-blue-500/50 pb-2 px-8">Featured Projects</h2>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-8">
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
            <a href="#" className="hover:text-white transition-colors">Profile</a>
            <a href="#" className="hover:text-white transition-colors">Settings</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Pom's work © 2025</a>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
