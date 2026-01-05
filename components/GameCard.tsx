
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
      <div className="flex flex-col gap-2 rounded-md overflow-hidden bg-transparent hover:bg-[#232527] p-2 transition-all duration-200 h-full">
        <a 
          href={game.link || "#"}
          className="block"
        >
          <div className="relative aspect-square rounded-lg overflow-hidden border border-[#393B3D] group-hover:border-white/20">
            {game.thumbnail ? (
               <img 
               src={game.thumbnail} 
               alt={game.title} 
               className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
             />
            ) : (
              <div className="w-full h-full bg-[#232527] flex items-center justify-center text-gray-600 italic text-xs">
                No Image
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        </a>
        
        <div className="flex flex-col gap-1 flex-1">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-sm font-semibold group-hover:text-blue-400 transition-colors flex-1 leading-tight break-words text-center">
              {game.title || 'Untitled Game'}
            </h3>
            <button 
              onClick={() => setIsEditing(true)}
              className="p-1 opacity-0 group-hover:opacity-100 hover:bg-[#393B3D] rounded transition-all flex-shrink-0"
              title="Edit Slot"
            >
              <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isEditing && (
        <div className="absolute inset-0 z-20 bg-[#191B1D] border border-white/20 rounded-md p-2 shadow-xl">
          <form onSubmit={handleSubmit} className="flex flex-col h-full gap-2 text-[10px]">
            <textarea 
              className="bg-[#232527] border border-[#393B3D] px-1 py-1 rounded outline-none text-white flex-1 resize-none"
              placeholder="Game Title"
              value={editForm.title}
              onChange={e => setEditForm({...editForm, title: e.target.value})}
            />
            <input 
              className="bg-[#232527] border border-[#393B3D] px-1 py-0.5 rounded outline-none text-white"
              placeholder="Image URL"
              value={editForm.thumbnail}
              onChange={e => setEditForm({...editForm, thumbnail: e.target.value})}
            />
            <input 
              className="bg-[#232527] border border-[#393B3D] px-1 py-0.5 rounded outline-none text-white"
              placeholder="Game Link"
              value={editForm.link}
              onChange={e => setEditForm({...editForm, link: e.target.value})}
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 text-white flex-1 py-1 rounded font-bold">Save</button>
              <button type="button" onClick={() => setIsEditing(false)} className="bg-red-600/20 text-red-500 flex-1 py-1 rounded">Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default GameCard;
