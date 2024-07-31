import React from 'react'
import bgimg from '../../public/blog.svg'
import thanks from '/public/thanksgif.gif'
export default function Blogs() {
  return (
    <div className="flex flex-col min-h-screen">
          <div className='my-12 mx-2 flex justify-between items-align border-[#1A8B9C] border-2 p-3 rounded-lg'>
            
            <div className='text-right '>
            <h2 className='text-center font-bold font-mari my-'>🚧 I'm Working on Something Great! 🚧</h2>
        <p className=' m-2 text-left '>
            Thank you for visiting this portfolio! i'm currently making some exciting updates to enhance your experience. 
           
        </p>
            </div>
            
          </div>
          {/* <div className='my-4 mx-2 flex justify-between items-align border-[#1A8B9C] border-2 p-3 rounded-lg'>
            <img src={bgimg} alt="blog-icon" />
            <div className='text-right '>
                <h4 className='text-base font-mari font-bolder'>Dududada Song</h4>
                <span className='text-xs'>27/4/2024</span>
            </div>
          </div> */}
          
          <div className='flex justify-center my-12'>
            <img src={thanks} alt="thank you" className='w-52' />
          </div>
    </div>
  )
}
