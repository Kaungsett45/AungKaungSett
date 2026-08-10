
import { Outlet, NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <>
        <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
        >
            <nav className="flex items-center justify-between px-6 py-5 mt-3 border border-gray-100 shadow-sm bg-white/80 backdrop-blur-sm rounded-xl">
                <NavLink 
                    to="/" 
                    className="text-xl font-roboto font-extrabold tracking-wide text-[#1A8B9C] hover:scale-105 transition-transform duration-300 xs:text-2xl sm:text-3xl"
                >
                    PORTFOLIO
                </NavLink>
                
                <Link 
                    to="https://drive.google.com/file/d/1Og3o4x_X04XnEujkFoAPv7GiwEzR2U8e/view?usp=sharing" 
                    target="_blank"
                    className='bg-[#1A8B9C] text-white px-4 py-2 rounded-lg font-monst font-semibold hover:bg-[#2DA5B8] transition-colors duration-300 xs:text-lg shadow-md hover:shadow-lg'
                >
                    RESUME
                </Link>
            </nav>
        </motion.div>

       
          <Outlet/>
     
        </>
    )
}