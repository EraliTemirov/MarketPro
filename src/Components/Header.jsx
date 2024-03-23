// import React from 'react'

import { Link } from "react-router-dom";

function Header() {
  return (
    <div  className="w-[80%] m-auto">

     <div className="flex justify-between gap-2 items-center">
    
     <Link to="/" className="text-3xl">Market.uz</Link>
    
   
<form className="auto">   
    
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-black" aria-hidden="true"  fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 rounded-lg focus:ring-blue-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black" placeholder="Search..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Search</button>
    </div>
</form>

     <button className="flex items-center">
     <svg className="h-8 w-8 text-black-600"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  >  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />  <circle cx="12" cy="7" r="4" /> </svg>
     <span>Mening kabinetim</span>
     </button>
     </div>

    </div>
  )
}

export default Header;
