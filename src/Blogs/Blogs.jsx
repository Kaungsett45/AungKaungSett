import React from 'react'
            
import jsimg from '../../public/reactvirtual.svg'
import view from '../../public/view.svg'
import reuse from '../../public/Reusest.svg'
import { Link } from 'react-router-dom'
export default function Blogs() {
  return (
    <div className='md:grid md:grid-cols-2'>
        <div className='mx-4 my-2 border-2  shadow-lg backdrop-blur-sm rounded-lg drop-shadow-2xl px-2 min-h-[26vh]'>
              <img src={jsimg} alt="" className='my-2 w-full rounded-lg' />
                 
              <div className='flex items-center justify-between mx-2 my-1'>
                   <p className='font-mari text-xs'>6-Aug-24</p>
                  <Link to="/blg-1" className='bg-[#1A8B9C] px-4 py-1 text-white rounded-full font-mari'>Read</Link>
              </div>
        </div>
        <div className='mx-4 my-2 border-2  shadow-lg backdrop-blur-sm rounded-lg drop-shadow-2xl px-2 min-h-[26vh]'>
              <img src={reuse} alt="" className='my-2 w-full rounded-lg' />
                 
              <div className='flex items-center justify-between mx-2 my-1'>
                  <p className='font-mari text-xs'>11-Aug-24</p>  
                  <Link to="/blg-2" className='bg-[#1A8B9C] px-4 py-1 text-white rounded-full font-mari'>Read</Link>
              </div>
        </div>
        <div className='mx-4 my-2 border-2  shadow-lg backdrop-blur-sm rounded-lg drop-shadow-2xl px-2 min-h-[26vh]'>
              <img src={reuse} alt="" className='my-2 w-full rounded-lg' />
                 
              <div className='flex items-center justify-between mx-2 my-1'>
                  <p className='font-mari text-xs'>6-aug-24</p>  
                  <Link to="" className='bg-[#1A8B9C] px-4 py-1 text-white rounded-full font-mari'>Read</Link>
              </div>
        </div>
    </div>
  )
}
