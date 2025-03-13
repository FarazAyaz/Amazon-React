import React from 'react'
import { NavLink } from 'react-router'
const Footer = () => {
  return (
    <div>
      <div>
      <div class="bg-white w-full my-10 py-5">
            <div class="border border-grey-400 border-2 border-solid flex justify-center items-center py-4">
              <div>
                <h1 class="font-bold text-xl px-16">See Personalized Recommendations</h1>
                <NavLink to={"/sign-in"} end>
                <button class="py-3 px-16 bg-orange-500 rounded-full my-3 mx-[120px]">
                  SignIn
                </button>
                </NavLink>
                <p class="px-[120px]">New Customer? Start Here</p>
              </div>
              
           
            </div>

          </div>
        
        </div>
        <div class="bg-slate-800 py-16 w-full">
          <div class=" flex justify-center gap-16 ">
            <div class="text-white">
              <h1 class="font-bold text-white m-4 hover:font-bold hover:border hover:border-white  cursor-pointer">Get To Know Us</h1>
              <div class="space-y-2">
                <p>Amazon Science</p>
              <p>Careers</p>
              <p>Blog</p>
              <p>About Amazon</p>
              <p>Investor Relations</p>
              <p>Amazon Devices</p>
              </div>
  
            </div>
            <div class="text-white gap-3 ">
              <h1 class="font-bold m-4 hover:font-bold hover:border hover:border-white  cursor-pointer">Make Money With Us</h1>
              <div class="space-y-2">
                <p>Sell products on Amazon</p>
              <p>Sell on Amazon Business</p>
              <p>Sell apps on Amazon</p>
              <p>Become an Affiliate</p>
              <p>Advertise Your Products</p>
              <p>Self-Publish with Us</p>
              <p>Host an Amazon Hub</p>
              </div>
            </div>
            <div class="text-white gap-3">
              <h1 class="font-bold m-4 hover:font-bold hover:border hover:border-white  cursor-pointer">Amazon Payment Products</h1>   
              <div class="space-y-2">
                <p>Amazon Business Card</p>
              <p>Shop with Points</p>
              <p>Reload Your Balance</p>
              <p>Amazon Currency Converter</p>
              </div>
            </div>
            <div class="text-white gap-3">
              <h1 class="font-bold m-4 hover:font-bold hover:border hover:border-white  cursor-pointer">Let Us Help You</h1>
              <div class="space-y-2">
                <p>Amazon and COVID-19</p>
              <p>Your Account</p>
              <p>Shipping Rates & Policies</p>
              <p> Returns & Replacements</p>
              <p>Manage Your Content and Devices</p>
              <p>Help</p>
              </div>
            </div>
          </div>   
          <div class="mt-16 w-full bg-slate-200 h-[1px]">
  
          </div>  
          <div class="flex justify-center mt-16 gap-4 items-center">
          <div class="border border-2 border-white text-white font-bold h-fit p-4">
           <p class="text-xs cursor-pointer">ENGLISH</p> 
          </div>
          <div class="text-white border border-2 border-white h-fit flex gap-3 p-4 items-center cursor-pointer">
            <p>PAKISTAN</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
