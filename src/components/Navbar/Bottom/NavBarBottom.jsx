import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import SideBar from '../../ReUseable/SideBar';

const NavBarBottom = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className='h-[45px] w-full flex gap-8 bg-slate-700 items-center px-[30px]'>
      {/* Fixed div syntax and moved click event inside */}
      <div 
        className="flex items-center gap-2 hover:border hover:border-white cursor-pointer " 
        onClick={() => setShowSideBar(true)}
      >
        <GiHamburgerMenu className='text-white'/>
        <h1 className='font-bold text-white'>All</h1>
      </div>

      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Today's Deal</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Customer Service</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Gift Card</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Registry</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Sell items</h1>

      {/* Sidebar */}
     
      <SideBar showSideBar={showSideBar} setShowSideBar={setShowSideBar}/>
    
    </div>
  );
};

export default NavBarBottom;


