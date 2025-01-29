import React from 'react'

interface ScardProps {
  img: string; 
  head: string; 
  text: string; 
  subhead: string; 
  arr: string[]; 
}

const Scard: React.FC<ScardProps> = ({ img, head, text, subhead, arr }) => {
  
  return (
    <div className='flex justify-center z-0'>
      <div 
        className='h-[533px] w-[397px] rounded-3xl bg-gradient-to-r font-montferrat overflow-hidden from-[rgba(34,36,36,1)] to-[rgba(0,0,0,0)] shadow-white'
        style={{ boxShadow: "3px 3px 6px rgba(255, 255, 255, 0.1)", scale: '0.9' }}
      >
        <div className='h-[309px] overflow-hidden'>
          <img src={img} className="h-full w-full object-cover" />
        </div>
        <div className='pl-7 pt-3'>
          <div className='font-semibold text-[rgba(249,227,98,1)]'>{head}</div>
          <div className='mt-2 text-[12px] break-words w-88' style={{ fontWeight: "700" }}>{text}</div>
          <div className='font-semibold text-[rgba(249,227,98,1)] mt-2'>{subhead}</div>
          <ul className="list-disc pl-7">
            {arr.map((item, index) => (
              <li key={index} className='list-disc text-[12px] font-semibold'>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Scard;
