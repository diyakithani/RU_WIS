import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Your Destination For{" "}
        <span className="bg-gradient-to-r from-purple-300 to-purple-700 text-transparent bg-clip-text">
          All Electrical Services. </span>
      </h1>
      <p className="mt-10 text-xl text-center "> Quality Work, Outstanding Service and a Solution to all your Electrical Problems at an Affordable Price!</p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Book Us Now!</a>
      </div>
      <div className="flex mt-5 justify-center">
        <video autoPlay loop muted className="rounded-lg w-1/3 border border-orange-700 shadow-orange-10 mx-2 my-2">
          <source src="/videos/video1.mp4" type="video/mp4"></source></video>
      </div>

    </div >

  );
};

export default HeroSection;
