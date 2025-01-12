"use client"
import React, { useState } from "react";
import axios from "axios"

const HeroSection = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSignUp = async () => {
    if (!email || !email.includes("@")) {
      setFeedback("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("/api/email", {
        email,
      });
      setFeedback("Thanks for signing up! Check your inbox.");
      setModalOpen(false); // Only close modal on success
    } catch (error: any) {
      setFeedback("Failed to send email. Please try again.");
      console.error("Error sending email:", error.response?.data || error.message);
    }
  };

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

        <button
          onClick={() => setModalOpen(true)}
          className="bg-gradient-to-r from-rose-400 to-purple-500 py-3 px-6 mx-3 rounded-full text-white font-semibold text-lg hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          SIGN UP FOR OUR NEWSLETTER!
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-pink rounded-lg shadow-lg p-6 w-11/12 max-w-md">
            <h2 className="text-2xl font-bold text-center mb-4">
              Sign Up for Our Newsletter
            </h2>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 mr-2 bg-black rounded-lg hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSignUp}
                className="px-4 py-2 mr-2 bg-black rounded-lg hover:bg-gray-300 transition">
                Submit
              </button>

            </div>
          </div>
        </div>
      )
      }

      <div className="flex mt-10 justify-center w-full">
        <img
          src="/videos/girlinstem.gif"
          alt="Girl in STEM GIF"
          className="rounded-lg w-11/12 md:w-2/3 lg:w-1/2 border border-purple-400 shadow-lg transition-shadow duration-300 hover:shadow-2xl"
        />


      </div>
    </div >
  );
};

export default HeroSection;
