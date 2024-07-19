import React from "react";
import { useState } from "react";
export default function Introparagraph() {

  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);

  let ShowFirst = () => {
    setFirst(true);
    setSecond(false);
    setThird(false);
  };

  let ShowSecond = () => {
    setFirst(false);
    setSecond(true);
    setThird(false);
  };

  return (
    <>
      <h2
        className="absolute right-0 text-center text-lg w-[100px] py-1 px-1 rounded-tr-lg rounded-tl-lg font-rubik xs:text-xl xs:py-2 xs:w-[130px]"
        style={{ color: "#FFDAB9", backgroundColor: "#1A8B9C" }}
      >
        Intro
      </h2>

      <div
        className="my-8 p-4 rounded-l-lg font-mari font-thin rounded-b-lg text-base xs:text-lg xs:p-6"
        style={{ backgroundColor: "#1A8B9C", color: "white" }}
      >
        {/*first para*/}
        {first && (
          <>
            <p className="leading-5 pb-3">
              I began my programming journey during COVID-19, initially focusing
              on Java.
            </p>
            <p className="leading-5 pb-3">
              
              After 2024, I've shifted my focus to React , node.js to enhance my
              web development. skills.
            </p>
            <p className="leading-5 pb-2">
             
              Explore my portfolio to see my projects and recent work with
              React, JavaScript,Node.js and Java .
            </p>
          </>
        )}

        {/*Seccond para*/}
        {second && (
          <>
            <p className="leading-5 pb-3">I bdflkhsdfhsva.</p>
            <p className="leading-5 pb-3">
          
              After 2024, I've shifted my focus to React , node.js to enhance my
              web development. skills.
            </p>
            <p className="leading-5 pb-2">
             
              Explore my portfolio to see my projects and recent work with
              React, JavaScript,Node.js and Java .
            </p>
          </>
        )}

        <div className="flex justify-end">
          <button
            className={`bg-white w-4 h-4 mx-1 rounded-full ${
              first ? "bg-[#FF6F61]" : ""
            }`}
            onClick={ShowFirst}
          ></button>
          <button
            className={`bg-white w-4 h-4 mx-1 rounded-full ${
              second ? "bg-[#FF6F61]" : ""
            }`}
            onClick={ShowSecond}
          ></button>
        </div>
      </div>
    </>
  );
}
