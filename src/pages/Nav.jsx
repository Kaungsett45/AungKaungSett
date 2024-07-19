import star from '../../public/star.svg'
import { Outlet ,NavLink } from 'react-router-dom'
export default function Navigation(){


    return(
        <>
        <nav className="px-2 py-1 relative flex justify-between items-center  ">
            <h2 ><NavLink to="#" className='text-lg font-roboto font-bold xs:text-xl sm:text-2xl'>Portfolio</NavLink></h2>
    
            <div className=' flex  items-center'>
                <p className='mx-4 font-bold font-roboto text-lg xs:text-xl sm:mx-8 '><NavLink to="#">Blog</NavLink></p>
                <button className='
                text-sm font-roboto font-bold text-white  py-1 px-2 rounded-full border-4 border-[#204057] xs:border-6 xs:px-4
                sm:border-7 sm:px-6 sm:text-lg
                '
                 style={{ backgroundColor: '#1A8B9C' }}
                >RESUME</button>
            </div>

            
        </nav>
        
        <Outlet/>
        </>
    )
}