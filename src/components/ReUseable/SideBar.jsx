import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router";
const SideBar = ({ showSideBar, setShowSideBar }) => {
  return (
    <AnimatePresence>
      {showSideBar ? (
        <div>
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-[5px] z-30 cursor-pointer"
            onClick={() => setShowSideBar(false)}
          ></div>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -300 }}
            className="w-[400px] bg-slate-200 p-4 absolute top-0 left-0 bottom-0 z-40 space-y-6"
          >
            <IoCloseCircle
              className="w-8 h-8 ml-auto"
              onClick={() => setShowSideBar(false)}
            />
             <NavLink to={"/sign-in"} end>
             <h1 className="font-bold p-3 bg-slate-300 rounded-md hover:bg-slate-400 border border-2 border-balck text-xl cursor-pointer">Sign In</h1>
             </NavLink>
            <h1 className="font-bold p-3 bg-slate-300 rounded-md hover:bg-slate-400 cursor-pointer text-xl">Primary Section
            </h1>
                 <div className="space-y-2 cursor-pointer">
                    <h1 className="font-bold text-lg bg-slate-300 p-2 rounded-md ">Branded Clothes</h1>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold mt-[20px]">Men's Favorite</p>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold">Women's Clothes</p>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold">Garments</p>
                </div>
                <div className="bg-black h-1 w-full"></div>
                <div className="space-y-2 cursor-pointer">
                    <h1 className="font-bold text-lg bg-slate-300 p-2 rounded-md ">Branded Clothes</h1>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold mt-[20px]">Men's Favorite</p>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold">Women's Clothes</p>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold">Garments</p>
                </div>
                <div className="bg-black h-1 w-full"></div>
                <div className="space-y-2 cursor-pointer">
                    <h1 className="font-bold text-lg bg-slate-300 p-2 rounded-md ">Branded Clothes</h1>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold mt-[20px]">Men's Favorite</p>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold">Women's Clothes</p>
                    <p className="hover:bg-slate-300 p-2 rounded-md font-bold">Garments</p>
                </div>

          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default SideBar;
