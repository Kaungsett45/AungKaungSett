import React , {useState } from 'react'
import cross from '../../public/cross.svg'
import book from '../../public/book.svg'
import camera from '../../public/camera.svg'

import { Link } from 'react-router-dom'

import react from '../../public/react.svg'
import node from '../../public/node.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import tailwind from '../../public/tailwind.svg'
import rublet from '../../public/video/Rublet.mp4'
export default function Project({showPj}) {
  
  const [color ,setColor] = useState(true);
  const [color2 ,setColor2] = useState(false);
  return (
    <>
      <div className='p-1 py-2' >

        <a href="https://github.com/Kaungsett45/Rublet"  target="_blank" className='backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center  drop-shadow-2xl'>
            <video src={rublet} autoPlay loop muted preload="auto" className='w-full rounded-lg' />
            <h4 className='text-2xl tracking-widest font-extrabold font-monst m-1 text-center text-[#FF6F61] absolute inset-0 flex items-center justify-center'>
                Rublet
            </h4>
        </a>
          
    
           </div>
        
   
      </>
  )
}
