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
        className="absolute tracking-wide right-0 text-center text-lg  font-extrabold w-[110px] py-1 px-2 rounded-tr-xl rounded-tl-xl font-rale xs:text-2xl xs:py-2 xs:w-[130px] lg:text-2xl"
        style={{ color: "#1A8B9C" }}
      >
        INTRO
      </h2>

      <div
        className=" font-medium my-8 p-4 rounded-l-lg font-mari  rounded-b-lg text-xs xs:text-lg xs:p-6 "
        style={{ color: "#686D76" }}
      >
        {/*first para*/}
        {first && (
          <>
         <div className='xl:h-[260px]'>
            <p className=" text-pretty leading-5 pb-3">
              I began my programming journey during 2022,
              initially focusing on IT and FE exams from ITPEC.
            </p>
            <p className=" text-pretty leading-5 pb-3">
              This experience allowed me to acquire valuable knowledge related
              to IT and other areas. During this time, I started learning Java,
            </p>
            <p className=" text-pretty leading-5 pb-2">
              which was necessary to pass the exams. Java quickly became my main
              programming language, and I began working with Spring.
            </p>
            </div>
          </>
        )}

        {/*Seccond para*/}
        {second && (
          <>
           <div className='xl:h-[260px]'>
            <p className="leading-5 pb-3">
            In 2024, my focus shifted towards frameworks, especially React.
             I became captivated by its potential and decided to pursue a career.
            </p>
            <p className="leading-5 pb-3">
            Currently, I'm deepening my expertise in React, exploring all aspects of development with it,
             while also nurturing my interest in UI/UX design.
            </p>
            <p className="leading-5 pb-2">
            Explore my portfolio to see my projects and recent work with React, 
            Node.js,and my evolving UI/UX design skills.
            </p>
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
