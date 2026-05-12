import React from 'react';
import { Button } from './Button';

export const PlantCard= ({ title, price, description, imageUrl, orientation = 'left', imageClassName = '' }) => {
  return (
     <div className={` glass-panel rounded-[50px] md:rounded-[80px] px-6 py-2 sm:px-8 sm:py-3 md:px-12 md:py-3 flex flex-col md:flex-row gap-4 md:gap-8 items-center ${orientation === 'right' ? 'md:flex-row-reverse' : ''} max-w-6xl w-full mx-auto   relative overflow-visible`}>

      <div className="w-full md:w-1/2 flex justify-center relative">
        <img
          src={imageUrl}
          alt={title}
          className={`w-[110%] md:w-[120%] max-w-[350px] md:max-w-[450px] h-auto object-contain relative z-10 drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)] -mt-20 md:-mt-36 -mb-8 md:-mb-16 -ml-[5%] md:-ml-[10%] ${imageClassName}`}
        />
      </div>

      <div className="w-full  md:w-1/2 flex flex-col gap-1 text-center md:text-left items-center md:items-start pl-0 md:pl-8 py-0">
        <h3 className="text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight leading-tight">{title}</h3>
        {description && <p className="text-xs sm:text-sm text-gray-200 leading-relaxed max-w-[450px] font-medium">{description}</p>}
        <p className="text-2xl sm:text-3xl md:text-[36px] font-bold mt-1">{price}</p>

        <div className="flex items-center justify-center md:justify-start gap-4 mt-1 md:mt-2">
          <Button variant="outline" className="text-sm md:text-base !px-8 !py-2.5 !rounded-xl bg-black/20 hover:bg-white/10 border-white/50 transition-colors">
            Explore
          </Button>
          <button className="p-2.5 rounded-xl border border-white/50 text-white bg-black/20 hover:bg-white/10 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>

    </div>
  );
};
