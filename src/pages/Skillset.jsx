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
import { motion } from 'framer-motion';
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
        <motion.div 
            className="relative glass-card p-6 my-8 mx-2"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h2 className="mx-4 font-rale font-extrabold tracking-wide text-lg xs:text-xl lg:text-3xl bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent">
                    SKILL SETS
                </h2>
            </motion.div>
            
            <motion.img 
                src={star} 
                alt="Star" 
                className='absolute right-4 w-4 xs:w-6 opacity-60'
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <div className='flex overflow-x-hidden mt-4'>
                <div>
                    <div className="flex flex-row my-8 logo-wrapper"> 
                        {images.map((image, index) => (
                            <motion.div 
                                key={index}
                                className="skill-icon mx-4 p-3 glass-card hover-lift"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-12 h-12" 
                                />
                            </motion.div>
                        ))}
                        
                        {images.map((image, index) => (
                            <motion.div 
                                key={`duplicate-${index}`}
                                className="skill-icon mx-4 p-3 glass-card hover-lift"
                                whileHover={{ scale: 1.1, y: -5 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt} 
                                    className="w-12 h-12" 
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
            
            <motion.img 
                src={star} 
                alt="Star" 
                className='absolute left-4 bottom-4 w-3 lg:w-4 opacity-40'
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
        </motion.div>
        </>
    )
}