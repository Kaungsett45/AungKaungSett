import React from 'react';
import { motion } from 'framer-motion';
import up from '../../public/up.svg'

const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button 
      onClick={handleScrollToTop} 
      className="bg-[#1A8B9C] hover:bg-[#2DA5B8] flex items-center justify-center p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img src={up} alt="Back to top" className='w-5 h-5 filter brightness-0 invert'/>
    </motion.button>
  );
};

export default BackToTopButton;
