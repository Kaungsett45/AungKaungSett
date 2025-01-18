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
                Code Mal
                <img src={whitestar} alt="Star" className='absolute right-2 w-3 xs:w-6 '/>
         
               </p>
              <p className="text-lg "
               style={{ color: "#B7B7B7" }}>
              Content Writer -2024 </p>

              <p className="mt-2  text-xsl text-right">
              worked as a volunteer content creator, gaining writing knowledge in IT and related fields, which helped me develop my skills as a content writer </p>
          </div>
          <hr className='w-6 h-1 sm:w-12 sm:h-2 md:w-12 bg-[#204057] border-0'></hr>
          <div className='px-2 w-24 h-10 xss:w-24 xs:w-32 xs:h-12  sm:h-19 md:h-20  sm:w-24 md:w-28 md:h-18 lg:w-30 lg:h-18 border-4 border-[#204057] bg-[#0148BE] rounded-full flex items-center justify-center overflow-hidden'>
              <img src={codemal} alt="react" className='w-12 h-8 sm:w-6 sm:h-10 md:w-20 md:h-24 object-contain' />
          </div>
      </div>

      {/**fronted developer */}
      <div className=' transform scale-x-[-1]  flex   items-center my-4 p-2'>
          <div className='px-2 w-24 h-10 xss:w-24 xs:w-32 xs:h-12  sm:h-19 md:h-20  sm:w-24  md:h-18 lg:w-30 lg:h-18 border-4 border-[#204057] bg-[#0148BE] rounded-full flex items-center justify-center overflow-hidden'>
              <img src={codemal} alt="react" className='w-12 h-8 sm:w-6 sm:h-10 md:w-20 md:h-24 object-contain' />
          </div>
           <hr className='w-6 h-1 sm:w-12 sm:h-2 md:w-12 bg-[#204057] border-0'></hr>
         
          <div
              className="transform scale-x-[-1] p-3 my-4  rounded-lg font-mari font-thin  text-xs xs:text-lg xs:p-6 "
              style={{ backgroundColor: "#204057", color: "white" }}
            >
              <p className="  font-bold text-sm lg:text-xl ">
                Code Mal
                <img src={whitestar} alt="Star" className='absolute right-2 w-3 xs:w-6 '/>
         
               </p>
              <p className="text-lg "
               style={{ color: "#B7B7B7" }}>
              Frontend Developer-2025 </p>

              <p className="mt-2  text-xsl text-left">
              have gained expertise in creating responsive, user-friendly interfaces using modern technologies.</p>
           </div>
          
      </div>

  </div>
  
 
</div>


  
  )
}
