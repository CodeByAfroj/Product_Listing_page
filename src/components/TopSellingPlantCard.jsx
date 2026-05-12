import React from 'react';

export const TopSellingPlantCard = ({ title, price, description, imageUrl }) => {


   return (
    <div className="relative font-[inter] w-[310px] h-[380px] max-sm:mt-[20px] min-md:mt-[120px] flex flex-col justify-end group drop-shadow-2xl">
      <div 
        className="absolute inset-0 bg-[#FFFFFF0D] border border-white/20  rounded-[32px] overflow-hidden"
        style={{
          clipPath: "path('M32 0 L75 0 C110 0, 110 40, 150 40 C190 40, 190 0, 225 0 L268 0 A32 32 0 0 1 300 32 L300 328 A32 32 0 0 1 268 360 L32 360 A32 32 0 0 1 0 328 L0 32 A32 32 0 0 1 32 0 Z')"
        }}
      >
        <div className="absolute top-0 left-0 w-full h-[60px] bg-gradient-to-b from-white/[0.06] to-transparent pointer-events-none" />
      </div>
      <div className="absolute -top-[130px] left-1/2 -translate-x-1/2 w-[240px] h-[300px] flex justify-center items-end drop-shadow-[0_20px_20px_rgba(0,0,0,0.6)]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-contain object-bottom relative z-10"
        />
      </div>

      <div className="relative  z-10 p-6 pb-8 flex flex-col gap-1 mt-2">
        <h3 className="text-white text-[26px] font-['Inter'] opacity-90 tracking-wide">
          {title}
        </h3>

        <p className="text-[#a0a8a0] text-md leading-relaxed max-w-[95%]">
          {description}
        </p>

        <div className="flex items-center justify-between mt-2">
          <span className="text-white text-[22px] font-medium tracking-wide">
            {price}
          </span>

          <button className="w-10 h-10 rounded-[14px] border border-[#a0a8a0]/40 flex items-center justify-center text-white/80 hover:bg-white/10 hover:text-white transition-all cursor-pointer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
