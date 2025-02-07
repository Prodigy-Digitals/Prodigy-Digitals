"use client";
import React from 'react';

const Portfolio = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-8 sm:my-12 lg:my-16">
      {/* Portfolio Heading */}
      <h2 className="text-[rgba(249,227,98,1)] text-2xl sm:text-3xl underline underline-offset-4 
        text-center mb-8 sm:mb-12 lg:mb-16">
        Portfolio
      </h2>

      {/* Content Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between 
        gap-8 sm:gap-12 lg:gap-16">
        
        {/* Left Section */}
        <div className="flex flex-col items-center lg:items-start 
          w-full lg:w-1/2 max-w-2xl">
          
          {/* Main Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
            font-semibold text-center lg:text-left 
            mb-4 sm:mb-6 lg:mb-8">
            Dive into Our{' '}
            <span className="text-[rgba(249,227,98,1)]">Captivating</span>{' '}
            Portfolio
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base lg:text-lg 
            text-center lg:text-left 
            max-w-md lg:max-w-xl
            mb-6 sm:mb-8 lg:mb-10">
            A Testament to Our Commitment to Excellence. Dive into a World of 
            Innovative Designs and Creative Solutions That Bring Your Vision to Life.
          </p>

          {/* Button */}
          <button className=" bg-[rgba(249,227,98,1)] 
             w-72
            rounded-full py-2 px-6
            text-[rgba(28,28,28,1)] font-extrabold
            transition-transform hover:animate-jiggle
            flex items-center justify-between">
            <span>Explore Our Portfolio</span>
            <img 
              src="./Arrow_Up_Left.png" 
              alt="Arrow Icon"
              className="h-9 transition-transform"
            />
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-full sm:w-4/5 lg:w-1/2 max-w-lg">
          <div className="relative rounded-lg
            overflow-hidden transition-transform 
            ">
            <img 
              src="./Portfolio.png" 
              alt="Portfolio Image" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
