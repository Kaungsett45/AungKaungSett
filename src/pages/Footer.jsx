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
import { motion } from 'framer-motion';
export default function Footer() {
  return (
    <>
    <div className='mt-12'>
      <div className='glass-card mx-2 p-6'>
        <h2 className='text-lg px-4 py-2 font-rale font-extrabold tracking-wide xss:px-6 lg:text-3xl xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px] 2sxl:px-[160px] bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent'
        >CONTACT</h2>
        
        <div className='flex items-center mx-2 justify-between space-x-2 xss:p-4 xs:px-2 xs:py-2 xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px] 2sxl:px-[160px]'>
          <div className='flex py-4 space-x-4'>
            <Link to="https://www.linkedin.com/in/aung-kaung-sett-4244b721a/" target="_blank" aria-label="Linkedin Link">
              <motion.button 
                aria-label="Linkedin"
                className='flex items-center glass-card p-3 hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faLinkedin} className='w-5 h-5 lg:w-6 lg:h-6'/> 
              </motion.button>
            </Link>
            
            <Link to="https://www.instagram.com/rezzwxx?igsh=MTUydHVteXR4dTNxeQ==" target="_blank" aria-label="Instagram Link">
              <motion.button 
                aria-label="Instagram"
                className='flex items-center glass-card p-3 hover:bg-[#E4405F] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faInstagram} className='w-5 h-5 lg:w-6 lg:h-6'/> 
              </motion.button>
            </Link>
            
            <Link to="https://x.com/kau72149604?t=dMxfO8wj87LVzlq5ezcEZA&s=09" target="_blank" aria-label="Twitter Link">
              <motion.button 
                aria-label="Twitter"
                className='flex items-center glass-card p-3 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl'
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <FontAwesomeIcon icon={faTwitter} className='w-5 h-5 lg:w-6 lg:h-6'/> 
              </motion.button>
            </Link>
          </div>
          
          <div>
            <BackToTopButton />
          </div>
        </div>
        <div className='flex flex-col items-start p-4 justify-between xss:p-6 xs:px-5 xs:py-4 xl:px-[260px] sxl:px-[60px] 1sxl:px-[100px] 2sxl:px-[160px]'>
          <div className="w-full flex p-2 flex-col font-semibold space-y-4">
            <motion.div 
              className='text-sm flex items-center xs:text-base lg:text-lg glass-card p-4 hover-lift'
              whileHover={{ x: 5 }}
            >
              <FontAwesomeIcon icon={faEnvelope} className='mx-3 w-5 h-5 xs:w-6 xs:h-6 lg:w-7 lg:h-6 text-[#1A8B9C]'/> 
              <span>rrocket438@gmail.com</span>
            </motion.div>
            
            <motion.div 
              className='flex items-center text-sm xs:text-base lg:text-lg glass-card p-4 hover-lift'
              whileHover={{ x: 5 }}
            >
              <FontAwesomeIcon icon={faPhone} className='mx-3 w-5 h-5 xs:w-6 xs:h-6 lg:w-7 lg:h-6 text-[#1A8B9C]'/> 
              <span>+95 9663174880</span>
            </motion.div>
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
