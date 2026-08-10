import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hobbies({showHobbies}) {
    return (
        <>
        <motion.div 
            className="ml-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <TypeAnimation
                sequence={[
                    "Hello! 👋", 2000, 
                    "I'm Aung Kaung Sett", 2000, 
                    "Frontend Developer", 2000,
                    "UI/UX Enthusiast", 2000,
                ]}
                speed={50}
                repeat={Infinity}
                className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-[#1A8B9C] to-[#2DA5B8] bg-clip-text text-transparent"
            />
        </motion.div>

        <motion.div 
            className="flex my-8 space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
        >
            <Link to="https://github.com/Kaungsett45" target="_blank">
                <motion.button 
                    className="xss:text-sm ml-4 glass-card px-4 py-2 xs:text-lg sm:text-xl lg:text-2xl flex items-center font-monst font-bold text-[#1A8B9C] hover:text-white hover:bg-gradient-to-r hover:from-[#1A8B9C] hover:to-[#2DA5B8] transition-all duration-300 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mr-2 transition-transform duration-300"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.54-1.4-1.32-1.76-1.32-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.82 1.24 1.82 1.24 1.06 1.82 2.78 1.3 3.46.98.1-.78.42-1.3.76-1.6-2.68-.3-5.48-1.34-5.48-5.98 0-1.3.46-2.36 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1.02-.32 3.34 1.22.98-.28 2.02-.42 3.06-.42s2.08.14 3.06.42c2.32-1.54 3.34-1.22 3.34-1.22.66 1.64.24 2.86.12 3.16.78.84 1.24 1.9 1.24 3.2 0 4.66-2.8 5.68-5.48 5.98.44.38.84 1.1.84 2.22v3.28c0 .32.22.7.84.58 4.76-1.6 8.2-6.1 8.2-11.4C24 5.37 18.63 0 12 0z"
                        />
                    </svg>
                    GitHub
                </motion.button>
            </Link>
        </motion.div>
        </>
    )

}
