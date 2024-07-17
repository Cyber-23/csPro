import React from 'react';
import Banner from './Banner';
import Heros from './Heros';
import MegaNavbar from './MegaNavbar';
// import './App.css'; // Import the custom CSS file if needed

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video */}
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src="/heros.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 flex flex-col  h-full w-full text-white">
       <Banner/>
       <MegaNavbar/>

        <Heros/>
      </div>
    </div>
  );
};

export default HeroVideo;
