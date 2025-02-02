
import { Outlet ,NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export default function Navigation(){

   

    return(
        <>
        <motion.div
      initial={{ opacity: 0, y: -50 }} // Start hidden and above the final position
      animate={{ opacity: 1, y: 0 }} // Fade in and move to its final position
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
    >
      <nav className="mt-2 py-1 relative flex justify-between items-center items-align ">
            <h2 ><NavLink to="/" className='text-base font-roboto font-extrabold rounded-full  tracking-wide  text-[#204057] py-1 px-3 xs:text-xl sm:text-2xl'>PORTFOLIO</NavLink></h2>
            <div className=' flex  items-center items-align'>
                {/* <p className='mx-4 font-bold font-roboto text-lg xs:text-xl sm:mx-8 '><NavLink to="/blogs">Blogs</NavLink></p> */}
               
            </div>

            
        </nav>
    </motion.div>

       
          <Outlet/>
     
        </>
    )
}