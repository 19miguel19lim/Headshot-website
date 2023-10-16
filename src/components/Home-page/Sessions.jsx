import { Link } from "react-router-dom";

import CtaSlider from "./CtaSlider";

function Sessions() {
  return (
    <div className="pb-44">
      <div className="flex flex-col w-full mx-auto space-y-12  md:space-y-0 max-w-[120rem]">
        <div className="flex flex-col py-12 mx-auto items-center text-center space-y-10 px-4 ">
          <div className="flex-flex-col space-y-4">
            <h1 className="text-3xl px-4 font-black uppercase text-darkGray md:text-5xl md:w-[33rem] ">
              unlimited sessions
            </h1>
            <p className="text-sm text-gray-400 max-w-sm mx-auto   md:px-4  xl:text-lg">
              We can 100% match an existing company style and keep things
              consistent!
            </p>
          </div>
          <p className="text-lg  max-w-lg mx-auto   md:px-4  xl:text-lg">
            Unlimited sessions mean we capture all your expressions, outfits &
            moods. It’s all included! Capture photos for different purposes. Get
            it all done in one visit.
          </p>
        </div>
      </div>
      <div className="flex flex-col relative">
        <div className="absolute top-0 bottom-0 right-0 left-0 z-10 bg-gradient-to-b from-transparent to-gray-100"></div>
        <div className="">
          <CtaSlider value={false} speed={30} />
        </div>
        <div className="">
          <CtaSlider value={false} speed={25} />
        </div>
        <div className="l">
          <CtaSlider value={false} speed={60} />
        </div>
        <div className="l">
          <CtaSlider value={false} speed={70} />
        </div>
      </div>
      <div className="flex flex-col space-y-8 px-4 text-center">
        <div className="py-4 px-28 rounded-lg bg-black text-white max-w-[22rem] mx-auto text-center  hover:bg-lightBlue cursor-pointer duration-300 hover:text-black font-bold">
          <Link to="./portfolio">Explore Works</Link>
        </div>
        <p className="text-gray-500 text-bold ">
          Question?{" "}
          <span className="text-black font-semibold">Schedule a call.</span> Or{" "}
          <span className="text-black font-semibold">
            get a quote for groups & teams
          </span>
        </p>
      </div>
    </div>
  );
}

export default Sessions;
