
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
    const [images, setImages] = useState([
      
        { id: 1, src: html, alt: 'HTML' },
        { id: 2, src: css, alt: 'CSS' },
        { id: 3, src: js, alt: 'JavaScript' },
        { id: 4, src: react , alt: 'React' },
        { id: 5, src: java, alt: 'Java' },
        { id: 6, src: spring, alt: 'Spring' },
        { id: 7, src: tailwind, alt: 'tailwind' },
        { id: 8, src: figma, alt: 'Figma' },
        { id: 9, src: git, alt: 'Git' },
        { id: 10, src: node, alt: 'Node js' },
        { id: 11, src: firebase, alt: 'firebase' },
             
      ]);
    
    
        //   const handleClick = () => {
        //     const newImages = [
        //         { id: 1, src: html, alt: 'HTML' },
        //         { id: 2, src: css, alt: 'CSS' },
        //         { id: 3, src: js, alt: 'JavaScript' },
        //         { id: 4, src: react , alt: 'React' },
        //         { id: 5, src: java, alt: 'Java' },
        //         { id: 6, src: spring, alt: 'Spring' },
        //    ];
        //     setImages(newImages);
        //     setColor(true);
        //     setColor2(false);
          

        // };
    
    //   const handleClick2 = () => {
    //       const newImages = [
    //         { id: 1, src: tailwind, alt: 'tailwind' },
    //         { id: 2, src: figma, alt: 'Figma' },
    //         { id: 3, src: git, alt: 'Git' },
    //         { id: 4, src: node, alt: 'Node js' },
    //         { id: 5, src: firebase, alt: 'firebase' },
    //       ];
    //       setImages(newImages);
    //      setColor(false);
    //      setColor2(true);
          
    
    //   };
    
    return(

        <>
           <div className="relative">
            
            <div  >
                <h2 className="mx-4 font-rale font-extrabold tracking-wide  text-lg xs:text-x lg:text-2xl"   style={{ color: '#1A8B9C' }}>SKILL SETS</h2>
            </div>
           <img src={star} alt="Star" className=' absolute right-2 w-3 xs:w-6'/>

            <div className='flex overflow-x-hidden '>
               
                <div >
                    <div className="flex flex-row  my-8 logo-wrapper"> 
                            {images.map((image, index) => (
                                <div key={index} >
                                <img  src={image.src} alt={image.alt} className="w-16 h-16 mx-4 px-2 " />
                                </div>
                                ))}
                            
                            {images.map((image, index) => (
                                <img key={`duplicate-${index}`} src={image.src} alt={image.alt} className="w-16 h-16 mx-4 px-2" />
                                ))}
                          
                    </div>
                
                

  </div>
         
            </div>
                <img src={star} alt="Star" className='-mt-6 absolute left-2 w-3  lg:top-16 lg:w-4'/>
           </div>
        </>
    )
}