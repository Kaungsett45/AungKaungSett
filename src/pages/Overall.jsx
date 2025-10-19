import React, { Profiler } from "react";
import star from "../../public/star.svg";
import profile from "../../public/profile3.png";
import Introparagraph from "./Introparagraph";
import AnimatedContent from "../component/AnimatedContent.jsx";
import { useMediaQuery } from "react-responsive";
import ImIntro from "../component/Profile";
import Skillset from "./Skillset";
import Experience2 from "../component/Experience2";
import BentoProjects from "../component/BentoProjects";
import { motion } from "framer-motion";

export default function Overall() {
  const isMobile = useMediaQuery({ minWidth: 768 });

  return (
    <>
      <AnimatedContent>
        <div className="px-4 py-6 relative flex justify-between items-center my-8 glass-card mx-2">
          <div className="md:max-w-[480px] flex-1">
            <motion.img 
              src={star} 
              alt="Star" 
              className="absolute right-6 w-5 opacity-60" 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            <ImIntro />

            <motion.div 
              className="relative mt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Introparagraph />
            </motion.div>
          </div>
          
          {isMobile ? (
            <motion.div 
              className="flex justify-center items-center mx-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-72 h-72 imgcontain relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] rounded-full opacity-20 blur-xl"></div>
                <img
                  src={profile}
                  alt="profile"
                  className="w-full h-full rounded-full object-cover shadow-2xl border-4 border-white/30 relative z-10"
                />
              </div>
            </motion.div>
          ) : (
            <div className="w-64 h-64 hidden">
              <img
                src={profile}
                alt="profile"
                className="w-full h-full rounded-full object-cover"
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
        <AnimatedContent>
          <BentoProjects />
        </AnimatedContent>
      </div>

      {/* <AnimatedContent>
        <Project />
      </AnimatedContent> */}
    </>
  );
}
