import React, { useState } from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";

const Search = () => {
   const [showDropDown,setShowDropDown] = useState(false)
  const handleClick = () =>{
    setShowDropDown((previousValue)=>{
    return  !previousValue
    })
 
  }
  return (

      <div className="flex flex-1">
          <div className=" flex gap-2 items-center bg-slate-300 hover:bg-slate-400 rounded-tl-md rounded-bl-md p-2 cursor-pointer relative" onClick={handleClick}>
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
          {showDropDown == true ?  <div className='bg-slate-200 h-[200px] w-[200px] rounded-xl shadow-lg absolute top-[65px] p-6'>
            <p>Watches</p>
            <p>Clothes</p>
            <p>Toys</p>
            <p>Accessories</p>
          </div> : null}
        </div>   
  
  )
}

export default Search
