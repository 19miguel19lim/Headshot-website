import { BreakPoints } from "../utils/BreakPoints";
import HeroForm from "./HeroForm";
import HeroImageGroup from "./HeroImageGroup";
import HeroLogos from "./HeroLogos";
import LogoSlider from "./LogoSlider";

function Hero() {
  const windowSize = BreakPoints();
  const lgScreen = windowSize.width >= 1024;

  return (
    <div className="flex flex-col space-y-44 overflow-x-hidden lg:pt-36">
      <div className="flex flex-col relative w-full py-2 md:py-20 space-y-6 md:space-y-12 items-center max-w-[130rem] mx-auto justify-center bg-homeBg bg-center bg-no-repeat ">
        <div className="flex flex-col py-12 text-center space-y-12 px-4 xl:hidden z-10 ">
          <h1 className="text-[3rem]  leading-[4rem] md:text-7xl font-black uppercase md:leading-[6rem] text-darkGray max-w-5xl mx-auto">
            get pro portraits
            <br />
            <span className="bg-lightBlue italic px-2 text-[2.5rem] md:text-[4rem]">
              {" "}
              stress free
            </span>
          </h1>
          <p className="text-md max-w-xl mx-auto">
            With studio’s in every major city there is no better place for
            companies and individuals to get their professional portraits
          </p>
        </div>
        <div className="hidden xl:flex flex-col py-12 text-center space-y-12 px-4 z-10 ">
          <h1 className="text-[4rem] leading-[4rem] font-black uppercase md:leading-[6rem] text-darkGray  mx-auto">
            get professional portraits
            <br />
            <span className="bg-lightBlue italic"> stress free</span>
          </h1>
          <p className="text-md max-w-xl mx-auto">
            With studio’s in every major city there is no better place for
            companies and individuals to get their professional portraits
          </p>
        </div>
        <HeroForm />
        <div className="pt-12 md:pt-0">
          <HeroLogos />
        </div>
        <div
          className={
            lgScreen ? "lg:absolute top-[1%] -left-44 xl:scale-125" : "hidden"
          }
        >
          <HeroImageGroup />
        </div>
        <div
          className={
            lgScreen ? "lg:absolute top-[1%] -right-44 xl:scale-125" : "hidden"
          }
        >
          <HeroImageGroup />
        </div>
      </div>
      <div className="flex-flex-col ">
        <h1 className="uppercase font-bold text-gray-500 text-center">
          trusted by the pros
        </h1>
        <LogoSlider />
      </div>
    </div>
  );
}

export default Hero;
