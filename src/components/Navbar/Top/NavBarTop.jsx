import React from 'react'
import Logo from '../Logo'
import DeliveredLocation from '../DeliveredLocation'
import Search from '../Search'
import Signin from '../Signin'
import Returns from '../Returns'
import Cart from '../Cart'

const NavBarTop = () => {
  return (
    <div className="flex bg-amazon_blue px-8 py-2 gap-4 items-center justify-between">
        <Logo />
      <DeliveredLocation/>
      <Search /> 
      <Signin />
      <Returns />
      <Cart />
    </div>
  )
}

export default NavBarTop
