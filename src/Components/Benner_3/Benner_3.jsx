import React from "react";
import Container from "../container/Container";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Benner_4 from "../Benner_4/Benner_4";
const Benner_3 = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 1500,
    initialSlide: 0,
  };
  return (
    <>
      <section className="bg-blue-800 pb-[200px]">
        <Container>
          <div className="carousel  p-5 w-[1120px] mx-auto cursor-pointer">
            <Slider {...settings}>
              <div className="box h-[300px] ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="mongo.png"
                  alt="mongo"
                />
              </div>
              <div className="box h-[300px] ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="Express.png"
                  alt="Express"
                />
              </div>
              <div className="box h-[300px]  ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="react.js.png"
                  alt="react"
                />
              </div>
              <div className="box h-[300px]  ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="Node.js.png"
                  alt="Node"
                />
              </div>
              <div className="box h-[300px] ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="mongo.png"
                  alt="mongo"
                />
              </div>
              <div className="box h-[300px] ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="Express.png"
                  alt="Express"
                />
              </div>
              <div className="box h-[300px]  ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="react.js.png"
                  alt="react"
                />
              </div>
              <div className="box h-[300px]  ">
                <img
                  className="w-[200px] h-[200px] rounded-full"
                  src="Node.js.png"
                  alt="Node"
                />
              </div>
            </Slider>
          </div>
        </Container>
      </section>
      <Benner_4 />
    </>
  );
};

export default Benner_3;
