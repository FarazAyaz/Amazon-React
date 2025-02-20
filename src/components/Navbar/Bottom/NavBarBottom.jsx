import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from 'react-icons/io5';

const NavBarBottom = () => {
  const [showSideBar,setShowSideBar] = useState(false)
  return (
    <div className='h-[45px] w-full flex gap-8 bg-slate-700 items-center px-[30px]'>
      <div className="flex items-center gap-2 hover:border hover:border-white  cursor-pointer " onClick={
        ()=>setShowSideBar(pre=>!pre)
      }>
      <GiHamburgerMenu className='text-white'/>
      <h1 className='font-bold text-white '>All</h1>
      </div>
      <h1 className='hover:font-bold text-white hover:border hover:border-white  cursor-pointer'>Today's Deal</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white  cursor-pointer'>Customer Service</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white  cursor-pointer'>Gift Card</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white  cursor-pointer'>Registory</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white  cursor-pointer'>Sell</h1>
      <div className={`absolute left-0 top-0 bottom-0  bg-slate-200  w-[500px] z-40 p-4  shadow-lg  ${showSideBar ? "":"hidden"}`}>
       <IoCloseCircle className='w-8 h-8 text-black cursor-pointer ml-auto' onClick={()=>setShowSideBar(false)}/>
      </div>
    </div>
   
  )
}

export default NavBarBottom
