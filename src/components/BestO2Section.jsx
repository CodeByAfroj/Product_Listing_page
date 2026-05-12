import React from 'react';
import { Button } from './Button';
import LAST from "../assets/topSelling/last.png";

export const BestO2Section= () => {
  return (
    <div className="glass-panel   h-90 rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center max-w-5xl mx-auto mt-16 relative group">
      <div className="w-full -ml-30 -mt-30  md:w-[45%] flex justify-center relative">
        <div className="inset-0 bg-green-500/10 blur-[80px] rounded-full"></div>
        <img src={LAST} className="w-[90%] max-w-[550px] object-contain relative z-10 drop-shadow-2xl  duration-700" />
      </div>
      <div className="w-full mt-10 md:w-[55%]  flex flex-col gap-6 text-left">
        <h3 className="text-xl md:text-2xl font-semibold tracking-tight opacity-75   max-w-sm">We Have Small And Best O2 Plants Collection's</h3>
        
        <div className="flex flex-col gap-1  ">
          <p className="text-sm -mt-2 mb-5 leading-relaxed opacity-90">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="text-sm leading-relaxed opacity-90">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
        </div>
        
        <div className="flex items-center justify-between -mt-2 mb-7 opacity-75">
          <Button variant="outline" className='rounded-md' size="sm">Explore</Button>
          <div className="flex items-center gap-3 text-xs text-gray-400 font-mono tracking-widest">
            <button className="hover:text-white transition-colors">&lt;</button>
            <span>01/04</span>
            <button className="hover:text-white transition-colors">&gt;</button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
