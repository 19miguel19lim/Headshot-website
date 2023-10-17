import { dataSuccess, position, content } from "../utils/contstant";
import { LiaComments, LiaHeart, LiaCloudUploadAltSolid } from "react-icons/lia";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SuccessStoriesSm() {
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
        {dataSuccess.map((curr) => (
          <div
            key={curr.id}
            className="flex flex-col px-4 py-12 mb-24 space-y-12 rounded-xl border-t-4 border-black hover:bg-black hover:text-white duration-100"
          >
            <div className="flex w-full items-center justify-between">
              <img src={curr.image} alt="" />
              <div className="flex flex-col text-left">
                <h1>{curr.name}</h1>
                <p>{position}</p>
              </div>
              <img src={curr.social} alt="" />
            </div>
            <p className="text-left max-w-sm">{content}</p>
            <div className="flex space-x-4 items-start w-1/2">
              <LiaComments
                size={25}
                className="hover:fill-lightBlue duration-300"
              />
              <LiaHeart
                size={25}
                className="hover:fill-lightBlue duration-300"
              />
              <LiaCloudUploadAltSolid
                size={25}
                className="hover:fill-lightBlue duration-300"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SuccessStoriesSm;
