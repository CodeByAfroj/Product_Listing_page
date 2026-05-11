import React from 'react';

export const Footer= () => {
  return (
    <footer className="mt-40 border-t border-white/10 pt-16 pb-8 px-8 max-w-7xl mx-auto w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-tr from-green-500 to-yellow-400 rounded-sm rounded-tr-xl flex items-center justify-center">
              <span className="text-white text-[10px]">🌿</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">FloraVision.</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">
            "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
          </p>
          <div className="flex gap-6 mt-2 text-xs font-bold tracking-wider text-white">
            <a href="#" className="hover:text-green-400 transition-colors">FB</a>
            <a href="#" className="hover:text-green-400 transition-colors">TW</a>
            <a href="#" className="hover:text-green-400 transition-colors">LI</a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white mb-2">Quick Link's</h4>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600">Home</a>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600">Type's Of plant's</a>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600">Contact</a>
          <a href="#" className="text-xs text-gray-400 hover:text-white transition-colors underline underline-offset-4 decoration-gray-600">Privacy</a>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-sm font-semibold text-white mb-2">For Every Update.</h4>
          <div className="flex mt-2 bg-transparent border-b border-gray-600 pb-2 items-end">
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="bg-transparent text-xs text-white placeholder-gray-500 outline-none w-full"
            />
            <button className="text-[10px] font-bold tracking-wider bg-white text-black px-4 py-1.5 rounded-sm hover:bg-gray-200 transition-colors ml-2">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end pt-8">
        <p className="text-[10px] text-gray-500">FloraVision © all right reserve</p>
      </div>
    </footer>
  );
};
