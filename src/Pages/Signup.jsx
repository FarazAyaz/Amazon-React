import React from 'react'
import { FaUser } from 'react-icons/fa'
const Signup = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
         <div className="w-96 bg-white p-8 rounded-lg shadow-lg">
           <div className="flex justify-center items-center gap-3">
             <FaUser className=" size-10" />
             <h1 className="text-3xl block text-center font-semibold ">Sign-Up</h1>
           </div>
           <hr className="mt-3" />
           <div className="mt-3">
             <label htmlFor="Email" className="block text-base mb-2">
               Enter Your Email
             </label>
             <input
               type="text"
               id="Email"
               className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
               placeholder="Enter Email Address"
             />
           </div>
           <div className="mt-3">
             <label htmlFor="create-Password" className="block text-base mb-2">
               Create Password
             </label>
             <input
               type="Password"
               id="create-password"
               className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
               placeholder="Create Password"
             />
           </div>
           <div className="mt-3">
             <label htmlFor="Confirm-Password" className="block text-base mb-2">
               Confirm Password
             </label>
             <input
               type="Password"
               id="confirm-password"
               className="w-full border text-base py-1 px-2 rounded-md focus:outline-none focus:ring-0 focus:border-gray-600"
               placeholder="Confirm Password"
             />
           </div>
           <div className="mt-5">
             <button className="w-full border border-2 border-indigo-700 bg-indigo-800 text-white text-base py-1 mt-4 rounded-md text-center">
               <a href="#">
                 Sign-Up
               </a>
             </button>
           </div>
         
         </div>
       </div>
  )
}

export default Signup
