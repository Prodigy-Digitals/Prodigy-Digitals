import React from 'react'

const Footer = () => {
  return (
    <div className='min-w-full bg-[rgba(44,44,44,1)] rounded-3xl h-auto flex items-center flex-col translate-y-9'>
  <div className='text-center mt-9 font-extralight break-words w-full sm:w-[600px] lg:w-[800px] text-[8px] sm:text-[10px] lg:text-[14px]'>
    "Your brand is the face of your business, just like your personality defines you. You've made the first move by reaching out. Now, let's take the next step and transform your brand together."
  </div>
  <div className='flex justify-center gap-3 pb-16 pt-6'>
    <a href='https://www.facebook.com/' target='_blank'>
      <img src='./fb.png' alt='Facebook' className='h-6' />
    </a>
    <a href='https://www.instagram.com/' target='_blank'>
      <img src='./insta.png' alt='Instagram' className='h-6' />
    </a>
    <a href='https://x.com/' target='_blank'>
      <img src='./x.png' alt='Twitter' className='h-6' />
    </a>
    <a href='https://x.com/' target='_blank'>
      <img src='./linkdln.png' alt='Linkedln' className='h-6' />
    </a>
  </div>
</div>

  )
}

export default Footer
