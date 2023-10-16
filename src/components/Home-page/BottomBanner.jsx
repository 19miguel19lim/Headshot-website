import { Link } from "react-router-dom";
import { AiFillCalculator } from "react-icons/ai";

function BottomBanner() {
  return (
    <div className="max-w-md mx-auto lg:max-w-7xl">
      <div className="flex flex-col space-y-12 items-center px-4 lg:flex-row lg:justify-around lg:space-y-0">
        <div className="flex flex-col space-y-4 items-center lg:items-start lg:space-y-0">
          <h1 className="text-xl font-black uppercase lg:text-5xl lg:max-w-xl">
            getting a quote takes just
          </h1>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-black uppercase lg:text-5xl">
              27 seconds
            </h1>
            <img src="assets/underline.png" alt="" />
          </div>
          <div className="flex flex-col relative items-center space-y-6 lg:flex-row lg:space-y-0 lg:pt-4">
            <div className="relative lg:scale-75">
              <img src="assets/QR-code.png" alt="" />
              <div className="absolute top-[30px] left-[29px]">
                <img src="assets/Code.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col items-center space-y-8 lg:space-y-0 lg:items-start">
              <div className="flex flex-col">
                <p className="text-lg font-semibold max-w-sm mx-auto md:px-4  xl:text-lg lg:mx-0">
                  Headshot X is available on
                </p>
                <p className="text-md text-gray-400 max-w-sm mx-auto md:px-4  xl:text-lg lg:mx-0">
                  iOS and Android
                </p>
              </div>
              <div className=" flex space-x-4 items-center py-4 px-12 rounded-lg bg-black text-white max-w-[22rem] mx-auto text-center  hover:bg-lightBlue cursor-pointer duration-300 hover:text-black font-bold lg:mx-0 lg:scale-75 lg:-ml-[20px]">
                <AiFillCalculator size={20} />
                <Link to="./portfolio">Calculate My Project</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-BgX bg-center bg-no-repeat">
          <img src="assets/BottomBannerImage.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default BottomBanner;
