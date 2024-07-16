
import java from '../../public/java.svg'
import react from '../../public/react.svg'
import css from '../../public/css.svg'
import spring from '../../public/spring.svg'
import html from '../../public/html.svg'
import js from '../../public/js.svg'
import star from '/star.svg';
import React, { useState } from 'react';
export default function Middlepage(){

    const [images, setImages] = useState([
      
        { id: 1, src: '../../public/html.svg', alt: 'HTML' },
        { id: 2, src: '../../public/css.svg', alt: 'CSS' },
        { id: 3, src: '../../public/js.svg', alt: 'JavaScript' },
        { id: 4, src: '../../public/react.svg', alt: 'React' },
        { id: 5, src: '../../public/java.svg', alt: 'Java' },
        { id: 6, src: '../../public/spring.svg', alt: 'Spring' },

      ]);
    
      const [svgFillColors, setSvgFillColors] = useState({
        first: 'black',
        second: 'none'
      });
    
      const initialImages = [
        { id: 1, src: '../../public/html.svg', alt: 'HTML' },
        { id: 2, src: '../../public/css.svg', alt: 'CSS' },
        { id: 3, src: '../../public/js.svg', alt: 'JavaScript' },
        { id: 4, src: '../../public/react.svg', alt: 'React' },
        { id: 5, src: '../../public/java.svg', alt: 'Java' },
        { id: 6, src: '../../public/spring.svg', alt: 'Spring' },
   ];
    
      const handleClick = () => {
        if (JSON.stringify(images) === JSON.stringify(initialImages)) {
          const newImages = [
            { id: 1, src: '../../public/tailwind.svg', alt: 'tailwind' },
            { id: 2, src: '../../public/figma.svg', alt: 'Figma' },
            { id: 3, src: '../../public/git.svg', alt: 'Git' },
            { id: 4, src: '../../public/node.svg', alt: 'Node js' },
            { id: 5, src: '../../public/firebase.svg', alt: 'firebase' },
          ];
          setImages(newImages);
        } else {
          setImages(initialImages);
        }
        setSvgFillColors(prevState => ({
          first: prevState.first === 'black' ? 'white' : 'black',
          second: prevState.second === 'none' ? 'black' : 'none'
        }));
      };
    
    return(

        <>
           <div className="relative">
           <img src={star} alt="Star" className='absolute right-2 w-3 xs:w-6'/>
            
            <div  style={{ borderRadius: '0 0 100px 0' }} className="cut-corner">
                <h2 className="mx-2 font-rubik text-lg xs:text-xl "   style={{ color: '#FFDAB9' }}>Skill Set</h2>
            </div>

            <div className='flex items-center'>
                <div className="m-5  w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill={svgFillColors.first} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 my-1 cursor-pointer" onClick={handleClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" fill={svgFillColors.second} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 my-1 cursor-pointer" onClick={handleClick}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
      </svg>

                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 my-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 0 1 7.5 5.25h9a2.25 2.25 0 0 1 2.25 2.25v9a2.25 2.25 0 0 1-2.25 2.25h-9a2.25 2.25 0 0 1-2.25-2.25v-9Z" />
                    </svg> */}

                </div>
                <div className=' my-6'>
                   
                   
                    <div className="flex flex-wrap mx-2 -my-2">
                        {images.map((image) => (
                        <div key={image.id} className="card border-2 border-gray-500 rounded-sm">
                            <img src={image.src} alt={image.alt} />
                        </div>
                        ))}
                    </div>
                </div>
         
            </div>
                <img src={star} alt="Star" className='absolute left-2 w-3 '/>
           </div>
        </>
    )
}