import React, { Component } from "react";
import { motion } from "framer-motion"

const container = {
    hidden: { opacity: 1 }, // Ensuring the container itself is visible
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the children
      },
    },
  };
  
  const item = {
    hidden: { x: 300, opacity: 0 }, 
    visible: { x: 0, opacity: 1 }, 
  };

function SplashMessage() {
  return (
      <motion.div
      className="flex items-center justify-center min-h-screen font-monst font-extrabold text-lg text-[#1A8B9C] "
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
        // Put here your await requests/ API requests
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
      // while checking user session, show "loading" message
      if (this.state.loading) return SplashMessage();

      // otherwise, show the desired route
      return <WrappedComponent {...this.props} />;
    }
  };
}
