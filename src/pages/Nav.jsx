import star from '../../public/star.svg'
import { Outlet ,NavLink } from 'react-router-dom'
export default function Navigation(){


    return(
        <>
        <nav className="px-2 py-1 relative flex justify-between items-center  ">
            <h2 ><NavLink to="#" className='text-lg font-portfolio font-bold xs:text-xl'>Portfolio</NavLink></h2>
            <img src={star} alt="Star" className='absolute right-44 w-3 xs:right-52 xs:w-5'/>
                  
            <div className=' flex  items-center'>
                <p className='mx-4 font-bold text-lg xs:text-xl'><NavLink to="#">Blog</NavLink></p>
                <button className='text-lg font-roboto-mono font-bold text-white  py-0 px-2 rounded-full border-4 border-[#204057] xs:border-6 xs:px-4'
                 style={{ backgroundColor: '#1A8B9C' }}
                >RESUME</button>
            </div>

            
        </nav>
        
        <Outlet/>
        </>
    )
}