import React from 'react'
import cross from '../../public/cross.svg'
import vg from '../../public/vg.svg'
import music from '../../public/music.svg'
import camera from '../../public/camera.svg'
export default function Education({showEdu}) {
  return (
    
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 lg:p-12 xl:px-[160px] overflow-y-auto">
    <div className="bg-white rounded-lg shadow-lg max-h-[90vh] w-full sm:w-3/4 md:w-1/2 lg:w-1/3 overflow-y-auto">
          <div className=' rounded-t-lg rounded-tr-lg px-4 py-2 flex justify-between items-center bg-[#204057] '>  
                    <h2 className='text-[#FF6F61] text-base  font-extrabold  font-monst lg:text-2xl'>Education</h2>
                    <button className='w-10' onClick={showEdu}><img src={cross} alt="" /></button>
            </div>
            <div className='p-4 py-2  lg:p-6 lg:py-4'>
                <div className=' p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                    <h3 className='font-rale font-extrabold text-[#FF6F61] my-1 lg:text-lg'>YMW Solutions</h3>
                    <p className='font-mari text-sm mx-2 lg:text-base'>Digital information Literacy Course
2019</p>
                </div>
                <div className=' p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                <h3 className='font-rale font-extrabold text-[#FF6F61] my-1 lg:text-lg'>Princeton</h3>
                     <p className='font-mari text-sm mx-2 lg:text-base'>English Language Proficiency
(Summer program)2019</p>
                </div>
                <div className=' p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                <h3 className='font-rale font-extrabold text-[#FF6F61] my-1 lg:text-lg'>MCPA</h3>
                    <p className='font-mari text-sm mx-2 my-1 lg:text-base'>Fundamental Information Technology
Engineer Examination (FE 2022-Oct)</p>
                    <p className='font-mari text-sm mx-2 my-1 lg:text-base'>Information Technology Passport 
Examination (IP  2022-April)</p>
                </div>
                <div className='p-2 m-2 border-[#1A8B9C] border-2 rounded-lg'>
                <h3 className='font-rale font-extrabold text-[#FF6F61] my-1 lg:text-lg'>UDEMY</h3>
                    <p className='font-mari text-sm mx-2 lg:text-base'>Figma UI/Ux :Zero to hero (2024-ApriL)</p>
                </div>
            </div>
       </div>
    </div>
  )
}
