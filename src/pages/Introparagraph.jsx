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
        className="absolute tracking-wide right-0 text-center text-lg  font-extrabold w-[110px] py-1 px-2 rounded-tr-lg rounded-tl-lg font-rale xs:text-xl xs:py-2 xs:w-[130px]"
        style={{ color: "#FFDAB9", backgroundColor: "#1A8B9C" }}
      >
        INTRO
      </h2>

      <div
        className="my-8 p-4 rounded-l-lg font-mari font-thin rounded-b-lg text-base xs:text-lg xs:p-6"
        style={{ backgroundColor: "#1A8B9C", color: "white" }}
      >
        {/*first para*/}
        {first && (
          <>
            <p className="leading-5 pb-3">
              I began my programming journey during the COVID-19 pandemic,
              initially focusing on IT and FE exams from ITPEC.
            </p>
            <p className="leading-5 pb-3">
              This experience allowed me to acquire valuable knowledge related
              to IT and other areas. During this time, I started learning Java,
            </p>
            <p className="leading-5 pb-2">
              which was necessary to pass the exams. Java quickly became my main
              programming language, and I began working with Spring.
            </p>
          </>
        )}

        {/*Seccond para*/}
        {second && (
          <>
            <p className="leading-5 pb-3">
              In 2024, my interest shifted towards frameworks, leading me to
              explore React. I became fascinated with JavaScript and decided to
              pursue a career as a React developer.
            </p>
            <p className="leading-5 pb-3">
              Currently, I am deepening my skills in this area, learning
              everything related to React development.
            </p>
            <p className="leading-5 pb-2">
              Explore my portfolio to see my projects and recent work with
              React, JavaScript, Node.js, and Java.
            </p>
          </>
        )}

        <div className="flex justify-end">
          <button
            className={` w-4 h-4 mx-1 rounded-full  ${first ? 'bg-[#FF6F61]' : 'bg-white'}`}
            onClick={ShowFirst}
          ></button>
          <button
            className={` w-4 h-4 mx-1 rounded-full  ${second ? 'bg-[#FF6F61]' : 'bg-white'}`}
            onClick={ShowSecond}
          ></button>
        </div>
      </div>
    </>
  );
}
