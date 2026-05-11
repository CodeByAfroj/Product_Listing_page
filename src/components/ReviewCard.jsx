import React from 'react';

export const ReviewCard= ({ name, avatar, review, className = '' }) => {
  return (
    <div className={`glass-panel rounded-3xl p-6 flex flex-col gap-4 ${className}`}>
      <div className="flex items-center gap-3">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full border-2 border-white/10 object-cover" />
        <div>
          <h4 className="text-sm font-medium text-white">{name}</h4>
          <div className="flex text-yellow-500 text-[10px] gap-[2px]">
            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
          </div>
        </div>
      </div>
      <p className="text-[11px] text-gray-400 leading-relaxed">{review}</p>
    </div>
  );
};
