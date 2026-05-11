import React from 'react';

export const TopSellingPlantCard=({ title, price, description, imageUrl, highlight }) => {
  return (
    <div className={`glass-panel rounded-3xl p-6 pt-16 relative flex flex-col transition-all duration-300 `}>
      <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-40 h-40 flex items-center justify-center">
        <div className="absolute inset-0 bg-green-500/10 blur-[30px] rounded-full"></div>
        <img src={imageUrl} alt={title} className="w-full h-full object-contain drop-shadow-2xl z-10 hover:scale-110 transition-transform duration-500" />
      </div>
      
      <div className="mt-12 flex-grow">
        <h3 className="text-lg font-medium text-white mb-2">{title}</h3>
        <p className="text-[10px] text-gray-400 leading-relaxed mb-6">{description}</p>
      </div>
      
      <div className="flex items-center justify-between mt-auto">
        <span className="text-lg font-medium text-white">{price}</span>
        <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors text-white">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
        </button>
      </div>
    </div>
  );
};
