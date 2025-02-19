import React from 'react'
import { FaCartShopping } from "react-icons/fa6";
const Cart = () => {
  return (
    <div className="flex">
      <div className="text-white relative">
      <FaCartShopping className="size-[30px] "/>
      </div>
      <p className="self-end text-white ">Cart</p>
      <div className="absolute rounded-full p-1 bg-red-400 h-4 right-14 top-1 flex items-center">
            <p>0</p>
      </div>
    </div>
  )
}

export default Cart
