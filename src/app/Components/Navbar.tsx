"use client"

import React from 'react'
import { useState } from 'react'
import { useEffect } from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Navbar = () => {
    const pathname = usePathname();

    const [hovern,sethovern]=useState(0)

    const [sidebar,setsidebar]=useState(false)
   
   

    useEffect(() => {
      const target1 = document.getElementById("sidebarz");
    
      const handleClick = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        
        if (target && target.id === "nav") {
          setsidebar((prev) => !prev);
        } else {
          if (sidebar && !target1?.contains(target)) {
            setsidebar(false);
          }
        }
      };
    
      document.addEventListener("click", handleClick);
    
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }, [sidebar]); // Add dependencies to avoid stale state issues
    
 
  return (
    <div className='overflow-x-hidden font-montferrat bg-[rgba(28,28,28,1)] z-50'>
            <div className='h-24 w-full flex items-center md:justify-between justify-between fixed bg-[rgba(28,28,28,1)] z-50'>

                <div className='ml-2 lg:ml-24 md:scale-[0.90] lg:scale-100 h-full flex items-center'><img src='./Prodigy_logo.jpg' className='h-20 flex items-center object-cover z-50'/></div>

                <div className=' flex-row gap-12 font-semibold hidden md:flex text-lg md:text-md md:gap-7 lg:gap-12 lg:text-lg items-center z-50'>
                <Link href='/' className={`hover:scale-105 transition-all duration-200 ${pathname=='/'?'text-[rgba(249,227,98,1)]':''}`}>HOME</Link>
                <Link href='/about' className={`hover:scale-105 transition-all duration-200 ${pathname=='/about'?'text-[rgba(249,227,98,1)]':''}`}>ABOUT</Link>
                <Link href='/services' className={`hover:scale-105 transition-all duration-200 ${pathname=='/services'?'text-[rgba(249,227,98,1)]':''}`}>SERVICES</Link>
                {/* <Link href='/portfolio' className={`hover:scale-105 transition-all duration-200 ${pathname=='/portfolio'?'text-[rgba(249,227,98,1)]':''}`}>PORTFOLIO</Link> */}
                <Link href='/contact' className={`hover:scale-105 transition-all duration-200 ${pathname=='/contact'?'text-[rgba(249,227,98,1)]':''}`}>CONTACT</Link>
                </div>



                <div className='flex flex-col gap-[2px] md:scale-[0.90] lg:scale-100 items-end mr-5 z-50' onMouseEnter={()=>sethovern(1)} onMouseLeave={()=>sethovern(0)} id='nav'>
                <div className={`w-[29px] transition-all duration-200 h-[5px] rounded-full ${hovern==1?'bg-[rgba(249,227,98,1)]':'bg-white'}`} id='nav'></div> 
                <div className={`w-[22px] transition-all duration-200 h-[5px] rounded-full ${hovern==1?'bg-[rgba(249,227,98,1)]':'bg-white'}`} id='nav'></div> 
                <div className={`w-[13px] transition-all duration-200 h-[5px] rounded-full ${hovern==1?'bg-[rgba(249,227,98,1)]':'bg-white'}`} id='nav'></div> 
                </div>  
                
                    
            </div>

            <div className={`h-full w-[350px] sm:w-[400px] md:w-[600px] transform-all duration-700 shadow-md shadow-yellow-400 rounded-3xl bg-[rgba(28,28,28,1)] opacity-[0.90] fixed top-24 z-50 -right-[20px] md:-right-[140px] sm:-right-[50px] ${sidebar?'':'translate-x-[1500px]'}`} id='sidebarz'>
                  <div className='hidden md:block'>
                  <div className='pl-5 pt-10'>
                    <img src='./Prodigy_logo.jpg' className='h-20'/>
                  </div>

                  <div className='text-[1.5vw] sm:text-[18px] md:text-[1.8vw] font-extrabold pl-8 pt-4 break-words w-[28vw] sm:w-[70%]'>
                    Do you have a project in your mind?
                  </div>

                  <div className='text-[1.5vw] sm:text-[18px] md:text-[1.8vw] font-bold pl-8 pt-14'>
                    Contact Us
                  </div>

                  <div className='pl-8 flex flex-row pt-8 items-center'>
                    <img src='./Phone.png' className='h-10'/>
                    <a href="tel:+918328003149" className="hover:underline hover:text-[rgba(249,227,98,1)] pl-9 flex items-center transition-all duration-200">+91 8328003149</a>
                  </div>

                  <div className='pl-8 flex flex-row pt-4 items-center'>
                    <img src='./mail.png' className='h-10'/>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=neerajannangi1@gmail.com&su=Inquiry&body=Hello, I would like more information about..." target="_blank" className="hover:underline hover:text-[rgba(249,227,98,1)] pl-6 flex items-center transition-all duration-200">neerajannangi1@gmail.com</a>
                  </div>
                </div>
                <div className='md:hidden flex flex-col gap-10 pt-16 pl-12'>
                    <Link href='/' className='hover:text-[rgba(249,227,98,1)] text-3xl transition-all duration-200 font-semibold'>Home</Link>
                    <Link href='/about'><div className='hover:text-[rgba(249,227,98,1)] text-3xl transition-all duration-200 font-semibold'>About</div></Link>
                    <Link href='/services' className='hover:text-[rgba(249,227,98,1)] text-3xl transition-all duration-200 font-semibold'>Services</Link>
                    {/* <div className='hover:text-[rgba(249,227,98,1)] text-3xl transition-all duration-200 font-semibold'>Portfolio</div> */}
                    <Link href='/contact' className='hover:text-[rgba(249,227,98,1)] text-3xl transition-all duration-200 font-semibold'>Contact</Link>
                </div>
                </div>
                

        
    </div>
  )
}

export default Navbar
