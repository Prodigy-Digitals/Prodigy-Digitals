"use client";
import React from 'react'
import Link from 'next/link';

const Aboutus = () => {
  return (
    <div className='w-[90vw] md:w-[85vw] flex flex-col md:flex-row justify-between h-auto pb-8 bg-gradient-to-r from-[rgba(34,36,36,1)] to-[rgba(0,0,0,0)] rounded-[40px] shadow-lg shadow-white' style={{boxShadow: "3px 3px 6px rgba(255, 255, 255, 0.15)"}}>
  {/* Logo Section */}
  <div className='mt-8 md:mt-16 flex justify-center md:justify-start -mb-8 md:mb-0'>
    <img src='./pro.png' className='w-[60vw] md:w-[40vw] md:min-w-[250px] justify-center flex object-contain' alt="Prodigy Logo" />
  </div>

  {/* Content Section */}
  <div className='flex flex-col px-6  pt-6 pb-8 md:pb-0'>
    <div className='text-[rgba(249,227,98,1)] underline underline-offset-4 mb-6 md:mb-9 text-lg flex items-center justify-center'>
      About Us
    </div>
    <div className='text-3xl md:text-5xl font-semibold text-center md:text-left'>
      Crafting <span className='text-[rgba(249,227,98,1)]'>Innovative</span> Solutions for Your Success
    </div>
    <div className='pl-1 mt-6 md:mt-9 w-full font-montferrat text-base font-extralight md:text-lg text-center md:text-left'>
    We focus on providing comprehensive, customized solutions to suit your specific technical needs. Whether you’re managing a small business or leading a multinational organization, our skilled team is equipped to deliver premium services that support your success.
    </div>
    <Link href='/about'><div className='pl-1 mt-6 md:mt-9 w-full font-montferrat text-base font-extralight md:text-lg opacity-[0.9] text-center md:text-left text-[rgba(249,227,98,1)] underline underline-offset-4'>
       Want to Know more about us?
    </div>
    </Link>
  </div>
</div>
  )
}

export default Aboutus
