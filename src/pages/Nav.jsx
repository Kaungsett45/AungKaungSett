
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
            <nav className="mt-3 py-5 px-6 flex justify-between items-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-100">
                <NavLink 
                    to="/" 
                    className="text-xl font-roboto font-extrabold tracking-wide text-[#1A8B9C] hover:scale-105 transition-transform duration-300 xs:text-2xl sm:text-3xl"
                >
                    PORTFOLIO
                </NavLink>
                
                <Link 
                    to="https://drive.google.com/file/d/1k93CoLzg3DmkOgl5yGklM31xO9eDwJ_E/view?usp=sharing" 
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