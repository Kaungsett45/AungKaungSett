import star from '../../public/star.svg'
import { Outlet ,NavLink } from 'react-router-dom'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

export default function Navigation(){

   

    return(
        <>
        <nav className="px-2 py-1 relative flex justify-between items-center items-align ">
        <motion.div
  initial={{ scale: 0 }}
  animate={{ rotate: 360, scale: 1 }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20
  }}
>
            <h2 ><NavLink to="/" className='text-base font-roboto font-bold rounded-full  bg-[#204057] text-white py-1 px-3 xs:text-xl sm:text-2xl'>AKS</NavLink></h2>
    </motion.div>
            <div className=' flex  items-center items-align'>
                <p className='mx-4 font-bold font-roboto text-lg xs:text-xl sm:mx-8 '><NavLink to="/blogs">Blogs</NavLink></p>
                <Link to= "https://drive.google.com/file/d/1s3RxfT8VOWmW8BNIM5YyQeB-lXlFZwnC/view?usp=sharing" target="_blank">
                <button className='
                text-sm font-roboto font-bold text-white  py-1 px-2 rounded-full border-4 border-[#204057] xs:border-6 xs:px-4
                sm:border-7 sm:px-6 sm:text-lg
                '
                 style={{ backgroundColor: '#1A8B9C' }}
                >RESUME</button></Link>
            </div>

            
        </nav>

       
          <Outlet/>
     
        </>
    )
}