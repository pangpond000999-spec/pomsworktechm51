
import React, { useState, useEffect } from 'react';

interface LeaderboardEntry {
  name: string;
  score: number;
  timestamp: number;
  isCurrentUser?: boolean;
}

const Sidebar: React.FC = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [score, setScore] = useState(0);
  const [leaderboard, setLeaderboard] = useState<LeaderboardEntry[]>([]);

  // Load existing real scores from localStorage on mount
  useEffect(() => {
    const savedScores = localStorage.getItem('poms_work_leaderboard');
    if (savedScores) {
      try {
        const parsed = JSON.parse(savedScores);
        setLeaderboard(parsed.sort((a: LeaderboardEntry, b: LeaderboardEntry) => b.score - a.score));
      } catch (e) {
        console.error("Failed to parse leaderboard", e);
      }
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) {
      setIsLoggedIn(true);
      setScore(0);
    }
  };

  // Persist score to leaderboard and localStorage
  const saveCurrentScore = () => {
    if (!username.trim()) return;

    const newEntry: LeaderboardEntry = {
      name: username,
      score: score,
      timestamp: Date.now(),
    };

    setLeaderboard(prev => {
      // Find if this user already has a record and update it, or add new
      const existingIdx = prev.findIndex(e => e.name.toLowerCase() === username.toLowerCase());
      let updatedList;
      
      if (existingIdx > -1) {
        updatedList = [...prev];
        // Only update if current score is higher
        if (score > updatedList[existingIdx].score) {
          updatedList[existingIdx] = { ...updatedList[existingIdx], score: score, timestamp: Date.now() };
        }
      } else {
        updatedList = [...prev, newEntry];
      }

      const sorted = updatedList.sort((a, b) => b.score - a.score);
      localStorage.setItem('poms_work_leaderboard', JSON.stringify(sorted));
      return sorted;
    });
  };

  // Auto-save score periodically when logged in
  useEffect(() => {
    if (isLoggedIn && score > 0) {
      const timeout = setTimeout(() => {
        saveCurrentScore();
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [score, isLoggedIn]);

  return (
    <aside className="w-64 bg-[#191B1D] hidden lg:flex flex-col sticky top-14 h-[calc(100vh-3.5rem)] border-r border-[#393B3D]">
      <div className="p-6 flex-shrink-0">
        {!isLoggedIn ? (
          <div className="space-y-6">
            <h2 className="text-lg font-bold text-white border-b border-[#393B3D] pb-2 uppercase tracking-tighter italic">Player Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-[10px] text-gray-400 block mb-1 uppercase font-bold tracking-wider">Display Name</label>
                <input 
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#232527] border border-[#393B3D] rounded px-3 py-2 text-sm focus:outline-none focus:border-white transition-colors text-white"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black font-bold py-2 rounded text-sm hover:bg-gray-200 transition-colors uppercase tracking-tight"
              >
                Join Server
              </button>
            </form>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center p-4 bg-[#232527] rounded-lg border border-[#393B3D]">
              <div className="w-16 h-16 bg-gray-600 rounded-full mx-auto mb-3 flex items-center justify-center border-2 border-white/20 overflow-hidden">
                 <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`} alt="Avatar" />
              </div>
              <h3 className="text-white font-bold truncate">{username}</h3>
              <div className="flex items-center justify-center gap-1 mt-1">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <p className="text-[10px] text-gray-400 uppercase font-bold">In-Game</p>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Live Progress</h2>
              <div className="bg-[#232527] p-3 rounded border border-[#393B3D] flex justify-between items-center">
                <span className="text-sm">Points</span>
                <span className="text-green-400 font-bold text-lg">{score.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => setScore(prev => prev + 250)}
                className="w-full text-[10px] py-1.5 bg-blue-600 hover:bg-blue-500 rounded transition-colors text-white font-bold uppercase shadow-lg shadow-blue-900/20"
              >
                Gain +250 XP
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Real Leaderboard Section */}
      <div className="flex-1 flex flex-col min-h-0 border-t border-[#393B3D] bg-[#1d1f21]">
        <div className="p-4 pb-2 flex items-center justify-between">
          <h2 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Server History
          </h2>
          <span className="text-[9px] text-gray-600 font-mono">LIVE DATA</span>
        </div>
        
        <div className="flex-1 overflow-y-auto custom-scrollbar px-2 pb-4">
          {leaderboard.length === 0 ? (
            <div className="p-8 text-center text-gray-600">
              <p className="text-xs italic">No player records yet.</p>
              <p className="text-[10px] mt-1">Be the first to join!</p>
            </div>
          ) : (
            <table className="w-full text-left">
              <thead className="sticky top-0 bg-[#1d1f21] z-10">
                <tr className="text-[10px] text-gray-500 font-bold uppercase border-b border-[#393B3D]">
                  <th className="py-2 pl-2 w-8">#</th>
                  <th className="py-2">User</th>
                  <th className="py-2 pr-2 text-right">Highscore</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#232527]">
                {leaderboard.map((player, idx) => (
                  <tr 
                    key={`${player.name}-${player.timestamp}`} 
                    className={`text-xs hover:bg-white/5 transition-colors ${isLoggedIn && player.name === username ? 'bg-blue-900/20 text-blue-100' : 'text-gray-300'}`}
                  >
                    <td className="py-2.5 pl-2 font-bold text-gray-500">{idx + 1}</td>
                    <td className="py-2.5 font-medium truncate max-w-[100px]">
                      {player.name}
                      {isLoggedIn && player.name === username && <span className="ml-1 text-[9px] bg-blue-500 text-white px-1 rounded">YOU</span>}
                    </td>
                    <td className="py-2.5 pr-2 text-right font-mono text-gray-400">
                      {player.score.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        
        {isLoggedIn && (
          <div className="p-4 border-t border-[#393B3D] bg-[#191B1D]">
            <button 
              onClick={() => {
                saveCurrentScore();
                setIsLoggedIn(false);
              }}
              className="w-full text-[10px] text-red-500 hover:text-red-400 font-bold uppercase text-center"
            >
              Save & Exit
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
