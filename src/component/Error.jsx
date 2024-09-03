import React from 'react'
import cloud from '/cloud.svg'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='flex flex-col items-center p-4 lg:mx-[200px] '>
       <div className="w-[460px]  ">
    <img src={cloud} alt="cloud-moving" className=" z-20 animated-image absolute top-16 xs:top-20 xs:w-32 lg:top-24 lg:w-42"/>
    <h1 className='text-[#204057] xs:text-[180px] text-center text-[120px] font-mari font-extrabold '>404</h1>
</div>


        <p className='my-4 font-mari text-center text-lg font-extrabold xs:text-[40px]  lg:text-[30px]'>Oops Sorry!</p>
        <p className='my-2 font-mari text-center text-lg font-extrabold xs:text-[20px]  lg:text-[18px]'>There's nothing to see Here !</p>
    <div className='m-8 flex justify-center'>
    <Link to="/" className='lg:text-[20px] lg:p-2 lg:px-4 xs:text-2xl text-mari font-extrabold bg-[#457582] text-white px-5 p-2 rounded-lg'>

            Go Back!!
     </Link>
    </div>
    </div>
  )
}
