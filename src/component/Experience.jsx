import React from 'react'

import react from '../../public/react.svg'
import codemal from '../../public/codemal.svg'
import whitestar from '../../public/whitestar.svg'
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

<div className='flex flex-col  items-center  my-6 p-4'>

    {/* experience container */ }
   
      <div className=' transform scale-x-[-1]  flex   items-center my-4 p-2'>
          <div
              className="transform scale-x-[-1] p-3 my-4  rounded-lg font-mari font-thin  text-xs xs:text-lg xs:p-6 "
              style={{ backgroundColor: "#204057", color: "white" }}
            >
              <p className="  font-bold text-sm lg:text-xl ">
                2024 - Present
                <img src={whitestar} alt="Star" className='absolute right-2 w-3 xs:w-6 '/>
         
               </p>
              <p className="text-4xsl "
               style={{ color: "#B7B7B7" }}>
              Content Writer </p>

              <p className="mt-2  text-xsl text-left">
              worked as a volunteer content creator, gaining writing knowledge in IT and related fields, which helped me develop my skills as a content writer </p>
          </div>
          <hr className='w-6 h-1 sm:w-12 sm:h-2 md:w-12 bg-[#204057] border-0'></hr>
          <div className='px-2 w-24 h-10 xss:w-24 xs:w-32 xs:h-12  sm:h-19 md:h-20  sm:w-24 md:w-32 md:h-18 lg:w-30 lg:h-18 border-4 border-[#204057] bg-[#0148BE] rounded-full flex items-center justify-center overflow-hidden'>
              <img src={codemal} alt="react" className='w-12 h-8 sm:w-6 sm:h-10 md:w-20 md:h-24 object-contain' />
          </div>
      </div>

      {/* oky */ }
      <div className='flex items-center my-4 p-2'>
        <div
              className=" my-4 p-3 rounded-lg font-mari font-thin  text-xs xs:text-lg xs:p-6 "
              style={{ backgroundColor: "#204057", color: "white" }}
            >
                 <p className="relative  font-bold text-sm lg:text-xl ">
                2022 - Present
             
                <img src={whitestar} alt="Star" className='absolute right-2 w-3 xs:w-6 '/>
         
               </p>
              <p className="text-4xsl "
               style={{ color: "#B7B7B7" }}>
              Web Developer </p>
              <p className="mt-2  text-xsl text-left">
              Full-stack developer with React, Java, Tailwind, Node.js, and Firebase skills. I’ve worked on multiple freelance projects and am now seeking new challenges
              </p>
               </div>
          <hr className='w-8 h-1 sm:w-12 sm:h-2 md:w-12 bg-[#204057] border-0'></hr>
            <div className='px-2 w-24 h-10 xss:w-24 xs:w-32 xs:h-12 sm:w-24 sm:h-19 md:w-36 md:h-20 lg:w-30 lg:h-20 border-4 border-[#204057] rounded-full flex items-center justify-center overflow-hidden'>
              <img src={react} alt="react" className='mx-1 w-14 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-10 object-contain' />
            </div>

      </div>
  </div>
  
 
</div>


  
  )
}
