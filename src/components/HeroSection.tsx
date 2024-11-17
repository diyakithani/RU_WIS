import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-purple-100 to-pink-200 min-h-screen py-10 px-4">

      <div className="text-center mt-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
          <span className="bg-gradient-to-r from-pink-300 to-purple-500 text-transparent bg-clip-text">
            WELCOME TO THE RUC{" "}
          </span>
          <span className="bg-gradient-to-r from-purple-500 to-pink-700 text-transparent bg-clip-text">
            WOMEN IN STEM WEBSITE!
          </span>
        </h1>
      </div>

      <p className="mt-8 text-lg sm:text-xl text-center max-w-3xl text-gray-700 px-4">
        We, at RUC, aspire to empower women and nonbinary in stem!
      </p>

      <div className="flex justify-center mt-10">
        <a
          href="#"
          className="bg-gradient-to-r from-rose-400 to-purple-500 py-3 px-6 mx-3 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          SIGN UP FOR OUR NEWSLETTER!
        </a>
      </div>

      <div className="flex mt-10 justify-center w-full">
        <img
          src="/videos/girlinstem.gif"
          alt="Girl in STEM GIF"
          className="rounded-lg w-11/12 md:w-2/3 lg:w-1/2 border border-purple-400 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
        />


      </div>
    </div>
  );
};

export default HeroSection;
