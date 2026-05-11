import React from 'react';
import { Button } from './Button';

export const BestO2Section= () => {
  return (
    <div className="glass-panel rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-16 items-center max-w-5xl mx-auto mt-16 relative overflow-hidden group">
      <div className="w-full md:w-[45%] flex justify-center relative">
        <div className="absolute inset-0 bg-green-500/10 blur-[80px] rounded-full"></div>
        <img src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80" alt="O2 Plant" className="w-[90%] max-w-[350px] object-contain relative z-10 drop-shadow-2xl hover:scale-105 transition-transform duration-700" />
      </div>
      <div className="w-full md:w-[55%] flex flex-col gap-6 text-left">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-white max-w-sm">We Have Small And Best O2 Plants Collection's</h3>
        
        <div className="flex flex-col gap-4">
          <p className="text-xs text-gray-400 leading-relaxed">
            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
          </p>
          <p className="text-xs text-gray-400 leading-relaxed">
            Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.
          </p>
        </div>
        
        <div className="flex items-center justify-between mt-4">
          <Button variant="outline" size="sm">Explore</Button>
          <div className="flex items-center gap-3 text-xs text-gray-400 font-mono tracking-widest">
            <button className="hover:text-white transition-colors">&lt;</button>
            <span>01/04</span>
            <button className="hover:text-white transition-colors">&gt;</button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8 gap-2">
          <div className="w-6 h-1 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-[2px]"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-[2px]"></div>
        </div>
      </div>
    </div>
  );
};
