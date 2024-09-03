import React , {useRef } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import arrow from '../../public/rgarrow.svg'

import { Link } from 'react-router-dom'

import right from '/right.svg'
import left from '/left.svg'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
export default function Project({showPj  }) {
  
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
        // Add more items as needed
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
        <div className=' py-6 '>
        <h1
      className=" mx-1 text-center font-rale font-black tracking-wide text-lg sm:text-2xl xs:text-xl lg:text-4xl"
      style={{ color: '#FF6F61', zIndex: 10 }}
    >
      PROJECTS
    </h1>
        </div>

        <div className=" my-8 space-x-4 relative m-2 p-2  backdrop-blur-sm rounded-lg px-4 py-2 border-2 bg-white drop-shadow-2xl">
      <Slider {...settings} ref={sliderRef}>
        {carouselItems.map(item => (
             <div className='space-x-2' key={item.id}>
             <div>
                 <h2 className="text-lg   xs:text-2xl tracking-widest font-extrabold font-monst m-1 text-left text-[#FF6F61]">{item.title}</h2>
             </div>
             <div className='flex justify-center   '>
                   <img src={item.image} alt="mockup"  className='h-38 xss:h-34 md:h-42' />
             </div>
        <div>
             <div className='flex items-center justify-between '>
                     <div className='flex  items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                     <img src={item.language_1} alt="tailwind" className='w-6 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6' />
                        <img src={item.language_2} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                        <img src={item.language_3} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                     </div>
                     <div className='flex items-center justify-between'>
                         <Link to={item.github} target="_blank" aria-label="Github Link" >
                         <button aria-label="github" className='flex items-center font-monst font-bold m-1  border-2 shadow-lg bg-[#1A8B9C] border-[#1A8B9C] rounded-full text-sm xs:text-base md:text-lg'>
                         <FontAwesomeIcon icon={faGithub} className='text-white mx-1 my-1 w-6 h-6 xs:w-7 sm:w-9 sm:h-9 xs:h-7 md:w-8 md:h-8'/>
                         </button>
                         </Link>
                         <Link to={item.Demo} target="_blank" className='flex items-center bg-[#1A8B9C] px-4 py-2 text-white rounded-full font-mari'>Demo  <img src={arrow} alt="right" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' /></Link>
                     </div>
             </div>
        </div>
 </div>
        ))}
      </Slider>
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 flex items-center justify-center"
        onClick={prevSlide}
        >
        <img src={left} alt="Previous" className="w-6 h-6" loading="lazy" />
        </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg z-10 flex items-center justify-center"
        onClick={nextSlide}
        >
        <img src={right} alt="Previous"  loading="lazy" className="w-6 h-6" />
        </button>
     
    </div>


  
        
        
      </>
  )
}


