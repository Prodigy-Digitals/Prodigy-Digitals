"use client";
import React from 'react'
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-40 w-full gap-6 md:gap-0 py-8 md:py-0'>
  {/* Text Section */}
  <div className='text-3xl sm:text-4xl lg:text-5xl font-semibold break-words w-full md:w-[470px] text-center md:text-left'>
    Ready to Bring Your <span className='text-[rgba(249,227,98,1)]'>Vision</span> to Life?
  </div>

  {/* Button Section */}
  <div className='flex justify-center'>
   <Link href='/contact'>
   <button className='bg-[rgba(249,227,98,1)] hover:animate-jiggle w-48 sm:w-56 md:w-64 rounded-full text-[rgba(28,28,28,1)] font-extrabold h-10 sm:h-12 flex justify-center items-center px-6 sm:px-7'>
      Contact Now
    </button></Link> 
  </div>
</div>
  )
}

export default Contact
