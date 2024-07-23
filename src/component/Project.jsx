import React from 'react'
import cross from '../../public/cross.svg'
import vg from '../../public/vg.svg'
import music from '../../public/music.svg'
import camera from '../../public/camera.svg'
export default function Project({showPj}) {
  return (
    
    <div className='p-4 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
       <div className='bg-white w-full rounded-lg'>
            <div className='rounded-t-lg rounded-tr-lg px-4 py-2 flex justify-between items-center bg-[#204057]'>  
                    <h2 className='text-[#FF6F61] text-base  font-extrabold  font-monst'>Hobbies</h2>
                    <button className='w-10' onClick={showPj}><img src={cross} alt="" /></button>
            </div>
           
                <div className='flex justify-between items-center p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                    <img src={camera} alt="music" className='w-16'  loading="lazy"/>
                    <p className='font-mari text-sm font-bold'>project coming</p>
                </div>
           
       </div>
    </div>
  )
}
