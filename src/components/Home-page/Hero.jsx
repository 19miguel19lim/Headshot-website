import { BreakPoints } from "../utils/BreakPoints";
import HeroForm from "./HeroForm";
import HeroImageGroup from "./HeroImageGroup";
import HeroLogos from "./HeroLogos";
import LogoSlider from "./LogoSlider";

function Hero() {
  const windowSize = BreakPoints();
  const lgScreen = windowSize.width >= 1024;

  return (
    <div className="flex flex-col overflow-hidden ">
      <div className="flex flex-col relative w-full py-2 pb-44  space-y-6 items-center max-w-[130rem] mx-auto justify-start bg-homeBg bg-center bg-no-repeat lg:h-[75rem]">
        <div className="flex flex-col py-12 text-center space-y-12 px-4 lg:hidden z-10 ">
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
        <div className="hidden lg:flex flex-col pt-[7.5rem] text-center space-y-12 px-4 z-10 xl:max-w-7xl">
          <h1 className="text-[4rem] leading-[4rem] font-black uppercase md:leading-[5.2rem] text-darkGray  mx-auto lg:text-[4rem] xl:text-[6rem] xl:leading-[6.8rem]">
            get professional portraits
            <span className="bg-lightBlue italic"> stress free</span>
          </h1>
          <p className="text-md max-w-xl mx-auto font-semibold  lg:text-xl xl:text-2xl xl:max-w-2xl">
            With studio’s in every major city there is no better place for
            companies and individuals to get their professional portraits
          </p>
        </div>
        <div className="pt-12 xl:pt-36">
          <HeroForm />
        </div>
        <div className="pt-44">
          <HeroLogos />
        </div>
        <div
          className={
            lgScreen
              ? "lg:absolute scale-75 top-[16rem] -left-24  xl:top-[32%] xl:-left-44 xl:scale-110"
              : "hidden"
          }
        >
          <HeroImageGroup />
        </div>
        <div
          className={
            lgScreen
              ? "lg:absolute scale-75 top-[16rem] -right-24  xl:top-[32%] xl-right-44 xl:scale-110"
              : "hidden"
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
