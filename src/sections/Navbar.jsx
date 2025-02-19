
import Logo from "../components/Navbar/Logo";
import DeliveredLocation from "../components/Navbar/DeliveredLocation";
import Search from "../components/Navbar/Search";
import Signin from "../components/Navbar/Signin";
import Returns from "../components/Navbar/Returns";
import Cart from "../components/Navbar/Cart";
const Navbar = () => {
  return (
    <div className="flex bg-amazon_blue px-8 py-2 gap-4 items-center justify-between">
      <Logo />
      <DeliveredLocation />
      <Search /> 
      <Signin />
      <Returns />
      <Cart />
    </div>
  );
};

export default Navbar;
