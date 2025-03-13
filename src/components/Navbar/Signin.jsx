import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { NavLink } from 'react-router';

const Signin = () => {
  return (
    <div className="text-white">
    <NavLink to={"/sign-in"} end>
    <p className="hover:font-bold hover:border hover:border-white  cursor-pointer">
    SignIn
    </p>
    </NavLink>
    <div className="flex items-center gap-2">
    <p className="font-bold hover:border hover:border-white  cursor-pointer">Account And Lists</p>
    <IoIosArrowDropdown className="size-4 text-white"/>
    </div>
  </div>
  )
}

export default Signin
