import CtaForm from "./CtaForm";
import CtaFormDesktop from "./CtaFormDesktop";
import CtaSlider from "./CtaSlider";

function Cta() {
  return (
    <div className="pb-44 lg:pb-[20rem]">
      <div className="flex flex-col w-full mx-auto space-y-12 md:space-y-0 md:mt-24 max-w-[120rem] relative lg:mb-44">
        <div className="flex flex-col py-12 mx-auto text-center space-y-4 px-4 md:ml-0 ">
          <h1 className="text-4xl px-4 font-black uppercase leading-[3rem] text-darkGray  md:text-left md:text-5xl md:w-[45rem] md:leading-[4rem] lg:text-6xl lg:leading-[4.5rem]">
            does your company require <br />
            <span className="bg-lightBlue px-2"> a specific look?</span>
          </h1>
          <p className="text-md max-w-sm mx-auto md:text-left md:mx-0 md:px-4  md:text-xl md:max-w-xl">
            We can 100% match an existing company style and keep things
            consistent!
          </p>
        </div>
        <div className="absolute lg:top-[32rem] lg:right-[4rem] xl:top-[15rem] right-0 z-30">
          <CtaFormDesktop />
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
        <div className="lg:hidden">
          <CtaSlider value={false} speed={60} />
        </div>
        <div className="lg:hidden">
          <CtaSlider value={false} speed={70} />
        </div>

        {/* place here */}
        <CtaForm />
      </div>
    </div>
  );
}

export default Cta;
