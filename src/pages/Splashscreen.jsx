import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function SplashVariation1() {
  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-gray-50">
      <motion.div
        className="absolute w-72 h-72 bg-[#1A8B9C]/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="flex items-center justify-center mb-8">
          {['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'].map((letter, index) => (
            <motion.h1 
              key={index} 
              className="mx-1 font-roboto font-extrabold text-3xl md:text-5xl text-[#1A8B9C]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring" }}
            >
              {letter}
            </motion.h1>
          ))}
        </div>
        
        <motion.div className="mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          {/* <div className="w-16 h-0.5 bg-[#1A8B9C] mx-auto mb-3"></div> */}
          <p className="text-lg font-medium tracking-wide text-gray-700">Aung Kaung Sett</p>
          <p className="mt-1 text-sm text-gray-500">Developer</p>
        </motion.div>
        
        <motion.div className="w-16 h-1 mx-auto overflow-hidden bg-gray-200 rounded-full" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
          <motion.div
            className="h-full bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] rounded-full"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}



function SplashVariation2() {
  return (
    <div className="fixed inset-0 flex items-center justify-center font-mono text-green-400 bg-slate-900">
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div className="mb-8 text-left">
          <div className="mb-2 text-gray-500">// Loading portfolio...</div>
          <div className="text-white">
            <span className="text-blue-400">const</span>{" "}
            <span className="text-yellow-400">developer</span> = {"{"}
          </div>
          <div className="ml-4 text-white">
            name: <span className="text-green-400">"Aung Kaung Sett"</span>,
          </div>
          <div className="ml-4 text-white">
            role: <span className="text-green-400">"Developer"</span>,
          </div>
          <div className="text-white">{"}"};</div>
        </motion.div>
        
        <motion.div className="flex items-center justify-center space-x-1">
          <span className="text-gray-400">$</span>
          <motion.span
            className="text-[#1A8B9C]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            _
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
}

function SplashVariation3() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <motion.div className="text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <motion.div
          className="w-24 h-24 border-4 border-[#1A8B9C] rounded-full mb-8 mx-auto flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="text-2xl font-bold text-[#1A8B9C]">AKS</div>
        </motion.div>
        
        <motion.h2
          className="mb-2 text-2xl font-light text-gray-800"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Aung Kaung Sett
        </motion.h2>
        
        <motion.div className="flex justify-center space-x-1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-[#1A8B9C] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function SplashScreen() {
  const [loading, setLoading] = useState(true);
  const [variation] = useState(1);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  const variations = {
    1: <SplashVariation1 />,
    2: <SplashVariation2 />,
    3: <SplashVariation3 />,
  };

  return variations[variation];
}
