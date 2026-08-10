import React from 'react'
import { motion } from 'framer-motion'
import codemal from '../../public/codemal.svg'

export default function Experience2() {
  return (
    <>
      <motion.div 
        className="flex justify-end mt-12"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="mx-4 text-xl font-extrabold tracking-wide font-rale xs:text-2xl lg:text-3xl bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent">
          EXPERIENCES
        </h2>
      </motion.div>

      <motion.div 
        className='p-6 mx-2 mt-6 glass-card md:p-8 hover-lift'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div 
          className='flex items-center mb-4'
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.img 
            className="w-12 h-12 rounded-lg shadow-lg md:w-18 md:h-18" 
            src={codemal} 
            alt="Code Mal logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <h2 className='mx-4 text-lg font-bold text-gray-800 font-monst md:text-2xl'>
            Code Mal
          </h2>
        </motion.div>
        
        <div className='mt-4 space-y-2 xs:text-base md:text-lg lg:text-xl'>
          <motion.p 
            className='font-semibold text-[#1A8B9C] flex items-center'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            🛠️ Content Writer
          </motion.p>
          <motion.p 
            className='flex items-center font-semibold text-gray-600'
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            📅 Jan 2024 - Jun 2025
          </motion.p>
          
          <motion.div 
            className="p-4 mt-6 transition-all duration-300 glass-card hover:shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <ul className='space-y-3 text-gray-700'>
              <motion.li 
                className='flex items-start font-mari md:text-lg lg:text-xl'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
              >
                <span className='text-[#1A8B9C] mr-3 text-lg'>•</span>
                Wrote technical content and guides for developers as content writer
              </motion.li>
              <motion.li 
                className='flex items-start font-mari md:text-lg lg:text-xl'
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <span className='text-[#1A8B9C] mr-3 text-lg'>•</span>
                Contributed to project writing and UI design for nonprofit websites
              </motion.li>
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
