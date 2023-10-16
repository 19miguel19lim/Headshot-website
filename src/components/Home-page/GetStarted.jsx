import { Link } from "react-router-dom";

function GetStarted() {
  return (
    <div className="max-w-md mx-auto px-4 md:max-w-xl lg:max-w-7xl">
      <div className="flex flex-col relative overflow-hidden items-center mb-32 pt-16 pb-[20rem] space-y-8  bg-black text-white bg-BgX bg-contain bg-center bg-no-repeat rounded-xl lg:items-start lg:pl-28 lg:pb-[5rem]">
        <h1 className="text-4xl font-black uppercase text-center md:text-5xl lg:max-w-xl lg:text-left">
          get started w/ <span className="text-lightBlue">headshotx</span>
        </h1>
        <div className="py-4 px-20 rounded-lg bg-white text-black max-w-[22rem] mx-auto text-center  hover:bg-lightBlue cursor-pointer duration-300 hover:text-black font-bold lg:mx-0">
          <Link to="./portfolio">Get Free Quote</Link>
        </div>
        <div className="absolute bottom-0 right-0 lg:scale-150 lg:right-22">
          <img src="assets/Started-image.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
