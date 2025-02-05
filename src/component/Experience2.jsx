import React from 'react'

import codemal from '../../public/codemal.svg'
export default function Experience2() {
  return (

    <>
     
        <div className="mt-10 flex justify-end">
        <h2 className="mx-4 font-rale font-extrabold tracking-wide  text-lg xs:text-x lg:text-2xl"   style={{ color: '#1A8B9C' }}>EXPERIENCES</h2>
        </div>

        {/**Code Mal */}
        <div className='md:p-8 p-4 '>
            <div className='flex items-center'>
                 <img className="w-10 h-10 md:w-16 md:h-16 rounded-sm" src={codemal} alt="Default avatar"/>
                <h2 className='font-monst mx-2 font-semibold xs:text-md  md:text-xl '
                style={{color : "#373A40"}}>Code Mal</h2>
            </div>
            <div className='mt-2  xs:text-base md:text-lg lg:text-xl'>
                <p className=' m-1 font-semibold'
                style={ {color : '#5A5E66'}}>🛠  Frontend Developer  </p>
                <p className='m-1 font-semibold'
                style={ {color : '#5A5E66'}}>📍 2024 - Present </p>
            <div className="text-left font-mari leading-4 border-2 p-2 rounded-md mt-4 
             dark:shadow-[0_0_6px_rgba(120,120,120,0.3)] dark:hover:shadow-[0_0_10px_rgba(150,150,150,0.5)]    "> 
               <ul className='lg:ml-6 ml-4 list-disc md:text-lg lg:text-xl xss:text-xs   xs:text-sm'>
                    <li >Wrote technical content and guides for developers as content writer .</li>
                    <li>Developed UI components and improved user experience for nonprofit websites.</li>
                </ul>
                </div>
            </div>
        </div>
    </>
  )
}
