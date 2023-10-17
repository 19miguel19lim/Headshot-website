import { Link } from "react-router-dom";

function NavButtons() {
  return (
    <>
      <Link className="font-bold text-[16px] bg-darkGray text-white py-3 px-24 rounded-lg hover:bg-lightBlue hover:text-darkGray duration-300">
        Get Started
      </Link>
      <Link className="font-bold text-[16px] border-2 border-darkGray text-darkGray py-3 px-24 rounded-lg hover:bg-lightBlue hover:text-darkGray duration-300 hover:border-white">
        Contact Us
      </Link>
    </>
  );
}

export default NavButtons;
