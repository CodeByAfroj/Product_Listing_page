import React from 'react';
import PI from '../assets/plant.png';

export const Footer= () => {
  return (
    <footer className="mt-40 mx-auto border-t border-white/10 pt-16 pb-8 px-10 max-w-7xl w-full relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
                      <img src={PI} alt="Plant Icon" className="w-10 h-10" />
                      <h1 className="text-white text-[28px] font-['Inter']  opacity-75 leading-[100%] tracking-[0%] font-black">
                        FloraVision
                      </h1>
                    </div>
          </div>
          <p className=" max-sm:text-sm min-md:text-md  leading-relaxed max-w-xs">
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
          <div className="flex  items-center justify-between outline outline-1 rounded-md  gap-3">
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="bg-transparent text-xs text-white placeholder-gray-500 outline-none ml-2 w-full"
            />
            <button className="text-[13px] font-bold tracking-wider bg-white text-black px-4 py-1.5 rounded-sm ">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex justify-end">
        <p className="text-[15px]">FloraVision © all right reserve</p>
      </div>
    </footer>
  );
};
