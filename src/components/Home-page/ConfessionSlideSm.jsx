import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../utils/contstant";

function ConfessionSlideSm() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="max-w-sm mx-auto px-4 md:max-w-[40rem] overflow-hidden">
      <Slider {...settings}>
        {data.map((curr, i) => (
          <div
            key={i}
            className="flex flex-col   relative  items-center justify-center p-2  border-2 border-gray-200 rounded-3xl "
          >
            <img src={curr.image} alt="" className="h-[30rem] md:h-[25rem]" />
            <div className="flex flex-col space-y-2 items-center -mt-8 md:absolute md:top-32 right-[1rem] md:max-w-[15rem]">
              <p className="text-lg text-center hidden md:block md:text-sm">
                {curr.comment}
              </p>
              <img
                src={curr.image}
                alt=""
                className="h-16 w-16 rounded-full ring-4 ring-white"
              />

              <h1 className="font-black text-2xl uppercase md:text-lg">
                {curr.name}
              </h1>
              <p className="text-lg capitalize md:text-sm">{curr.position}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ConfessionSlideSm;
