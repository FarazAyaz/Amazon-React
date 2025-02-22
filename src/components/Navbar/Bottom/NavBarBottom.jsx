import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseCircle } from 'react-icons/io5';
import { AnimatePresence, motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const NavBarBottom = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    <div className='h-[45px] w-full flex gap-8 bg-slate-700 items-center px-[30px]'>
      {/* Fixed div syntax and moved click event inside */}
      <div 
        className="flex items-center gap-2 hover:border hover:border-white cursor-pointer " 
        onClick={() => setShowSideBar(true)}
      >
        <GiHamburgerMenu className='text-white' />
        <h1 className='font-bold text-white'>All</h1>
      </div>

      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Today's Deal</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Customer Service</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Gift Card</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Registry</h1>
      <h1 className='hover:font-bold text-white hover:border hover:border-white cursor-pointer'>Sell</h1>

      {/* Sidebar */}
     
      <AnimatePresence>
      {
        showSideBar ? <div> <div className='absolute inset-0 bg-black/70 backdrop-blur-[5px] z-30 cursor-pointer' onClick={()=>setShowSideBar(false)}></div> <motion.div
        initial={{opacity:0,x:-300}}
        animate={{opacity:1,x:0}}
        transition={{duration:0.3}}
        exit={{opacity:0,x:-300}}
        className='w-[400px] bg-slate-200 p-4 absolute top-0 left-0 bottom-0 z-40'>
          <IoCloseCircle className='w-8 h-8 ml-auto' onClick={()=>setShowSideBar(false)}/>
        </motion.div></div> : null
      } 
      </AnimatePresence>
    
    </div>
  );
};

export default NavBarBottom;


