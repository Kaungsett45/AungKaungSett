import React , {useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useInView } from 'react-intersection-observer';
import spring from '../../public/spring.svg'
import java from '../../public/java.svg'
import css from '../../public/css.svg'
import react from '../../public/react.svg'
import arrow from '../../public/rgarrow.svg'
import tailwind from '../../public/tailwind.svg'
import { Link } from 'react-router-dom'
import firebase from '../../public/firebase.svg'
import quizzimockup from '../../public/quizzimockup.svg'
import moviemockup from '../../public/moviemockup.svg'
import quotemockup from '../../public/quotemockup.svg'
export default function Project({showPj  }) {
  
   
  return (
    <>
        <div >
        <h1
      className=" mx-1 text-center font-rale font-black tracking-wide text-lg sm:text-2xl xs:text-xl lg:text-4xl"
      style={{ color: '#FF6F61', zIndex: 10 }}
    >
      PROJECTS
    </h1>
        </div>

      {/* <div className='p-1 py-2 grid grid-cols-1  my-4 sm:px-4 md:grid-cols-2 ' >

        <a href="https://github.com/Kaungsett45/Rublet"  target="_blank" className='my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex flex-col justify-between items-center  drop-shadow-2xl '>
            <video src={rublet} autoPlay loop muted preload="auto" className='w-full h-46 rounded-lg object-fill md:h-64 ' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Rublet
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                <img src={java} alt="tailwind" className='w-6 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
            </div>

        </a>
        <a href="https://github.com/Kaungsett45/QuzziSystem"  target="_blank" className=' my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center  drop-shadow-2xl'>
            <video src={quizzi} autoPlay loop muted preload="auto" className='w-full h-46 rounded-lg object-fill md:h-64 ' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Quizzi
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                <img src={java} alt="tailwind" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
            </div>
        </a>
        <a href="https://github.com/Kaungsett45/quotegenerator"  target="_blank" className=' my-1 backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center  drop-shadow-2xl'>
            <video src={quote} autoPlay loop muted preload="auto" className='w-full h-46 rounded-lg object-fill md:h-64 ' />
            <h4 className='text-2xl  xs:text-4xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                QuoteGenerator
            </h4>
            <div className='absolute bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                <img src={react} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={firebase} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={tailwind} alt="tailwind" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
               
            </div>
        </a>
      
       
          
    
           </div> */}
        
            <div className='p-1 py-2 grid grid-cols-1  my-4 sm:px-4 lg:grid-cols-2'>
                
                {/*First Project*/ }
                <div className='m-2 p-2 my-1 backdrop-blur-sm rounded-lg px-4 py-2 border-2 bg-white drop-shadow-2xl'>
                            <div>
                                <h2 className="text-lg   xs:text-2xl tracking-widest font-extrabold font-monst m-1 text-left text-[#FF6F61]">Quizzi</h2>
                            </div>
                            <div className='flex justify-center   '>
                                  <img src={quizzimockup} alt="quizzimockup" loading="lazy" className='h-38 xss:h-34 md:h-42' />
                            </div>
                       <div>
                            <div className='flex items-center justify-between '>
                                    <div className='flex  items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                                        <img src={java} alt="tailwind" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                        <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                        <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Link to="https://github.com/Kaungsett45/QuzziSystem" target="_blank">
                                        <button className='flex items-center font-monst font-bold m-1  border-2 shadow-lg bg-[#1A8B9C] border-[#1A8B9C] rounded-full text-sm xs:text-base md:text-lg'>
                                        <FontAwesomeIcon icon={faGithub} className='text-white mx-1 my-1 w-6 h-6 sm:w-9 sm:h-9 xs:w-7 xs:h-7 md:w-8 md:h-8'/>
                                        </button>
                                        </Link>
                                        <Link to="https://drive.google.com/file/d/1dS7NgOjawJAhvOGwJJ8wSl1UwvjRwLtT/view?usp=sharing" target="_blank" className='flex items-center bg-[#1A8B9C] px-4 py-2 text-white rounded-full font-mari'>Demo  <img src={arrow} alt="right" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' /></Link>
                                    </div>
                            </div>
                       </div>
                </div>

                {/*Second Project*/ }
                <div className='m-2 p-2 my-1 backdrop-blur-sm rounded-lg px-4 py-2 border-2 bg-white drop-shadow-2xl'>
                            <div>
                                <h2 className="text-lg   xs:text-2xl tracking-widest font-extrabold font-monst m-1 text-left text-[#FF6F61]">Rublet</h2>
                            </div>
                            <div className='flex justify-center   '>
                                  <img src={moviemockup} alt="Rubletmockup" loading="lazy"  className='h-38 xss:h-34 md:h-42' />
                            </div>
                       <div>
                            <div className='flex items-center justify-between '>
                                    <div className='flex  items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                                    <img src={java} alt="tailwind" className='w-6 h-5 sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={spring} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                <img src={css} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Link to="https://github.com/Kaungsett45/Rublet" target="_blank">
                                        <button className='flex items-center font-monst font-bold m-1  border-2 shadow-lg bg-[#1A8B9C] border-[#1A8B9C] rounded-full text-sm xs:text-base md:text-lg'>
                                        <FontAwesomeIcon icon={faGithub} className='text-white mx-1 my-1 w-6 h-6 xs:w-7 sm:w-9 sm:h-9 xs:h-7 md:w-8 md:h-8'/>
                                        </button>
                                        </Link>
                                        <Link to="https://drive.google.com/file/d/1kMMMkJqDOxg3yYGkUObZooxXWka_r863/view?usp=sharing" target="_blank" className='flex items-center bg-[#1A8B9C] px-4 py-2 text-white rounded-full font-mari'>Demo  <img src={arrow} alt="right" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' /></Link>
                                    </div>
                            </div>
                       </div>
                </div>
                {/*Third Project*/ }
                <div className='m-2 p-2 my-1 backdrop-blur-sm rounded-lg px-4 py-2 border-2 bg-white drop-shadow-2xl'>
                            <div>
                                <h2 className="text-lg   xs:text-2xl tracking-widest font-extrabold font-monst m-1 text-left text-[#FF6F61]">QuoteGenerator</h2>
                            </div>
                            <div className='flex justify-center   '>
                                  <img src={quotemockup} alt="Rubletmockup"  loading="lazy" className='h-38  xss:h-34 md:h-42' />
                            </div>
                       <div>
                            <div className='flex items-center justify-between '>
                                    <div className='flex  items-center space-x-2 my-1 border-2 border-[#1A8B9C] rounded-full p-1 sm:p-2'>
                                            <img src={react} alt="react" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                            <img src={firebase} alt="firebase" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                            <img src={tailwind} alt="tailwind" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' />
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <Link to="https://github.com/Kaungsett45/quotegenerator" target="_blank">
                                        <button className='flex items-center font-monst font-bold m-1  border-2 shadow-lg bg-[#1A8B9C] border-[#1A8B9C] rounded-full text-sm xs:text-base md:text-lg'>
                                        <FontAwesomeIcon icon={faGithub} className='text-white mx-1 my-1  w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 md:w-8 md:h-8'/>
                                        </button>
                                        </Link>
                                        <Link to="https://drive.google.com/file/d/1XK7gtD-9WAjZroafdMeEF7cW7B5udbIh/view?usp=sharing" target="_blank" className='flex items-center bg-[#1A8B9C] px-4 py-2  text-white rounded-full font-mari '>Demo  <img src={arrow} alt="right" className='w-6 h-5  sm:w-8 sm:h-8 md:w-6 md:h-6' /></Link>
                                    </div>
                            </div>
                       </div>
                </div>
            </div>
      </>
  )
}


