import React, { Component } from "react";
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 0 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
};
  
const item = {
    hidden: { y: 50, opacity: 0, scale: 0.5 }, 
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    }, 
};

const pulseVariants = {
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

function SplashMessage() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 flex items-center justify-center overflow-hidden">
      {/* Background animated circles */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-[#1A8B9C]/20 to-[#2DA5B8]/20 rounded-full blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-[#FF6F61]/20 to-[#FF8A75]/20 rounded-full blur-2xl"
        variants={pulseVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      />
      
      {/* Main content */}
      <motion.div
        className="glass-card p-8 rounded-3xl shadow-2xl"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="flex items-center justify-center mb-6">
          {['P', 'O', 'R', 'T', 'F', 'O', 'L', 'I', 'O'].map((letter, index) => (
            <motion.h2 
              key={index} 
              className="px-1 font-monst font-extrabold text-2xl md:text-4xl bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent"
              variants={item}
            >
              {letter}
            </motion.h2>
          ))}
        </div>
        
        {/* Modern loading dots */}
        <div className="flex justify-center space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function SplashScreen(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: true,
      };
    }

    async componentDidMount() {
      try {
         setTimeout(() => {
          this.setState({
            loading: false,
          });
        }, 3000);
      } catch (err) {
        console.log(err);
        this.setState({
          loading: false,
        });
      }
    }

    render() {
      if (this.state.loading) return SplashMessage();

      return <WrappedComponent {...this.props} />;
    }
  };
}
