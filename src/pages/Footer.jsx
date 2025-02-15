import React from 'react'

import BackToTopButton from '../component/backtotop';
import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocation } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <>
    <div className='mt-8'>
      <div
     
      >
    <h2 className='text-lg px-4 py-2 font-rale font-extrabold tracking-wide xss:px-6 lg:text-2xl xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px] 2sxl:px-[160px] '
      style={{
        color: '#1A8B9C',
      }}
    >CONTACT</h2>
    <div className=' flex  items-center  mx-2 justify-between space-x-2 xss:p-4 xs:px-2 xs:py-2 xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px]  2sxl:px-[160px]'>
      <div className='flex py-4 space-x-3 '>
     <Link to="https://www.linkedin.com/in/aung-kaung-sett-4244b721a/" target="_blank" aria-label="Linkedin Link">
              <button aria-label="Linkedin"className='flex items-center border-2 border-[#333333]  rounded-full p-1 bg-white  text-white  text-base font-monst md:text-lg lg:border-4'>
                  <FontAwesomeIcon icon={faLinkedin} style={{ color: '#0077B5',text:' white' }} className='mx-1 w-4 h-6  lg:w-6 lg:h-8'/> 
              </button>
     </Link>
     <Link to="https://www.instagram.com/rezzwxx?igsh=MTUydHVteXR4dTNxeQ==" target="_blank" aria-label="Instagram Link">
              <button aria-label="Instagram " className='flex items-center border-2 border-[#333333]   rounded-full p-1  bg-white text-white  text-base font-monst md:text-lg lg:border-4'>
                  <FontAwesomeIcon icon={faInstagram} className='mx-1 w-4 h-6  lg:w-6 lg:h-8' style={{ color: '#E4405F' }}/> 
              </button>
     </Link>
     <Link to="https://x.com/kau72149604?t=dMxfO8wj87LVzlq5ezcEZA&s=09" target="_blank" aria-label="Twitter Link">
              <button aria-label="Twitter"className='flex items-center border-2 border-[#333333]  bg-white rounded-full p-1   text-white  text-base font-monst md:text-lg lg:border-4'>
                  <FontAwesomeIcon icon={faTwitter} className='mx-1 w-4 h-6  lg:w-6 lg:h-8' style={{ color: '#1DA1F2' }} /> 
              </button>
     </Link>
     </div>
     <div>
     <BackToTopButton />
     </div>
     </div>
        <div className=' flex  flex-col items-start p-2 justify-between xss:p-4 xs:px-5 xs:py-2 xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px]  2sxl:px-[160px] '>
         
                <div className=" w-full flex p-2  flex-col  font-semibold "
               >
                  <button className='text-sm flex justify-between xs:text-base lg:text-lg '
                  >
                    <FontAwesomeIcon icon={faEnvelope} className='mx-2 w-4 h-4  xs:w-6 xs:h-6 lg:w-7 lg:h-6'  /> rrocket438@gmail.com
                  </button>
                  {/* <hr className="border-1 border-white my-1  "/> */}
                  <button className='mt-2 flex justify-between text-sm xs:text-base lg:text-lg'>
                      <FontAwesomeIcon icon={faPhone} className='mx-2 w-4 h-4 xs:w-6 xs:h-6 lg:w-7 lg:h-6'/> +95 9663174880
                  </button>
                  {/* <button className='flex justify-between text-sm xs:text-base lg:text-lg'>
                      <FontAwesomeIcon icon={faLocation} className='mx-2 w-4 h-4 xs:w-6 xs:h-6 lg:w-7 lg:h-6'/> Kyimyindaing Township ,Yangon
                  </button> */}
                </div>
                
                  
                </div>
            </div>
           
        </div>
        
        {/* <div className='bg-[#457582] py-1 xs:py-2 xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px] 2sxl:px-[160px]'  >
         <p className='mx-4 font-bubble text-white text-[9px] xs:text-[11px] md:text-base'
          style={{
           
        }}>Copyright © 2024 Aung Kaung Sett. All rights reserved.</p>
    </div>
     */}
    </>
  )
}
