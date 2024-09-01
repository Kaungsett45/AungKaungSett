import React, { Component } from "react";
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1 }, 
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };
  
  const item = {
    hidden: { x:20, opacity: 0 }, 
    visible: { x: 0, opacity: 1 }, 
  };

function SplashMessage() {
  return (
      <motion.div
      className="flex items-center justify-center min-h-screen  overflow-hidden  font-monst font-extrabold text-lg text-[#1A8B9C] md:text-xl "
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o'].map((letter, index) => (
        <motion.h2 key={index} className="px-1" variants={item}>
          {letter}
        </motion.h2>
      ))}
    </motion.div>
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
        }, 2000);
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
