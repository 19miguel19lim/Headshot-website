import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import { BreakPoints } from "./utils/BreakPoints";
function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => setNav(!nav);

  const windowSize = BreakPoints();
  const lgScreen = windowSize.width >= 1024;

  return (
    <div className="flex justify-between w-full items-center px-2 md:px-4 py-6 lg:px-10 xl:px-20  mx-auto  lg:py-12 overflow-hidden">
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
            ? "fixed top-20 lg:top-24 right-0 py-4 z-50 px-4 flex flex-col space-y-12 bg-white  w-full h-full ease-in-out duration-500 lg:hidden"
            : "top-[-100%] fixed"
        }
      >
        <ul className="flex flex-col items-center justify-center  space-y-4 text-lg ">
          <NavLinks handleNav={handleNav} />
        </ul>
        <div className="flex flex-col mx-auto space-y-4">
          <NavButtons />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
