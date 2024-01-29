import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="./assets/carousel1.jpeg" alt="Poza 1" />
      </div>
      <div>
        <img src="./assets/carousel2.jpeg" alt="Poza 2" />
      </div>
      <div>
        <img src="./assets/carousel3.jpeg" alt="Poza 3" />
      </div>
      <div>
        <img src="./assets/carousel4.jpeg" alt="Poza 4" />
      </div>
    </Slider>
  );
}
