import React from "react";
import { useState } from "react";
import PI from '../assets/plant.png';
import BAG from '../assets/bag.png';

import { Search, ShoppingBag, Triangle } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full absolute top-0 left-0 z-50 px-10 py-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <div className="flex items-center gap-2">
          <img src={PI} alt="Plant Icon" className="w-10 h-10" />
          <h1 className="text-white text-[28px] font-['Inter']  opacity-75 leading-[100%] tracking-[0%] font-black">
            FloraVision
          </h1>
        </div>

        {/* Center Menu */}
        <div className="font-['Indie_Flower'] hidden md:flex items-center gap-8 px-8 py-3 h-[35px]  opacity-75" >
          <a href="#" className="text-white  ">Home</a>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1 text-white"
            >
              Plants Types

              <Triangle
                size={12}
                strokeWidth={1.75}
                className={`fill-white transition ${open ? "rotate-0" : "rotate-180"}`}
              />
            </button>

            {open && (
              <div className="absolute top-8 left-0 bg-[#1B2316] rounded-lg p-2 min-w-[170px]">
                <a href="#" className="block px-3 py-2 text-white/75 hover:bg-white/10 rounded-md">
                  Indoor Plants
                </a>

                <a href="#" className="block px-3 py-2 text-white/75 hover:bg-white/10 rounded-md">
                  Outdoor Plants
                </a>
              </div>
            )}
          </div>
          <a href="#" className="text-white ">More</a>
          <a href="#" className="text-white ">Contact</a>
        </div>

        <div className="flex items-center gap-5">
          <button className="w-[26px] h-[26px] flex items-center opacity-75 justify-center">
            <Search size={20} strokeWidth={1.8} />
          </button>
          <button className="w-[26px] h-[26px] flex items-center  opacity-75 justify-center">
            <img src={BAG} alt="Bag Icon" className="w-full h-full" />
          </button>
          <button className="w-[26px] h-[26px] flex flex-col items-end opacity-100 justify-center gap-[5px]">
            <div className="w-5 h-[2px] bg-white rounded-full"></div>
            <div className="w-3 h-[2px] bg-white rounded-full"></div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;