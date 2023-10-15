import { BreakPoints } from "../utils/BreakPoints";
import HeroForm from "./HeroForm";
import HeroImageGroup from "./HeroImageGroup";
import HeroLogos from "./HeroLogos";
import LogoSlider from "./LogoSlider";

function Hero() {
  const windowSize = BreakPoints();
  const mdScreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1024;
  const xlScreen = windowSize.width >= 1475;

  return (
    <div className="flex flex-col space-y-44 overflow-x-hidden">
      <div className="flex flex-col relative w-full py-2 md:py-20 space-y-6 md:space-y-12 items-center max-w-[130rem] mx-auto justify-center bg-homeBg bg-center bg-no-repeat ">
        <div className="flex flex-col py-12 text-center space-y-12 px-4 md:hidden z-10 ">
          <h1 className="text-[3rem]  leading-[4rem] md:text-7xl font-extrabold uppercase md:leading-[6rem] text-darkGray max-w-5xl mx-auto">
            get pro portraits{" "}
            <span className="bg-lightBlue italic px-2"> stress free</span>
          </h1>
          <p className="text-md max-w-xl mx-auto">
            With studio’s in every major city there is no better place for
            companies and individuals to get their professional portraits
          </p>
        </div>
        <div className="hidden md:flex flex-col py-12 text-center space-y-12 px-4 z-10 ">
          <h1 className="text-[3rem]  leading-[4rem] md:text-[5rem] font-black uppercase md:leading-[6rem] text-darkGray max-w-5xl mx-auto">
            get professional portraits{" "}
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
        <div className={xlScreen ? "lg:absolute top-[20%] -left-12" : "hidden"}>
          <HeroImageGroup />
        </div>
        <div
          className={xlScreen ? "lg:absolute top-[20%] -right-12" : "hidden"}
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
