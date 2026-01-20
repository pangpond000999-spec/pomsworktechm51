
import React, { useState } from 'react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onUpdate: (updatedGame: Game) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState(game);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate(editForm);
    setIsEditing(false);
  };

  return (
    <div className="relative group">
      <div className="flex flex-col gap-3 rounded-xl overflow-hidden bg-transparent hover:bg-[#232527] p-3 transition-all duration-300 h-full transform hover:-translate-y-1">
        <a 
          href={game.link || "#"}
          className="block"
        >
          <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-[#393B3D] group-hover:border-blue-500/50 shadow-lg">
            {game.thumbnail ? (
               <img 
               src={game.thumbnail} 
               alt={game.title} 
               className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
             />
            ) : (
              <div className="w-full h-full bg-[#232527] flex items-center justify-center text-gray-600 italic text-xs font-['Mali']">
                No Image
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        </a>
        
        <div className="flex flex-col gap-1 flex-1 items-center">
          <div className="flex justify-center items-start gap-2 w-full relative">
            <h3 className="text-sm md:text-base font-bold text-gray-200 group-hover:text-blue-400 transition-colors leading-snug break-words text-center font-['Mali'] tracking-wide">
              {game.title || 'Untitled Game'}
            </h3>
            <button 
              onClick={() => setIsEditing(true)}
              className="absolute right-0 top-0 p-1 opacity-0 group-hover:opacity-100 hover:bg-[#393B3D] rounded-full transition-all"
              title="Edit Slot"
            >
              <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="absolute inset-0 z-20 bg-[#191B1D]/95 backdrop-blur-sm border border-white/20 rounded-xl p-3 shadow-2xl flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2 text-xs font-['Mali']">
            <textarea 
              className="bg-[#232527] border border-[#393B3D] px-2 py-2 rounded-lg outline-none text-white w-full h-20 resize-none focus:border-blue-500 transition-colors"
              placeholder="Game Title"
              value={editForm.title}
              onChange={e => setEditForm({...editForm, title: e.target.value})}
            />
            <input 
              className="bg-[#232527] border border-[#393B3D] px-2 py-2 rounded-lg outline-none text-white focus:border-blue-500 transition-colors"
              placeholder="Image URL"
              value={editForm.thumbnail}
              onChange={e => setEditForm({...editForm, thumbnail: e.target.value})}
            />
            <input 
              className="bg-[#232527] border border-[#393B3D] px-2 py-2 rounded-lg outline-none text-white focus:border-blue-500 transition-colors"
              placeholder="Game Link"
              value={editForm.link}
              onChange={e => setEditForm({...editForm, link: e.target.value})}
            />
            <div className="flex gap-2 mt-1">
              <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white flex-1 py-1.5 rounded-lg font-bold transition-colors">Save</button>
              <button type="button" onClick={() => setIsEditing(false)} className="bg-red-500/20 hover:bg-red-500/30 text-red-400 flex-1 py-1.5 rounded-lg transition-colors">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default GameCard;
