import { Link } from "react-router-dom";

import { TypeAnimation } from "react-type-animation";

export default function Hobbies({showHobbies}) {
    return (


        <>
        <div className="ml-4">
        <TypeAnimation
      sequence={[
        "Hello ,👋", 3000, 
        " I'm Aung Kaung Sett.", 3000, 
        "Frontend Developer.", 3000,
      ]}
      speed={50}
      repeat={Infinity}
      className="text-2xl lg:text-3xl font-bold text-[#1A8B9C]"
    />
        </div>

        <div className="flex my-6 space-x-2">
              {/* <hr className="border-2 border-[#1A8B9C] my-2 w-full xs:w-38 sm:w-40" /> */}
               
              <Link to="https://github.com/Kaungsett45" target="_blank">
                            <button className="xss:text-sm ml-4 border-2 px-2 xs:text-lg sm:text-xl lg:text-2xl py-1 flex border-[#1A8B9C] rounded-full items-center font-monst font-bold  ">
                            <svg
    width="25 "
    height="25 "
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-1 text-black  hover:text-gray-600"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2.02c-3.34.72-4.04-1.6-4.04-1.6-.54-1.4-1.32-1.76-1.32-1.76-1.08-.74.08-.72.08-.72 1.2.08 1.82 1.24 1.82 1.24 1.06 1.82 2.78 1.3 3.46.98.1-.78.42-1.3.76-1.6-2.68-.3-5.48-1.34-5.48-5.98 0-1.3.46-2.36 1.24-3.2-.12-.3-.54-1.52.12-3.16 0 0 1.02-.32 3.34 1.22.98-.28 2.02-.42 3.06-.42s2.08.14 3.06.42c2.32-1.54 3.34-1.22 3.34-1.22.66 1.64.24 2.86.12 3.16.78.84 1.24 1.9 1.24 3.2 0 4.66-2.8 5.68-5.48 5.98.44.38.84 1.1.84 2.22v3.28c0 .32.22.7.84.58 4.76-1.6 8.2-6.1 8.2-11.4C24 5.37 18.63 0 12 0z"
    />
  </svg>
               Github
              </button>

              </Link>
              
         </div>

        </>
    )

}
