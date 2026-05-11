import React from 'react';
import { Button } from './Button';

export const PlantCard= ({ title, price, description, imageUrl, orientation = 'left', imageClassName = '' }) => {
  return (
    <div className={`glass-panel rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center ${orientation === 'right' ? 'md:flex-row-reverse' : ''} max-w-4xl mx-auto relative overflow-hidden group`}>
      <div className="w-full absolute -top-16  md:w-1/2 flex justify-center relative">
         <div className="absolute inset-0 bg-green-500/10 blur-[30px] rounded-full"></div>
        <img src={imageUrl} alt={title} className="w-full h-full object-contain drop-shadow-2xl z-10 hover:scale-110 transition-transform duration-500" />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-4 text-left">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h3>
        {description && <p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-md">{description}</p>}
        <p className="text-xl md:text-2xl font-medium mt-2">{price}</p>
        <div className="flex items-center gap-4 mt-4">
          <Button variant="outline">Explore</Button>
          <Button variant="icon">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
          </Button>
        </div>
      </div>
    </div>
  );
};
