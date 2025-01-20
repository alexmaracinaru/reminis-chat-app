import React from "react";
import Slider from "react-infinite-logo-slider";

const TrustedBy = () => {
  return (
    <div className=" px-6 md:px-36 md:pt-36 md:pb-36 ">
      <h2 className="text-4xl sm:text-5xl md:text-6xl  text-left  indigo-text pb-12">
        Our Clients & Friends
      </h2>
      <p className="font-openSans text-gray-500 sm:text-base md:text-sm leading-relaxed md:mb-24 mb-12 max-w-[500px]">
        We’ve had the privilege of collaborating with some of the world’s most
        innovative startups and renowned brands. They trusted us to help launch
        their visions or elevate their growth to new heights.
      </p>

      <Slider
        width="150px"
        duration={20}
        pauseOnHover={true}
        blurBorders={false}
      >
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo1.png`}
            alt="Hubspot"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo2.png`}
            alt="IKEA"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo5.png`}
            alt="brandiaq"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo3.png`}
            alt="Nike"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo4.png`}
            alt="Frontify"
            className="w-24 h-auto"
          />
        </Slider.Slide>

        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo6.png`}
            alt="Bindia"
            className="w-24 h-auto"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default TrustedBy;
