import ConfessionSlide from "./ConfessionSlide";

function Confession() {
  return (
    <div className="pb-44">
      <div className="flex flex-col mx-auto space-y-12 max-w-7xl bg-homeBg bg-center bg-no-repeat">
        <div className="flex w-full items-center justify-between px-4 md:mb-44 lg:mb-0">
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
            <img src="assets/leftArrow-light.png" alt="" />
            <img src="assets/rightArrow-dark.png" alt="" />
          </div>
        </div>
        <ConfessionSlide />
      </div>
    </div>
  );
}

export default Confession;
