"use client";
import React from "react";
import Contact from "../Components/Contact";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";
import AnimatedItem from "../Animate";


const About = () => {
  useEffect(() => {
    // Check if the browser supports scrollRestoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Define a handler to scroll to the top on page load
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    // Listen for the load event
    window.addEventListener('load', handleLoad);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  return (
    <div className="overflow-hidden">
      <Navbar />

      <div className="w-full flex justify-center mt-32 flex-col lg:flex-row lg:justify-between lg:px-64 gap-12 lg:gap-0">
        <div className="flex flex-col gap-8">
            <div className="flex text-4xl justify-center scale-90 sm:scale-100 text-center font-extrabold">Why Choose Prodigy?</div>

            <div className=" flex items-center justify-center flex-row">
               <div className="text-[rgba(249,227,98,1)] text-5xl lg:text-6xl flex items-center font-extrabold w-16 h-16 mr-8">I</div>
               <div className="w-44 md:w-56 flex items-center font-bold text-xl">Innovative Designs</div>
            </div>
            <div className=" flex items-center justify-center flex-row">
              <div className="text-[rgba(249,227,98,1)] text-5xl lg:text-6xl flex items-center font-extrabold w-16 h-16 mr-8">C</div>
              <div className="w-44 md:w-56 flex items-center font-bold text-xl">Customized Solutions</div>
            </div>
            <div className=" flex items-center justify-center flex-row">
              <div className="text-[rgba(249,227,98,1)] text-5xl lg:text-6xl flex items-center font-extrabold w-16 h-16 mr-8">T</div>
              <div className="w-44 md:w-56 flex items-center font-bold text-xl">Timely Delivery</div>
           </div>
            <div className=" flex items-center justify-center flex-row">
              <div className="text-[rgba(249,227,98,1)] text-5xl lg:text-6xl flex items-center font-extrabold w-16 h-16 mr-8">C</div>
              <div className="w-44 md:w-56 flex items-center font-bold text-xl">Colloborative Process</div>
            </div>
        </div>
        <div className="flex items-center justify-center"><img src="abtimg.png" className="w-[80vw] max-w-[300px] md:w-[45vw] md:max-w-[1000px] lg:w-[30vw] h-auto flex items-center object-contain" /></div>
      </div>

      <AnimatedItem>
        <div className="flex justify-center w-full mb-8 sm:mb-12 md:mb-14 mt-4 sm:mt-32"><Contact /></div>
      </AnimatedItem>

      <Footer />
    </div>
  );
};

export default About;
