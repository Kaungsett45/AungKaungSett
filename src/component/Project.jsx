import React from 'react'
import cross from '../../public/cross.svg'
import book from '../../public/book.svg'
import camera from '../../public/camera.svg'
import win from '../../public/window.svg'

import react from '../../public/react.svg'
import node from '../../public/node.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import tailwind from '../../public/tailwind.svg'
export default function Project({showPj}) {
  return (
    
    <div className='p-4 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center xl:px-[160px]'>
       <div className='bg-white w-full rounded-lg'>
            <div className='rounded-t-lg rounded-tr-lg px-4 py-2 flex justify-between items-center bg-[#204057]'>  
                    <h2 className='text-[#FF6F61] text-base  font-extrabold  font-monst'>Projects</h2>
                    <button className='w-10' onClick={showPj}><img src={cross} alt="" /></button>
            </div>
           
                <div className='flex justify-between p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                    <div>
                        <img src={camera} alt="music" className='w-26 h-32'  loading="lazy"/>
                       
                    </div>
                    <div>
                         <p className='font-mari text-sm font-bold text-center py-1'>Voting Project</p>
                         <div className='flex items-align m-2'>
                            <button className='flex items-center font-monst font-bold  mx-2 py-2 px-2 border-2 shadow-lg border-[#1A8B9C] bg-[#1A8B9C] text-white rounded-[6px] p-2 text-sm xs:text-base md:text-lg'>
                                <FontAwesomeIcon icon={faGithub} className='mx-1 w-6 h-6 xs:w-7 xs:h-7 md:w-8 md:h-8 '/>Github
                            </button>
                            <button className='flex items-center font-monst font-bold   border-2 shadow-lg border-[#1A8B9C] rounded-[6px] p-2 text-sm xs:text-base md:text-lg  bg-[#1A8B9C] text-white'>
                              <img src={book} alt="book pdf"  className='w-8'/>
                            </button>
                        </div>
                        <div className="flex justify-end m-1">
                          <div className='flex items-center border-2 rounded-full  p-1'>
                            <img src={react} alt="react" className='w-6 mx-2'/>
                            <img src={node} alt="nodejs" className='w-6 mx-2'/>
                          </div>
                        </div>


                    </div>
                </div>
                <div className="flex justify-center p-2 ">
          <button
            className={` w-4 h-4 mx-1 rounded-full bg-black `}
         
          ></button>
          <button
            className={` w-4 h-4 mx-1 rounded-full bg-black `}

          ></button>
        </div>
       </div>
      
    </div>
  )
}
