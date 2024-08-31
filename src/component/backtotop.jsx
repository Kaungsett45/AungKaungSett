import React from 'react';
import up from '../../public/up.svg'
const BackToTopButton = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button 
      onClick={handleScrollToTop} 
      className="flex items-center p-2 px-2 bg-white  text-black  text-base font-monst md:text-lg  rounded-full  transition duration-300 ease-in-out"
    >
      <img src={up} alt="up-arrow" className='text-black'/>
    </button>
  );
};

export default BackToTopButton;
