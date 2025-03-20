import React from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router";
const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
        <div className="flex justify-center items-center gap-3">
          <FaUser className=" size-10" />
          <h1 className="text-3xl block text-center font-semibold ">login</h1>
        </div>
        <hr className="mt-3" />
        <div className="mt-3">
          <label htmlFor="username" className="block text-base mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Username"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="Password" className="block text-base mb-2">
            Password
          </label>
          <input
            type="Password"
            id="Password"
            className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
            placeholder="Enter Password"
          />
        </div>
        <div className="flex mt-6 justify-between items-center">
        <div className="space-x-2">
          <input type="checkbox" name="checkbox" id="checkbox" />
          <label>Remember Me</label>
        </div>
        <div>
            <a href="#" className="text-indigo-800 font-semibold">Forgot Password?</a>
          </div>
        </div>
        <div className="mt-5">
          <button className="w-full border-indigo-700 bg-indigo-800 text-white text-base py-1 mt-4 rounded-md text-center">
            <a href="#">
              login
            </a>
          </button>
          <NavLink to={"/sign-up"} end>
          <button className="w-full  border-green-700 bg-green-700 text-white text-base py-1 mt-4 rounded-md text-center">
            <a href="#">
              Registration
            </a>
          </button>
          </NavLink>
          
        </div>
      
      </div>
    </div>
  );
};

export default SignIn;
