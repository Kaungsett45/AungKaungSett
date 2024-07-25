import React from 'react'

import { Link } from 'react-router-dom'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <>
    <div className='bg-[#204057]'>
      <div
     
      >
    <h2 className='text-lg px-4 py-2 font-rale font-extrabold tracking-wide xss:px-6 lg:text-2xl'
      style={{
        color: '#FFDAB9',
      }}
    >CONTACT</h2>
    
        <div className='flex  flex-col items-start p-3 justify-between xss:p-4 xs:px-5 xs:py-2'>
          <div>
            <Link to="https://www.linkedin.com/in/aung-kaung-sett-4244b721a/" target="_blank">
              <button className='flex items-center  border-2 rounded-lg px-3 py-1  text-white  text-base font-monst md:text-lg lg:border-4'>
                  <FontAwesomeIcon icon={faLinkedin} className='mx-1 w-6 h-6  lg:w-8 lg:h-8'/> LINKEDIN
              </button>
              </Link>
            </div>
            <div className='w-full my-3 flex justify-start flex-col text-white font-bold'>
              <button className='text-sm flex justify-between xs:text-base lg:text-lg'>
                <FontAwesomeIcon icon={faEnvelope} className='mx-2 w-4 h-4  xs:w-6 xs:h-6 lg:w-8 lg:h-8'/> rrocket438@gmail.com
              </button>
              <hr className="border-1 border-white my-1  "/>
              <button className='flex justify-between text-sm xs:text-base lg:text-lg'>
                  <FontAwesomeIcon icon={faPhone} className='mx-2 w-4 h-4 xs:w-6 xs:h-6 lg:w-8 lg:h-8'/> +95  9768740871
              </button>
            </div>
           
        </div>
        </div>
    </div>
        <div className='bg-[#457582] py-1 xs:py-2'  >
         <p className='mx-4 font-bubble text-white text-[9px] xs:text-[11px] md:text-base'
          style={{
           
        }}>Copyright © 2024 Aung Kaung Sett. All rights reserved.</p>
    </div>
    </>
  )
}
