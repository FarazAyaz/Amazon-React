import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropdown } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { AnimatePresence, motion } from 'framer-motion';

const Search = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  const dropdownRef = useRef(null); // 🔹 Ref for dropdown container

  // 🔹 Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(false);
      }
    };

    // Add event listener when dropdown is open
    if (showDropDown) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropDown]);

  return (
    <div className="flex flex-1 relative" ref={dropdownRef}> {/* 🔹 Wrap entire component with ref */}
      {/* Dropdown Button */}
      <div 
        className="flex gap-2 items-center bg-slate-300 hover:bg-slate-400 rounded-tl-md rounded-bl-md p-2 cursor-pointer relative z-10" 
        onClick={() => setShowDropDown(currentState => !currentState)}
      >
        <p>All</p>
        <IoIosArrowDropdown />
      </div>

      {/* Search Input */}
      <div className="bg-white border-none p-3 w-full">
        <input type="text" placeholder="Search Here" className="outline-none w-full"/>
      </div>

      {/* Search Button */}
      <div className="flex gap-2 items-center bg-slate-300 hover:bg-slate-400 rounded-tr-md rounded-br-md p-2">
        <FaSearch className="size-6 text-black" />
      </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        { showDropDown && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, y: -50 }}
            className="bg-white w-[200px] rounded-xl shadow-lg absolute top-[65px] p-6 z-20"
          >
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Watches</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Clothes</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Toys</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Cosmetics</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Computers</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">CD & DVd</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Smart Phones</p>
            <p className="px-4 py-2 text-black hover:bg-gray-300 rounded-md cursor-pointer duration-500 font-bold">Books</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>   
  );
};

export default Search;
