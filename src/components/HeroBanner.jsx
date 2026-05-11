import React from 'react';
import { Button } from './Button';
import { TestimonialCard } from './TestimonialCard';
import mainPlantImage from '../assets/HomePlant.jpg';
import PLANT1 from '../assets/plant1.png';

export const HeroBanner = () => {
  return (
    <>
        <div className="relative w-full pt-8 min-h-screen overflow-hidden md:overflow-visible">
      <img
        src={mainPlantImage}
        alt="Background"
        className="absolute top-[-90px] md:top-[-125px] left-1/2 -translate-x-1/2 w-[200%] md:w-[1400px] max-w-none h-auto md:h-[2000px] object-cover opacity-100 z-0 pointer-events-none"
      />

      <div className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pt-8 md:pt-16 pb-16">

      
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 lg:gap-0">

       
          <div className="max-w-xl text-center lg:text-left mt-0 lg:mt-12">
            <div className="flex flex-col gap-6 max-w-xl mx-auto lg:mx-0">
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] opacity-70 text-white">
                Earth's Exhale
              </h1>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md mx-auto opacity-70 lg:mx-0">
                "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-4">
                <Button variant="outline" className="!px-8 !py-3 rounded-md bg-black/20 backdrop-blur-sm border-white/50">Buy Now</Button>
                <button className="flex items-center gap-3 text-sm text-gray-200 hover:text-white">
                  <span className="w-10 h-10 rounded-full border border-white/50 flex items-center justify-center bg-black/20 backdrop-blur-sm hover:bg-white/10">
                    <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                  </span>
                  Live Demo...
                </button>
              </div>
            </div>
          </div>

     
          <div className="relative w-full max-w-[280px] md:max-w-[400px] flex justify-center  lg:mt-0">

         
            <div className="relative z-20 w-full  max-sm:hidden flex justify-center">
              <img
                src={PLANT1}
                alt="Indoor Plant"
                className="w-[200px] md:w-[280px] h-auto -mt-10"
              />
            </div>


            
          </div>


             
        </div>


         <div className="absolute  z-3 max-sm:hidden  max-md:hidden">
              <TestimonialCard />
            </div>
      </div>
    </div>
    </>
  );
};
