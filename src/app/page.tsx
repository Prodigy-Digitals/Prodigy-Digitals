"use client";

// import Navbar from "./Components/Navbar";
import { useEffect, useState } from "react";
import { Poppins } from "next/font/google";
import Aboutus from "./Components/aboutus";
import Services from "./Components/Services";
import Services_Cards from "./Components/Services_cards";
import dynamic from 'next/dynamic';
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

const poppins = Poppins({
  subsets: ['latin'], // Use subsets for optimization
  weight: ['900'], // Specify weights you need
});
const Services_cards = dynamic(() => import('./Components/Services_cards'), { ssr: false });
export default function Home() {
  const stringArray = ["VISION", "JOURNEY"];
  const words = ["CRAFT", "CREATE", "CODE"];
  const [activeWord, setActiveWord] = useState(0);
  const [fillProgress, setFillProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  // Handle text cycling animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % stringArray.length); // Switch to the next string
    }, 4000); // 2 seconds for each word

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

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
  return (
    <>

{/*       <Navbar /> */}
      <div className="mt-28 px-4 md:px-10">
  <div className="flex flex-col md:flex-row justify-evenly items-center z-10 md:scale-[0.85] lg:scale-100">
   
    <div className="flex flex-col justify-center items-center text-center md:text-left">
      <div className="flex flex-col justify-start">
          <div className="font-extrabold text-[2.5vh] md:text-[3.5vh] lg:text-[5vh] flex-shrink-0">
            CRAFTING DIGITAL EXPERIENCE,
          </div>

          <div className="font-extrabold text-[2.5vh] md:text-[3.5vh] lg:text-[5vh] flex-shrink-0">
            
          </div>

          <div className="font-extrabold text-[2.5vh] md:text-[3.5vh] lg:text-[5vh]">
            <a className="text-[rgba(249,227,98,1)]">EMPOWERING</a> YOUR
          </div>
          <div className="w-full text-center flex justify-center md:justify-normal">
           <div className="font-extrabold text-[2.5vh] md:text-[3.5vh] lg:text-[5vh] flex-shrink-0 border-r-4 pr-1 max-w-max animate-typing overflow-hidden">
             {stringArray[currentText]}
           </div>
          </div>

      </div>
      <div className="text-[2vh] md:text-[2vh] mt-8 md:mt-16 w-full md:w-[65vw] font-sans lg:w-[50vw] xl:w-[35vw]">
        Fuel your digital success with our powerhouse team of mavens ready to take your business to the next level!
      </div>
    </div>

    <img
      src="./Image_on_Home_Page.png"
      className="h-[40vh] md:h-[40vh] lg:h-[80vh] w-auto flex items-center object-contain"
    />
  </div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-4 px-8 md:px-32 mt-16 md:mt-32">
  {words.map((word, index) => (
    <div
      key={index}
      className={`poppins.classname text-5xl md:text-6xl font-extrabold relative transition-all duration-500`}
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
      <div className="flex justify-center w-full mb-32 mt-32"><Aboutus/></div>
      <div className="flex justify-center w-full"><Services/></div>
      <div className="z-0"><Services_Cards/></div>
      <div className='flex justify-center mt-6 w-full'><button className='bg-[rgba(249,227,98,1)] w-44 rounded-full text-[rgba(28,28,28,1)] mt-7 mb-7 font-extrabold h-10 flex justify-between pl-7 pr-7 items-center'>View All <img src='./Arrow_Up_Left.png' className='h-9'/></button></div>
      <div className="flex justify-center w-full"><Portfolio/></div>
      <div className="flex justify-center w-full mb-6"><Contact/></div>
      <div className="flex justify-center w-full overflow-hidden"><Footer/></div>
    </>
  );
}
