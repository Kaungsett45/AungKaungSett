import React from "react";
import star from "../../public/star.svg";
import profile from "../../public/profile3.png";
import Introparagraph from "./Introparagraph";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import AnimatedContent from "../component/AnimatedContent.jsx";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Skillset from "./Skillset";
import Experience2 from "../component/Experience2";

export default function Overall() {
  const isMobile = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <AnimatedContent>
        <div className="px-2 py-1 relative flex justify-between  my-4 ">
          <div className="md:max-w-[420px]">
            <img src={star} alt="Star" className="absolute right-3 w-4" />
            <div className="">
              <p className="text-xl font-monst font-bold leading-8 xs:text-lg md:text-2xl">
                Hello 👋 !
              </p>
              <div className="flex text-sm font-monst font-bold ml-4 leading-6 xs:text-base md:text-lg ">
                {" "}
                I AM
                <div className="h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.xl)*theme(lineHeight.tight))] overflow-hidden">
                  <ul className="animate-text-slide leading-tight ">
                    <li
                      className=" mx-2 text-base font-monst xs:text-lg md:text-xl"
                      style={{ color: "#1A8B9C" }}
                    >
                      AUNG KAUNG SETT....
                    </li>
                    <li
                      className="mx-2 text-base font-monst xs:text-lg md:text-xl"
                      style={{ color: "#1A8B9C" }}
                    >
                      Full-stack Developer....
                    </li>
                    
                    {/* <li className='mx-2 text-base font-monst xs:text-lg md:text-xl'  style={{ color: '#1A8B9C' }}>UI/UX Designer....</li> */}
                    <li
                      aria-hidden="true"
                      className="mx-2 text-base font-monst xs:text-lg md:text-xl"
                      style={{ color: "#1A8B9C" }}
                    >
                      AUNG KAUNG SETT....
                    </li>
                  </ul>
                </div>
              </div>
              {/* <p className='text-xs leading-10'>I _M A K E _T H E _C O M P L E X _S I M P L E .</p> */}
            </div>
            {/* <div className="flex justify-center m-4">
              <div className=" w-64 h-64 rounded-full border-2  block md:hidden bg-white">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full rounded-full object-cover bg-transparen"
                />
              </div>
            </div> */}

            <div className="flex justify-center  items-center my-6">
              {/* <hr className="border-2 border-[#1A8B9C] my-2 w-full xs:w-38 sm:w-40" /> */}
               
              <Link to="https://github.com/Kaungsett45" target="_blank">
                            <button className="flex border-[#1A8B9C] rounded-full items-center font-monst font-bold mx-2 py-2 px-6 border-2  ">
                
               
                Github
              </button>

              </Link>
              <Link to= "https://drive.google.com/file/d/16oTYIA3kZ4k-uCJyoT-uSv5p66g7yD_l/view?usp=drive_link" target="_blank">
                <button className='
               flex border-[#1A8B9C] rounded-full items-center font-monst font-bold mx-2 py-2 px-6 border-2 
                '
                >RESUME</button></Link>
         </div>

            <div className="relative border-[2px] border-transparent text-white">
              <Introparagraph />
            </div>
          </div>
          {isMobile ? (
            <div className="flex justify-center items-center mx-8 ">
              <div className="w-64 h-64 imgcontain bg-white">
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full rounded-full object-cover bg-white"
                />
              </div>
            </div>
          ) : (
            <div className="w-64 h-64 hidden bg-transparen">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full rounded-full object-cover bg-white"
              />
            </div>
          )}
        </div>
      </AnimatedContent>

      <div className="">
        <AnimatedContent>
          <Skillset />
        </AnimatedContent>
        <AnimatedContent>
          <Experience2 />
        </AnimatedContent>
      </div>

      {/* <AnimatedContent>
        <Project />
      </AnimatedContent> */}
    </>
  );
}
