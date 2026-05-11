import React from "react";
import HERO from "../assets/HomePlant.jpg";

const HeroSection = () => {
  return (
     <>
        <section className="relative min-h-screen overflow-hidden text-white">


        <div className="absolute inset-0">
        <img
          src={HERO}
          alt=""
          className="w-full h-full object-cover opacity-100"
        />
      </div>

        <div className="flex items-start justify-between">

          {/* Left */}
          <div className="max-w-[620px]">
            <h1 className="text-[90px] leading-[90%] font-black">
              Earth’s Exhale
            </h1>

            <p className="mt-5 text-white/70 max-w-[520px] text-lg">
              “Earth Exhale” symbolizes the purity and vitality of nature,
              bringing freshness and calm into your living space.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-8">

              <button className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition">
                Buy Now
              </button>

              <button className="flex items-center gap-3 text-white/80">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  ▶
                </div>

                Live Demo
              </button>

            </div>
          </div>

          {/* Right Card */}
          <div className="w-[320px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <img
              src={HERO}
              alt=""
              className="w-[220px] mx-auto -mt-20"
            />

            <p className="text-white/60 text-sm mt-2">
              Indoor Plant
            </p>

            <h2 className="text-4xl mt-1">
              Aglaonema plant
            </h2>

            <button className="mt-6 px-6 py-3 border border-white rounded-xl">
              Buy Now
            </button>
          </div>
        </div>


        </section>
     
     </>
  );
};

export default HeroSection;



 <section className="relative min-h-screen overflow-hidden text-white">

   

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 pt-36">

        {/* Top Content */}
        <div className="flex items-start justify-between">

          {/* Left */}
          <div className="max-w-[620px]">

            <h1 className="text-[90px] leading-[90%] font-black">
              Earth’s Exhale
            </h1>

            <p className="mt-5 text-white/70 max-w-[520px] text-lg">
              “Earth Exhale” symbolizes the purity and vitality of nature,
              bringing freshness and calm into your living space.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-5 mt-8">

              <button className="px-8 py-4 border border-white rounded-xl hover:bg-white hover:text-black transition">
                Buy Now
              </button>

              <button className="flex items-center gap-3 text-white/80">
                <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                  ▶
                </div>

                Live Demo
              </button>

            </div>
          </div>

          {/* Right Card */}
          <div className="w-[320px] rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">

            <img
              src={HERO}
              alt=""
              className="w-[220px] mx-auto -mt-20"
            />

            <p className="text-white/60 text-sm mt-2">
              Indoor Plant
            </p>

            <h2 className="text-4xl mt-1">
              Aglaonema plant
            </h2>

            <button className="mt-6 px-6 py-3 border border-white rounded-xl">
              Buy Now
            </button>
          </div>
        </div>

        {/* Trending */}
        <div className="mt-28">

          <h2 className="text-5xl font-bold text-center mb-14">
            Our Trendy plants
          </h2>

          {/* Card */}
          <div className="relative rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-xl p-12 flex items-center justify-between overflow-hidden">

            {/* Plant */}
            <img
              src={HERO}
              alt=""
              className="w-[320px] -mt-28"
            />

            {/* Content */}
            <div className="max-w-[420px]">

              <h3 className="text-4xl font-bold">
                For Your Desk Decorations
              </h3>

              <p className="mt-5 text-white/70">
                Beautiful indoor plants that improve your mood and
                workspace atmosphere.
              </p>

              <h4 className="text-5xl font-bold mt-6">
                Rs. 599/-
              </h4>

              <div className="flex items-center gap-4 mt-7">

                <button className="px-8 py-3 border border-white rounded-xl">
                  Explore
                </button>

                <button className="w-12 h-12 border border-white rounded-xl">
                  🛍
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>