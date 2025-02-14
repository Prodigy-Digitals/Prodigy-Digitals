"use client";
import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useEffect } from 'react'
import AnimatedItem from '../Animate'

const page = () => {
 
  
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
    <div>
      <Navbar/>

      <Footer/>
    </div>
  )
}

export default page
