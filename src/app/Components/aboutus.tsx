"use client";
import React from 'react'

const Aboutus = () => {
  return (
    <div className='w-[90vw] md:w-[85vw] flex flex-col md:flex-row justify-between h-auto pb-8 bg-gradient-to-r from-[rgba(34,36,36,1)] to-[rgba(0,0,0,0)] rounded-[40px] shadow-lg shadow-white' style={{boxShadow: "3px 3px 6px rgba(255, 255, 255, 0.15)"}}>
  {/* Logo Section */}
  {/* <div className='mt-8 md:mt-16 flex justify-center md:justify-start'>
    <img src='./Prodigy_logo.jpg' className='w-48 md:w-72' alt="Prodigy Logo" />
  </div> */}

  {/* Content Section */}
  <div className='flex flex-col px-6 md:pl-16 md:pr-16 pt-6 pb-8 md:pb-0'>
    <div className='text-[rgba(249,227,98,1)] underline underline-offset-4 mb-6 md:mb-9 text-lg flex items-center justify-center'>
      About Us
    </div>
    <div className='text-3xl md:text-5xl font-semibold text-center md:text-left'>
      Crafting <span className='text-[rgba(249,227,98,1)]'>Innovative</span> Solutions for Your Success
    </div>
    <div className='pl-1 mt-6 md:mt-9 w-full font-montferrat text-base md:text-lg text-center md:text-left'>
    Our primary goal is to offer comprehensive, tailored solutions that cater to the unique technical requirements of each client. Whether you are managing a small business, expanding your startup, or leading a large multinational corporation, our skilled and experienced team is equipped to deliver premium services that are designed to optimize your processes and enhance your overall success. We understand that every organization is different, and therefore, we work closely with you to assess your specific needs and provide innovative, scalable solutions that can grow with you. From the latest technological advancements to industry-leading practices, we are committed to providing exceptional support that ensures your business is always one step ahead in today’s competitive landscape. Our personalized approach guarantees that you receive the highest level of service, maximizing efficiency, reducing risks, and paving the way for long-term success.
    </div>
  </div>
</div>
  )
}

export default Aboutus
