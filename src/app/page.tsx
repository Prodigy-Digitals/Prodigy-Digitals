"use client";

import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Aboutus from "./Components/aboutus";
import Services from "./Components/Services";
import Services_cards from "./Components/Services_cards";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import AnimatedItem from "./Animate";
import Cursor from "./Components/Cursor";


const poppins = Poppins({
  subsets: ['latin'], // Use subsets for optimization
  weight: ['900'], // Specify weights you need
});
// const Services_cards = dynamic(() => import('./Components/Services_cards'), { ssr: false });
export default function Home() {
  const stringArray = ["VISION", "JOURNEY"];
  const words = ["CRAFT", "CREATE", "CODE"];
  const [activeWord, setActiveWord] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {
      if (fillProgress < 100) {
        setFillProgress((prev) => prev + 20); // Gradually fills each word
      } else {
        setFillProgress(0);
        setActiveWord((prev) => (prev + 1) % words.length); // Move to the next word
      }
    }, 300);

    return () => clearInterval(interval);
  }, [fillProgress]);
  useEffect(() => {
    console.log(document.title);
  }, []);

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
    <>
      
      <Navbar />
      
      <div className="mt-28 px-4 md:px-10">
        <div className="flex flex-col lg:flex-row justify-evenly items-center z-10 md:scale-[0.85] lg:scale-100">

          <div className="flex flex-col justify-center items-center text-center md:text-left">
            <div className="flex flex-col justify-start">
              <div className="font-extrabold text-[7vw] md:text-[7vw] lg:text-[3.5vw] flex-shrink-0">
                CRAFTING 
              </div>
              <div className="font-extrabold text-[7vw] md:text-[7vw] lg:text-[3.5vw] flex-shrink-0">
                DIGITAL EXPERIENCE,
              </div>


              <div className="font-extrabold text-[7vw] md:text-[7vw] lg:text-[3.5vw]">
                <a className="text-[rgba(249,227,98,1)]">EMPOWERING</a> YOUR
              </div>
              <div className="w-full text-center flex justify-center md:justify-normal">

                <div className="font-extrabold text-[7vw] md:text-[7vw] lg:text-[3.5vw] flex-shrink-0 border-r-4 animate-typing pr-1 max-w-max overflow-hidden">
                  <Typewriter
                    options={{
                      strings: ['JOURNEY', 'VISION'],
                      autoStart: true,
                      loop: true,
                      cursor: '',
                      deleteSpeed: 100
                    }}
                  />
                </div>
              </div>

            </div>
            <div className="text-[2vh] md:text-[2.5vh] mt-8 md:mt-16 w-full md:w-[65vw] font-sans lg:w-[50vw] xl:w-[35vw]">
              Fuel your digital success with our powerhouse team of mavens ready to take your business to the next level!
            </div>
          </div>

          <img
            src="./Group_626200.png"
            className="w-[75vw] md:w-[60vw] lg:w-[40vw] h-auto flex items-center object-contain"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 px-8 md:px-8 lg:px-32 lg:mt-32 mt-12 md:-mt-12">
        {words.map((word, index) => (
          <div
            key={index}
            className={`poppins.classname text-6xl lg:text-6xl font-extrabold relative transition-all duration-500`}
            style={{
              WebkitTextStroke: "2px white",
              color: index === activeWord ? "white" : "transparent",
              opacity: index <= activeWord ? fillProgress / 100 : 0, // Gradually fills
            }}
          >
            {word}
          </div>
        ))}
      </div>
      <AnimatedItem><div className="flex justify-center w-full mb-32 mt-32"><Aboutus /></div></AnimatedItem>
      <AnimatedItem>
        <div className="flex justify-center w-full mt-12"><Services /></div>
      <AnimatedItem>
      <div className="z-0"><Services_cards /></div>
      </AnimatedItem>
        
      </AnimatedItem>
      <AnimatedItem>
        <Link href='/services' className='flex justify-center -mt-16 sm:mt-6 w-full'><button className='bg-[rgba(249,227,98,1)] w-44 rounded-full text-[rgba(28,28,28,1)] mt-7 mb-7 font-extrabold h-10 flex justify-between pl-7 pr-7 items-center hover:animate-jiggle'>View All <img src='./Arrow_Up_Left.png' className='h-9' /></button></Link>
      </AnimatedItem>
      <AnimatedItem>
        <div className="flex justify-center w-full mt-12 sm:mt-0"><Portfolio /></div>
      </AnimatedItem>
      <AnimatedItem>
        <div className="flex justify-center w-full mb-8 sm:mb-12 md:mb-14 mt-16 sm:mt-0"><Contact /></div>
      </AnimatedItem>
        <div className="flex justify-center w-full overflow-hidden"><Footer /></div>


    </>
    
  );
}
