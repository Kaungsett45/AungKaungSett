import React from 'react'

import react from '../../public/react.svg'

export default function Experience() {
  return (
<div className=" relative "> {/* Added padding here */}
  <div style={{ borderRadius: '0 0 0 100px' }} className="cut-corner2  ">
    <h2
      className=" mx-1 text-right font-rale font-extrabold tracking-wide text-lg xs:text-x lg:text-2xl"
      style={{ color: '#FFDAB9', paddingLeft: '1rem', zIndex: 10 }}
    >
      Experience
    </h2>
  </div>

  <div className='flex items-center my-6 p-4'>

  <div
        className="my-4 p-3 rounded-lg font-mari font-thin  text-xs xs:text-lg xs:p-6 "
        style={{ backgroundColor: "#204057", color: "white" }}
      >
         <p className="leading-5 pb-3">
         Full-stack developer with React, Next.js, Java, Tailwind, Node.js, and Firebase skills. Some experience with React projects.
         </p>
         <p className="leading-5 pb-3">
         Ready for new challenges and full-time opportunities </p>
    </div>
    <hr className='w-6 h-1 sm:w-12 sm:h-2 md:w-12 bg-[#204057] border-0'></hr>
    <div className='w-24  h-10 xss:w-24 xs:w-32 xs:h-12 sm:w-36 sm:h-18 md:h-20 border-4 border-[#204057] rounded-full flex items-center justify-center overflow-hidden'>
         <img src={react} alt="react" className='w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 object-fit' />
    </div>
  

  </div>
 
</div>

  
  )
}
