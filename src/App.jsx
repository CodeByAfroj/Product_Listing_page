// import React from 'react';
// import HeroSection from './pages/HeroSection';
// import Navbar from './pages/Navbar';
// // import { SectionTitle } from './components/SectionTitle';
// // import { PlantCard } from './components/PlantCard';
// // import { Footer } from './components/Footer';

// function App() {
//   return (
//     <div className="overflow-hidden ">
//       {/* Background crosshair effect */}
//       <div className=" opacity-30"></div>
      
//       {/* Main Content */}
//       <div className="">
//        <Navbar/> 
        
//         <main>
//            <HeroSection/>
//         </main>
        
      
//       </div>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import Navbar from './pages/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { SectionTitle } from './components/SectionTitle';
import { PlantCard } from './components/PlantCard';
import { TopSellingPlantCard } from './components/TopSellingPlantCard';
import { ReviewCard } from './components/ReviewCard';
import { BestO2Section } from './components/BestO2Section';
import { Footer } from './components/Footer';

import DESK1 from "./assets/desk.png";
import DESK2 from "./assets/desk2.png";

import TOP1 from "./assets/topSelling/first.png";
import TOP2 from "./assets/topSelling/second.png";
import TOP3 from "./assets/topSelling/third.png";
import TOP4 from "./assets/topSelling/fourth.png";
import TOP5 from "./assets/topSelling/fifth.png";
import TOP6 from "./assets/topSelling/sixth.png";


function App() {
  return (
    <>
  
    <div className="min-h-screen relative font-sans text-white overflow-hidden bg-[#1B2316]">
      <div className=" opacity-30"></div>
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <Navbar />
        
        <main>
          <HeroBanner />
          
          <div className=" min-md:mt-32 px-4 md:px-8">
            <SectionTitle className=""> Our Trendy plants </SectionTitle>
            
            <div className="mt-16 flex flex-col gap-24">
              <PlantCard 
                title="For Your Desks Decorations"
                price="Rs. 599/-"
                description="I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!"
                imageUrl={DESK1}
                orientation="left"
              />
              
              <PlantCard 
                title="For Your Desks Decorations"
                price="Rs. 399/-"
                description="The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming"
                imageUrl={DESK2}
                orientation="right"
                imageClassName="max-w-[200px]"
              />
            </div>
          </div>

          <div className="mt-60 px-4 md:px-8">
            <SectionTitle>Our Top Selling Plants</SectionTitle>
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-24 max-w-5xl mx-auto">
              <TopSellingPlantCard
                title="Aglaonema plant"
                price="Rs. 300/-"
                description="The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care"
                imageUrl={TOP1}
              />
              <TopSellingPlantCard
                title="Plantain Lilies"
                price="Rs. 380/-"
                description="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,"
                imageUrl={TOP2} 
              />
              <TopSellingPlantCard
                title="Cactus"
                price="Rs. 259/-"
                description="It is known for their ability to thrive in arid environments"
                imageUrl={TOP3} 
                highlight={true}
              />
              <TopSellingPlantCard
                title="Swiss cheese Plant"
                price="Rs. 400/-"
                description="It is a popular tropical houseplant known for its distinctive, perforated leaves"
                imageUrl={TOP4} 
              />
              <TopSellingPlantCard
                title="Sansevieria plant"
                price="Rs. 450/-"
                description="It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
                imageUrl={TOP5}
              />
              <TopSellingPlantCard
                title="Agave plant"
                price="Rs. 359/-"
                description="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
                imageUrl={TOP6}
                highlight={true}
              />
            </div>
          </div>

          <div className="mt-40 px-4 md:px-8">
            <SectionTitle>Customer Review</SectionTitle>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <ReviewCard
                name="Shelly"
                avatar="https://i.pravatar.cc/100?img=4"
                review="Just got my hands on some absolutely awesome plants, and I couldn't be happier!"
              />
              <ReviewCard
                name="Lula Rolfson"
                avatar="https://i.pravatar.cc/100?img=5"
                review="Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home."
                className=""
              />
              <ReviewCard
                name="Carol Huels"
                avatar="https://i.pravatar.cc/100?img=6"
                review="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"
              />
            </div>
          </div>

          <div className="mt-40 px-4 md:px-8">
            <SectionTitle>Our Best o2</SectionTitle>
            <BestO2Section />
          </div>

        </main>
        
        <Footer />
      </div>
    </div>
    
    </>
  );
}

export default App;
