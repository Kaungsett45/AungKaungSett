import React from "react";
import { useState } from "react";
export default function Introparagraph() {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  let ShowFirst = () => {
    setFirst(true);
    setSecond(false);
  };

  let ShowSecond = () => {
    setFirst(false);
    setSecond(true);
  };

  return (
    <>
      <h2
        className="flex justify-end tracking-wide right-0 text-center text-lg  font-extrabold  py-1 px-2 rounded-tr-xl rounded-tl-xl font-rale xs:text-2xl xs:py-2 xs:w-[130px] lg:text-2xl"
        style={{ color: "#1A8B9C" }}
      >
        INTRO
      </h2>

      <div
        className=" font-medium my-8 p-4 rounded-l-lg font-mari  rounded-b-lg text-sm xs:text-lg xs:p-6 
         leading-4  rounded-md mt-4 
             dark:shadow-[0_0_6px_rgba(26, 139, 156, 0.3)] dark:hover:shadow-[0_0_10px_rgba(26, 139, 156, 0.5)]"
        style={{ color: "#686D76" }}
      >
        {/*first para*/}
        {first && (
          <>
         <div className='xl:h-[260px] xss:h-[220px]'>
            <p className="pb-3 leading-5 text-left ">
            🚀 My programming journey began in 2022, where I focused on IT  with ITPEC. During this time, I discovered my passion for Java and quickly, diving into Spring. 
            </p>
            <p className="pb-3 leading-5 text-left">
            ⚡ In 2024, my focus shifted to React, a framework that captivated me with its potential. Since then, I've been honing my skills in both React development and UI/UX design, exploring new ways to create intuitive user experiences.
            </p>
            </div>
          </>
        )}

        {/*Seccond para*/}
        {second && (
          <>
           <div className='xl:h-[260px] xss:h-[220px]'>
            <p className="pb-3 leading-5">
            💡 Take a look at my portfolio to explore my projects, including work with React, Node.js, and my evolving UI/UX design skills.   </p>
            <p className="pb-3 leading-5">
            🤝 Let's connect and build something extraordinary! ✨ </p> 
            </div>
          </>
        )}

        <div className="flex justify-end">
          <button aria-label="first-pg"
            className={` w-4 h-4 mx-1 rounded-full border-2 border-black  ${first ? 'bg-[#FF6F61]' : 'bg-white'}`}
            onClick={ShowFirst}
          ></button>
          <button aria-label="second-pg"
            className={` w-4 h-4 mx-1 rounded-full border-2 border-black ${second ? 'bg-[#FF6F61]' : 'bg-white'}`}
            onClick={ShowSecond}
          ></button>
        </div>
      </div>
    </>
  );
}
