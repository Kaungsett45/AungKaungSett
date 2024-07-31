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
      <div className='p-2 ' >

          <div className='backdrop-blur-sm rounded-lg px-4 py-2 flex justify-between items-center bg-[#204057] drop-shadow-md'>
          <a href="https://github.com/Kaungsett45/Rublet" className=''>
          <h4 className='text-xs m-1 text-center text-white'>Rublet</h4>
          <video  src={rublet} autoPlay loop muted className='w-full rounded-lg'></video>
          </a>
          </div>
      </div>
    
        
   
      </>
  )
}
