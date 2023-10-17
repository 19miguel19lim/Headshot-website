import { useRef } from "react";
import ConfessionSlideSm from "./ConfessionSlideSm";
import Slider from "react-slick";
import { BreakPoints } from "../utils/BreakPoints";
import { data } from "../utils/contstant";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

function Confession() {
  const windowSize = BreakPoints();
  const mdSreen = windowSize.width >= 768;
  const lgScreen = windowSize.width >= 1025;
  const xlScreen = windowSize.width >= 1280;
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: xlScreen ? 2 : 1,
    slidesToScroll: 1,
  };

  return (
    <div className="pb-44">
      <div className="flex flex-col mx-auto space-y-12 max-w-7xl bg-homeBg bg-center bg-no-repeat">
        <div className="flex w-full items-center justify-between px-4  lg:mb-0 ">
          <div className="flex flex-col py-12 mx-auto space-y-4  ml-0 ">
            <h1 className="text-3xl  font-black uppercase text-darkGray   md:text-5xl md:w-[38rem] md:leading-[4rem]">
              what <br />{" "}
              <span className="bg-lightBlue px-2 italic"> our clients</span>
              <br />
              are saying
            </h1>
          </div>
          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="button" onClick={previous}>
              <img
                src="assets/leftArrow-light.png"
                alt=""
                className="bg-white"
              />
            </button>
            <button className="button" onClick={next}>
              <img src="assets/rightArrow-dark.png" alt="" />
            </button>
          </div>
        </div>
        <div className="">
          {mdSreen ? (
            <div className="">
              <Slider ref={sliderRef} {...settings}>
                {data.map((curr, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-6 relative max-w-2xl ml-10 lg:max-w-4xl xl:max-w-2xl"
                  >
                    <div className="h-full w-[22rem] bg-gradient-to-t from-white via-blue-200 to-white z-0 absolute top-0 right-6 hover:bg-black hover:text-white lg:right-10 xl:right-16 xl:w-[18rem]"></div>
                    {/* imge */}
                    <div className="z-10">
                      <img
                        src={curr.image}
                        alt=""
                        className="h-[20rem] lg:h-[30rem] xl:h-[20rem]"
                      />
                    </div>
                    {/* content */}
                    <div className="flex flex-col space-y-2 items-center absolute top-14 right-10 max-w-xs lg:top-44 lg:max-w-md lg:right-0 xl:top-14 xl:max-w-xs xl:right-9">
                      <BiSolidQuoteAltLeft
                        size={30}
                        className="absolute -top-8 left-0"
                      />
                      <p className="text-lg text-left hidden md:block md:text-sm">
                        {curr.comment}
                      </p>
                      <img
                        src={curr.image}
                        alt=""
                        className="h-16 w-16 rounded-full scale-75"
                      />

                      <h1 className="font-black text-2xl uppercase md:text-lg">
                        {curr.name}
                      </h1>
                      <p className="text-lg capitalize md:text-sm">
                        {curr.position}
                      </p>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          ) : (
            <ConfessionSlideSm />
          )}
          {/* <ConfessionSlideSm />

          <div>
            <h2>Custom Arrows</h2>
            <Slider ref={sliderRef} {...settings}>
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item}>
                  <h3>{item}</h3>
                </div>
              ))}
            </Slider>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Confession;
