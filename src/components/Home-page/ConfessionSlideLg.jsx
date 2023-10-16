import React, { Component } from "react";
import Slider from "react-slick";


 function ConfessionSlideLg() {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
    };
    return (
      <div className="hidden md:block">
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <img src="../../../public/assets/Amazon-logo.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assets/Amazon-logo.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assets/Amazon-logo.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assets/Amazon-logo.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assets/Amazon-logo.png" alt="" />
          </div>
          <div>
            <img src="../../../public/assets/Amazon-logo.png" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
export default ConfessionSlideLg;
