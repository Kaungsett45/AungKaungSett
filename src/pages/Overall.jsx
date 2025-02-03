import React, { Profiler } from "react";
import star from "../../public/star.svg";
import profile from "../../public/profile3.png";
import Introparagraph from "./Introparagraph";
import AnimatedContent from "../component/AnimatedContent.jsx";
import { useMediaQuery } from "react-responsive";
import ImIntro from "../component/Profile";
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
           
          
            <ImIntro></ImIntro>
           

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
