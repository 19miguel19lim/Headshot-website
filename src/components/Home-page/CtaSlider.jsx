import Slider from "react-infinite-logo-slider";

function CtaSlider({ value, speed }) {
  const male = "/public/assets/male-img1.jpg";
  const female1 = "/public/assets/female-img1.jpg";
  const female2 = "/public/assets/female-img2.jpg";

  const logos1 = [
    male,
    female1,
    female2,
    male,
    female1,
    female2,
    male,
    female1,
    female2,
    male,
    female1,
    female2,
  ];

  return (
    <div className="py-2 ">
      <Slider
        width="175px"
        duration={speed}
        pauseOnHover={false}
        blurBorders={false}
        blurBoderColor={"#fff"}
      >
        {logos1.map((curr, i) => (
          <Slider.Slide key={i}>
            <img src={curr} alt="" className="w-[10rem] h-[10rem]" />
          </Slider.Slide>
        ))}
      </Slider>
    </div>
  );
}

export default CtaSlider;
