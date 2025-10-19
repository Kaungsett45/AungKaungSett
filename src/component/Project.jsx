import React, { useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import arrow from '../../public/rgarrow.svg'
import loading from '/loading.svg'
import { Link } from 'react-router-dom'
import right from '/right.svg'
import left from '/left.svg'
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Project({showPj  }) {
  const [isloading , setisloading] = useState(true);

  const handleimageload =() =>{
    setisloading(false);
  }
    const carouselItems = [
        { id: 1, title: 'Rublet', image: '/moviemockup.svg' ,
        language_1: '/java.svg' ,language_2: '/css.svg' ,language_3: '/spring.svg' ,
        github : 'https://github.com/Kaungsett45/Rublet',
        Demo : 'https://drive.google.com/file/d/1kMMMkJqDOxg3yYGkUObZooxXWka_r863/view?usp=sharing',
        },
        { id: 2, title: 'QuoteGenerator', image: '/quotemockup.svg' ,
        language_1: '/tailwind.svg' ,language_2:'/react.svg' ,language_3: '/firebase.svg' ,
        github : 'https://github.com/Kaungsett45/quotegenerator',
        Demo : 'https://drive.google.com/file/d/1XK7gtD-9WAjZroafdMeEF7cW7B5udbIh/view?usp=sharing',
        },
        { id: 3, title: 'Quizzi', image: '/quizzimockup.svg',
        language_1: '/java.svg' ,language_2: '/css.svg' ,language_3: '/spring.svg' ,
        github : 'https://github.com/Kaungsett45/QuzziSystem',
        Demo : 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',
        
        },
        { id: 4, title: 'CodeExplainer', image: '/quizzimockup.svg',
        language_1: '/java.svg' ,language_2: '/css.svg' ,language_3: '/spring.svg' ,
        github : 'https://github.com/Kaungsett45/AiCodeExplainer',
        Demo : 'https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing',
        
        },
      ];

      const sliderRef = useRef(null);

      const settings = {
        dots: false,
        infinite: true,
        speed: 2100,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false, 
      };
    
      const nextSlide = () => {
        sliderRef.current.slickNext();
      };
    
      const prevSlide = () => {
        sliderRef.current.slickPrev();
      };
  return (
    <>
      <motion.div 
        className='py-8'
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="mx-1 text-center font-rale font-black tracking-wide text-2xl sm:text-3xl xs:text-2xl lg:text-5xl bg-gradient-to-r from-[#FF6F61] to-[#FF8A75] bg-clip-text text-transparent">
          PROJECTS
        </h1>
      </motion.div>

      <motion.div 
        className="relative p-6 m-2 my-8 transition-all duration-300 shadow-2xl glass-card hover:shadow-3xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
      <Slider {...settings} ref={sliderRef}>
        {carouselItems.map(item => (
            <motion.div 
              className='space-x-2' 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h2 className="text-xl xs:text-3xl tracking-widest font-extrabold font-monst m-1 text-left bg-gradient-to-r from-[#FF6F61] to-[#FF8A75] bg-clip-text text-transparent">
                  {item.title}
                </h2>
              </div>
              {isloading &&(
                  <div
                  className="h-[220px] flex flex-col items-center justify-center "
                >
                  {/* Optionally add a spinner or text */}
                  <img src={loading} alt="loading..."
                   className='w-24 h-38 xss:h-34 md:h-42' />
                   <p>Loading...</p>
                </div>
              )}
              <motion.div 
                className='flex justify-center'
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src={item.image} 
                  alt="mockup"
                  onLoad={handleimageload}
                  style={isloading ? { visibility: 'hidden' } : {}}
                  className='h-40 transition-shadow duration-300 rounded-lg shadow-lg xss:h-36 md:h-44 hover:shadow-xl' 
                />
              </motion.div>
        <div>
             <div className='flex items-center justify-between '>
                     <motion.div 
                       className='flex items-center p-3 my-2 space-x-3 rounded-full glass-card'
                       whileHover={{ scale: 1.05 }}
                     >
                       <motion.img 
                         src={item.language_1} 
                         alt="tech1" 
                         className='transition-transform duration-200 w-7 h-7 sm:w-9 sm:h-9 md:w-8 md:h-8 hover:scale-110' 
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.5 }}
                       />
                       <motion.img 
                         src={item.language_2} 
                         alt="tech2" 
                         className='transition-transform duration-200 w-7 h-7 sm:w-9 sm:h-9 md:w-8 md:h-8 hover:scale-110' 
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.5 }}
                       />
                       <motion.img 
                         src={item.language_3} 
                         alt="tech3" 
                         className='transition-transform duration-200 w-7 h-7 sm:w-9 sm:h-9 md:w-8 md:h-8 hover:scale-110' 
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.5 }}
                       />
                     </motion.div>
                     <div className='flex items-center justify-between'>
                         <Link to={item.github} target="_blank" aria-label="Github Link">
                           <motion.button 
                             aria-label="github" 
                             className='flex items-center p-3 m-1 text-sm font-bold transition-all duration-300 rounded-full font-monst glass-card xs:text-base md:text-lg hover:bg-gray-800 hover:text-white'
                             whileHover={{ scale: 1.1, y: -2 }}
                             whileTap={{ scale: 0.95 }}
                           >
                             <FontAwesomeIcon icon={faGithub} className='w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8'/>
                           </motion.button>
                         </Link>
                         
                         <Link to={item.Demo} target="_blank">
                           <motion.div 
                             className='flex items-center bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] px-6 py-3 text-white rounded-full font-mari shadow-lg hover:shadow-xl transition-all duration-300'
                             whileHover={{ scale: 1.05, y: -2 }}
                             whileTap={{ scale: 0.95 }}
                           >
                             Demo
                             <motion.img 
                               src={arrow} 
                               alt="right" 
                               className='w-5 h-5 ml-2 sm:w-6 sm:h-6' 
                               animate={{ x: [0, 3, 0] }}
                               transition={{ duration: 1.5, repeat: Infinity }}
                             />
                           </motion.div>
                         </Link>
                     </div>
             </div>
        </div>
            </motion.div>
        ))}
      </Slider>
      
      <motion.button
        className="absolute z-10 flex items-center justify-center p-4 transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-lg left-2 top-1/2 glass-card hover:bg-gray-800 hover:text-white"
        onClick={prevSlide}
        whileHover={{ scale: 1.1, x: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={left} alt="Previous" className="w-6 h-6" loading="lazy" />
      </motion.button>
      
      <motion.button
        className="absolute z-10 flex items-center justify-center p-4 transition-all duration-300 transform -translate-y-1/2 rounded-full shadow-lg right-2 top-1/2 glass-card hover:bg-gray-800 hover:text-white"
        onClick={nextSlide}
        whileHover={{ scale: 1.1, x: 2 }}
        whileTap={{ scale: 0.95 }}
      >
        <img src={right} alt="Next" loading="lazy" className="w-6 h-6" />
      </motion.button>
    </motion.div>


  
        
        
      </>
  )
}


