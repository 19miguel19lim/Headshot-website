import { Link } from "react-router-dom";
import { FiCircle } from "react-icons/fi";
import { content } from "../utils/contstant";
import LogoSlider from "./LogoSlider";

function Nathan() {
  return (
    <div className="max-w-md mx-auto px-4 md:max-w-xl lg:max-w-7xl overflow-hidden lg:px-4 lg:pb-30">
      <div className="flex flex-col justify-center  overflow-hidden items-center mb-32 pt-16 pb-[2rem] space-y-8  bg-black text-white bg-BgX bg-contain  bg-no-repeat rounded-xl lg:flex-row lg:space-y-0 lg:space-x-10 lg:items-start lg:justify-center lg:pl-40  lg:pb-[5rem] lg:w-full lg:bg-cover xl:space-x-36">
        <img
          src="assets/Nathan-logo.png"
          alt=""
          className="xl:lg:scale-150 lg:pt-16"
        />
        <div className="flex flex-col space-y-8 items-center lg:items-start">
          <div className="flex flex-col space-y-8 items-center lg:flex-row lg:space-y-0 lg:space-x-12">
            <h1 className="text-4xl font-black uppercase text-center md:text-5xl lg:text-4xl  xl:text-4xl lg:max-w-xl xl:text-left max-w-xs">
              nathan reimche-vu{" "}
            </h1>
            <div className="flex space-x-4 items-center py-4 px-8 rounded-full bg-lightBlue text-black max-w-[22rem] mx-auto text-center  hover:scale-110  cursor-pointer duration-300 hover:text-black font-bold lg:mx-0">
              <FiCircle />
              <Link to="./portfolio">FOUNDER OF HEADSHOT X</Link>
            </div>
          </div>
          <p className="max-w-xs text-gray-500 tracking-widest text-lg text-center lg:max-w-3xl xl:max-w-3xl lg:text-left">
            {content}
          </p>
          <div className="max-w-sm relative lg:max-w-4xl">
            <div className="absolute top-0 bottom-0 right-0 left-0 z-0"></div>
            <LogoSlider />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nathan;
