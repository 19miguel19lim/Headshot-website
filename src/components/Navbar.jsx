import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);
  return (
    <div className="flex justify-between w-full items-center px-2 md:px-4 lg:px-10 xl:px-20  mx-auto h-24 py-4 overflow-hidden">
      {/* Logo */}
      <div className="flex items-center scale-75 md:scale-100 -ml-6 md:ml-0">
        <Link className="" to="/">
          <img src="assets/headshotx_logo_dark.png" alt="" />
        </Link>
      </div>
      {/* navLinks */}
      <div className="hidden lg:flex space-x-10 ">
        <ul className="flex  justify-between items-center space-x-6 text-mediumGrey ">
          <NavLinks />
        </ul>
        <div className="flex space-x-4">
          <NavButtons />
        </div>
      </div>
      {/* hamburger menu */}
      <div
        className="block lg:hidden hover:scale-125 duration-300"
        onClick={handleNav}
      >
        {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </div>
      <div
        className={
          !nav
            ? "fixed top-24 right-0 py-4 z-50 px-4 flex flex-col space-y-12 bg-white bg-opacity-90 w-full h-full ease-in-out duration-500"
            : "top-[-100%] fixed"
        }
      >
        <ul className="flex flex-col items-start justify-center text-left space-y-4 text-lg ">
          <NavLinks handleNav={handleNav} />
        </ul>
        <div className="flex flex-col max-w-lg space-y-4">
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
