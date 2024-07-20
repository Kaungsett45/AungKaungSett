
import java from '../../public/java.svg'
import react from '../../public/react.svg'
import css from '../../public/css.svg'
import spring from '../../public/spring.svg'
import html from '../../public/html.svg'
import js from '../../public/js.svg'
import star from '/star.svg';
import tailwind from '../../public/tailwind.svg'
import figma from '../../public/figma.svg'
import git from '../../public/git.svg'
import node from '../../public/node.svg'
import firebase from '../../public/firebase.svg'
import React, { useState } from 'react';
export default function Middlepage(){
    const [color ,setColor] = useState(true);
    const [color2 ,setColor2] = useState(false);
    const [images, setImages] = useState([
      
        { id: 1, src: html, alt: 'HTML' },
        { id: 2, src: css, alt: 'CSS' },
        { id: 3, src: js, alt: 'JavaScript' },
        { id: 4, src: react , alt: 'React' },
        { id: 5, src: java, alt: 'Java' },
        { id: 6, src: spring, alt: 'Spring' },

      ]);
    
    
          const handleClick = () => {
            const newImages = [
                { id: 1, src: html, alt: 'HTML' },
                { id: 2, src: css, alt: 'CSS' },
                { id: 3, src: js, alt: 'JavaScript' },
                { id: 4, src: react , alt: 'React' },
                { id: 5, src: java, alt: 'Java' },
                { id: 6, src: spring, alt: 'Spring' },
           ];
            setImages(newImages);
            setColor(true);
            setColor2(false);
          

        };
    
      const handleClick2 = () => {
          const newImages = [
            { id: 1, src: tailwind, alt: 'tailwind' },
            { id: 2, src: figma, alt: 'Figma' },
            { id: 3, src: git, alt: 'Git' },
            { id: 4, src: node, alt: 'Node js' },
            { id: 5, src: firebase, alt: 'firebase' },
          ];
          setImages(newImages);
         setColor(false);
         setColor2(true);
          
    
      };
    
    return(

        <>
           <div className="relative">
           <img src={star} alt="Star" className='absolute right-2 w-3 xs:w-6'/>
            
            <div  style={{ borderRadius: '0 0 100px 0' }} className="cut-corner">
                <h2 className="mx-1 font-rale font-extrabold tracking-wide  text-lg xs:text-x"   style={{ color: '#FFDAB9' }}>SKILL SET</h2>
            </div>

            <div className='flex items-center md:w-[410px]'>
                <div className="m-5  w-8">
          
      <button  className={`w-4 h-4 mx-1 my-1 cursor-pointer rounded-full border-2 border-black ${color ? 'bg-[#FF6F61]' : ''}`} onClick={handleClick}></button>
      <button  className={`w-4 h-4 mx-1 my-1 cursor-pointer rounded-full border-2 border-black ${color2 ? 'bg-[#FF6F61]' : ''}`} onClick={handleClick2}></button>
      
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