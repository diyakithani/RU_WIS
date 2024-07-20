import React from "react";
import vid1 from "../assets/video1.png"

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Destination For{" "}
        <span className="bg-gradient-to-r from-purple-300 to-purple-700 text-transparent bg-clip-text">
          All Electrical Services. </span>
      </h1>
      <p className="mt-10 text-xl text-center "> Quality Work, Outstanding Service and a Solution to all your Electrical Problems at an Affordable Price!</p>




    </div >
  );
};

export default HeroSection;
