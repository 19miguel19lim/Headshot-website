import CtaForm from "./CtaForm";
import CtaFormDesktop from "./CtaFormDesktop";
import CtaSlider from "./CtaSlider";

function Cta() {
  return (
    <div className="pb-44">
      <div className="flex flex-col w-full mx-auto space-y-12  md:space-y-0 max-w-[120rem]">
        <div className="flex flex-col py-12 mx-auto text-center space-y-4 px-4 md:ml-0 ">
          <h1 className="text-3xl px-4 font-black uppercase text-darkGray  md:text-left md:text-5xl md:w-[33rem] md:leading-[4rem]">
            does your compan y require{" "}
            <span className="bg-lightBlue px-2"> a specific look?</span>
          </h1>
          <p className="text-md max-w-sm   md:text-left md:mx-0 md:px-4  xl:text-lg">
            We can 100% match an existing company style and keep things
            consistent!
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
        <div className="lg:hidden">
          <CtaSlider value={false} speed={60} />
        </div>
        <div className="lg:hidden">
          <CtaSlider value={false} speed={70} />
        </div>

        {/* place here */}
        <CtaForm />
        <CtaFormDesktop />
      </div>
    </div>
  );
}

export default Cta;
