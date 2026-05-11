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

function App() {
  return (
    <div className="min-h-screen relative font-sans text-white overflow-hidden bg-[#08100a]">
      <div className="bg-crosshair opacity-30"></div>
      
      <div className="relative z-10 max-w-[1440px] mx-auto">
        <Navbar />
        
        <main>
          <HeroBanner />
          
          <div className="mt-32 px-4 md:px-8">
            <SectionTitle className="bg-black"> Our Trendy plants </SectionTitle>
            
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
                imageUrl="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400&q=80"
              />
              <TopSellingPlantCard
                title="Plantain Lilies"
                price="Rs. 380/-"
                description="Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,"
                imageUrl="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&q=80"
              />
              <TopSellingPlantCard
                title="Cactus"
                price="Rs. 259/-"
                description="It is known for their ability to thrive in arid environments"
                imageUrl="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80"
                highlight={true}
              />
              <TopSellingPlantCard
                title="Swiss cheese Plant"
                price="Rs. 400/-"
                description="It is a popular tropical houseplant known for its distinctive, perforated leaves"
                imageUrl="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80"
              />
              <TopSellingPlantCard
                title="Sansevieria plant"
                price="Rs. 450/-"
                description="It is a popular indoor plant admired for its striking appearance and low-maintenance nature."
                imageUrl="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&q=80"
              />
              <TopSellingPlantCard
                title="Agave plant"
                price="Rs. 359/-"
                description="The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms."
                imageUrl="https://images.unsplash.com/photo-1520302630591-fd1c66edc19d?w=400&q=80"
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
                className="md:-mt-8"
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
  );
}

export default App;
