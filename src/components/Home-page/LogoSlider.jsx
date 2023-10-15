import Slider from "react-infinite-logo-slider";

function LogoSlider() {
  const microsoft = "assets/Microsoft-logo.png";
  const amazon = "assets/Amazon-logo.png";
  const zendesk = "assets/Zendesk-logo.png";
  const vestas = "assets/Vestas-Logo.png";

  const logos = [
    microsoft,
    amazon,
    zendesk,
    vestas,
    microsoft,
    amazon,
    zendesk,
    vestas,
    microsoft,
    amazon,
    zendesk,
    vestas,
    microsoft,
    amazon,
    zendesk,
    vestas,
  ];

  return (
    <div className="bg-black py-5">
      <Slider
        width="250px"
        duration={50}
        toRight={false}
        pauseOnHover={false}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {logos.map((curr, i) => (
          <Slider.Slide key={i}>
            <img src={curr} alt="" className="w-[10rem] " />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}

export default LogoSlider;
