import React from 'react'
import bgimg from '../../public/blog.svg'
export default function Blogs() {
  return (
    <div className="min-h-screen">
          <div className='my-4 mx-2 flex justify-between items-align border-[#1A8B9C] border-2 p-3 rounded-lg'>
            <img src={bgimg} alt="blog-icon" />
            <div className='text-right '>
                <h4 className='text-base font-mari font-bolder'>Recommended Song</h4>
                <span className='text-xs'>27/4/2024</span>
            </div>
          </div>
          <div className='my-4 mx-2 flex justify-between items-align border-[#1A8B9C] border-2 p-3 rounded-lg'>
            <img src={bgimg} alt="blog-icon" />
            <div className='text-right '>
                <h4 className='text-base font-mari font-bolder'>Dududada Song</h4>
                <span className='text-xs'>27/4/2024</span>
            </div>
          </div>
    </div>
  )
}
