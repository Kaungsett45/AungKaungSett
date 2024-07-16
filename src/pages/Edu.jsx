import React from 'react'
import edu from '../../public/education.svg'
export default function Edu() {
  return (
    <div className='edures grid grid-cols-5 grid-rows-5 gap-4 p-4 min-h-[330px]'>
    {/* Education */}
    <div className='border-[#1A8B9C] border-4 rounded-lg col-span-3 row-span-3 flex flex-col justify-center items-center'>
      <div className='w-16 h-16'>
        <img src={edu} alt="Education" />
        
      </div>
        <h2 className='text-sm  font-rubik '>Education</h2>
    </div>
  
    {/* Loading */}
    <div className='border-[#1A8B9C] border-4  rounded-lg col-span-2 row-span-2  flex justify-center items-center'>
      <h2 className='text-sm  font-rubik '>Loading</h2>
    </div>
  
    {/* Project */}
    <div className='border-[#1A8B9C] border-4  rounded-lg col-span-2 row-span-3  flex justify-center items-center '
    style= {{
                   
                    backgroundImage: `url(../../public/mountain.svg)`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'bottom',
                  
                 
    }}>
      <h2  className=' text-sm font-rubik '
      style={{ textOrientation: 'upright',
                    writingMode: 'vertical-lr',
                    color: '#FF6F61'
    }}>Project</h2>
    </div>
    {/* Hobbies */}
    <div className='cursor-pointer text-white border-[#1A8B9C] border-4 rounded-lg  col-span-3 row-span-2 flex justify-center items-center bg-[url({hobbies})] '
     style={{ backgroundColor: '#204057' ,
               backgroundImage: `url(../../public/hobbies.svg)`,
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'left bottom'
              
              }}
    >
      <h2 className='font-rubik  text-sm tracking-wide'>Hobbies</h2>
    </div>
  
  </div>
  
  )
}
