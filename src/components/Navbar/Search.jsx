import React, { useEffect, useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaS } from 'react-icons/fa6';

const Search = () => {
   const [showDropDown,setShowDropDown] = useState(false)
   const [loadFirstTime,setLoadFirstTime] = useState(true)
 
  return (
      <div className="flex flex-1">
          <div className=" flex gap-2 items-center bg-slate-300 hover:bg-slate-400 rounded-tl-md rounded-bl-md p-2 cursor-pointer relative z-30" onClick={()=>{
            setShowDropDown(currentState => !currentState)
            setLoadFirstTime(false)
          }}>
            <p>All</p>
            <IoIosArrowDropdown />
          </div>
          {/* search input  */}
          <div className="bg-white border-none p-3 w-full">
            <input type="text" placeholder="Search Here" className="outline-none w-full"/>
          </div>
          {/* search button  */}
          <div className="flex gap-2 items-center bg-slate-300 hover:bg-slate-400 rounded-tr-md rounded-br-md p-2">
            <FaSearch className="size-6 text-black" />
          </div>
         <div className={`bg-slate-200 h-[200px] w-[200px] rounded-xl shadow-lg  absolute ${ loadFirstTime ? "hidden" : showDropDown ? "dropdown-enter" : "dropdown-exit"} top-[65px] p-6 z-20`}>
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Watches</p>
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Clothes</p>
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Toys</p>
            <p className="px-4 py-2 text-gray-700 hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Accessories</p>
          </div> 
        </div>   
  )
}

export default Search

