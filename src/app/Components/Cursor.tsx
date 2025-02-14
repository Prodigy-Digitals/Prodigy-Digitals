import React from 'react'



const Cursor = () => {
    const cursorin=document.getElementById("in");
    const cursorout=document.getElementById("out");
    window.addEventListener("mousemove",function(e){
       const posX=e.clientX;
       const posY=e.clientY;

       cursorin?.style.setProperty("left", `${posX}px`);
       cursorin?.style.setProperty("top", `${posY}px`);
       
       

    //    cursorout.style.left=`${posX}px`;
    //    cursorout.style.top=`${posY}px`;

       cursorout?.animate({
        left:`${posX}px`,
        top:`${posY}px`
       },{ duration:5000, fill:"forwards"}
       )
    });
  return (
    <div>
      <div id='in' className='h-[5px] w-[5px] bg-white rounded-full fixed top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] z-50 pointer-events-none'></div>
      <div id='out' className='h-[30px] w-[30px] border border-white rounded-full fixed top-0 left-0 transform translate-x-[-50%] translate-y-[-50%] z-50 pointer-events-none'></div>
    </div>
  )
}

export default Cursor
