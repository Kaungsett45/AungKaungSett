import React from 'react'
import cross from '../../public/cross.svg'
import vg from '../../public/vg.svg'
import music from '../../public/music.svg'
import camera from '../../public/camera.svg'
export default function Hobbies({showHobbies}) {
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 lg:p-12 xl:px-[160px] overflow-y-auto z-50">   <div className='bg-white w-full rounded-lg'>
            <div className='rounded-t-lg rounded-tr-lg px-4 py-2 flex justify-between items-center bg-[#204057]'>  
                    <h2 className='text-[#FF6F61] text-base  font-extrabold  font-monst lg:text-2xl'>Hobbies</h2>
                    <button className='w-10' onClick={showHobbies}><img src={cross} alt="" /></button>
            </div>
            <div className='p-4 py-2 lg:p-6 lg:py-4'>
                <div className='flex justify-between items-center p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                    <img src={vg} alt="vanguard" className='w-16 lg:w-20'  loading="lazy"/>
                    <p className='font-mari text-sm font-bold lg:text-lg'>Cardfight Vanguard</p>
                </div>
                <div className='flex justify-between items-center p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                    <img src={music} alt="music" className='w-16 lg:w-20'  loading="lazy"/>
                    <p className='font-mari text-sm font-bold lg:text-lg'>Music</p>
                </div>
                <div className='flex justify-between items-center p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                    <img src={camera} alt="music" className='w-16 lg:w-20'  loading="lazy"/>
                    <p className='font-mari text-sm font-bold lg:text-lg'>Photography</p>
                </div>
            </div>
       </div>
    </div>
  )
}
