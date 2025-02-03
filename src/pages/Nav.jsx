
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
      <nav className="mt-2 py-1 relative  flex  justify-between items-center ">
    
            <h2 ><NavLink to="/" 
               className="relative bg-[#1A8B9C] text-base font-roboto font-extrabold tracking-wide text-[#e2e9ee] py-2 px-4 xs:text-xl sm:text-2xl 
            ">PORTFOLIO</NavLink></h2>
            <div className=' flex  items-center '>
                {/* <p className='mx-4 font-bold font-roboto text-lg xs:text-xl sm:mx-8 '><NavLink to="/blogs">Blogs</NavLink></p> */}
                <Link to= "https://drive.google.com/file/d/16oTYIA3kZ4k-uCJyoT-uSv5p66g7yD_l/view?usp=drive_link" target="_blank">
                <button className='
               flex  border-[#1A8B9C] border-2 px-3 py-1 rounded-full items-center font-monst font-bold mr-4 xs:text-lg sm:text-xl lg:text-2xl
                '
                >RESUME</button></Link>
            </div>

            
        </nav>
    </motion.div>

       
          <Outlet/>
     
        </>
    )
}