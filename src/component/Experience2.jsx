import React from 'react'

import react from '../../public/react.svg'
import codemal from '../../public/codemal.svg'
import whitestar from '../../public/whitestar.svg'
export default function Experience2() {
  return (

    <>
     
        <div className="mt-10 flex justify-end">
        <h2 className="mx-4 font-rale font-extrabold tracking-wide  text-lg xs:text-x lg:text-2xl"   style={{ color: '#1A8B9C' }}>Experiences</h2>
        </div>

        {/**Code Mal */}
        <div className='p-4 '>
            <div className='flex items-center'>
                 <img className="w-10 h-10 rounded-sm" src={codemal} alt="Default avatar"/>
                <h2 className='font-monst mx-2 font-semibold xs:text-md '>Code Mal</h2>
            </div>
            <div className='mt-2  font-semibold text-sm'>
                <p className='m-1'>🛠 Frontend Developer  </p>
                <p className='m-1'>📍 2024 - Present </p>

                <p className='text-left leading-4 border-2 p-2 rounded-md mt-4 text-xs
                dark:shadow-[0_0_6px_rgba(26,139,156,0.4)] dark:hover:shadow-[0_0_10px_rgba(26,139,156,0.6)]
                
                '>Developed UI components and improved user experience for nonprofit websites.
                    Wrote technical content and guides for developers.</p>
            </div>
        </div>
    </>
  )
}
