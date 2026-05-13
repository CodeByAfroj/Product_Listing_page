import React from 'react';

export const ReviewCard= ({ name, avatar, review, className = '' }) => {
  return (
  <div className={`relative w-[340px] h-[280px] bg-[#1B2316]  group ${className}`}>
      <svg 
        viewBox="0 0 340 280" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="absolute inset-0 z-0 w-full h-full drop-shadow-2xl"
      >
    
        <path 
          d="M1 80 
             C1 30, 30 1, 80 1 
             C150 1, 230 12, 300 3 
             C325 3, 339 15, 339 40 
             L339 240 
             C339 265, 320 279, 295 279 
             L45 279 
             C20 279, 1 265, 1 240 
             Z" 
          fill="#1e251e" 
          stroke="rgba(255, 255, 255, 0.1)" 
          strokeWidth="1"
        />
      
        <path 
          d="M1 80 C1 30, 30 1, 80 1 C150 1, 230 12, 300 3" 
          stroke="rgba(255, 255, 255, 0.15)" 
          strokeWidth="2.5" 
          className="blur-[2px]"
          fill="none"
        />
      </svg>

  
      <div className="relative z-10 p-8 pt-12  flex flex-col h-full">
        <div className="flex items-center gap-5  mb-8">
          <div className="relative shrink-0 ">
            <img 
              src={avatar} 
              alt={name} 
              className="w-[64px] h-[64px] rounded-full object-cover shadow-lg relative z-10" 
            />
          </div>
          
          <div>
            <h4 className="text-[26px] font-bold text-white tracking-wide">{name}</h4>
            <div className="flex text-[#facc15] text-[16px] gap-1 mt-1">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="relative inline-block overflow-hidden w-[0.5em] -mr-[0.7em]">★</span>
              <span className="opacity-30">★</span>
            </div>
          </div>
        </div>

        <p className="text-[#a0a8a0] text-[16.5px] leading-relaxed tracking-wide  pr-4 line-clamp-4">
          {review}
        </p>
      </div>
    </div>
  );
};
