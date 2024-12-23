import React from "react";
import Slider from "react-infinite-logo-slider";
import GradientBackground from "./GradientBackground";

const TrustedBy = () => {
  
  return (
    <div className=" px-6 md:px-36 md:pt-36 md:pb-36 ">
      <h2 className="text-4xl sm:text-5xl md:text-6xl  text-left  indigo-text pb-12">
     Our Clients & Friends
      </h2> 
      <p className="font-openSans text-gray-500 text-xl sm:text-base md:text-sm leading-relaxed md:mb-24 max-w-[500px]">
      We’ve had the privilege of collaborating with some of the world’s most innovative startups and renowned brands. They trusted us to help launch their visions or elevate their growth to new heights.
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
            alt="Logo 1"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo2.png`}
            alt="Logo 2"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo5.png`}
            alt="Logo 5"
            className="w-24 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo3.png`}
            alt="Logo 3"
            className="w-20 h-auto"
          />
        </Slider.Slide>
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo4.png`}
            alt="Logo 4"
            className="w-32 h-auto"
          />
        </Slider.Slide>
       
        <Slider.Slide>
          <img
            src={`${process.env.PUBLIC_URL}/images/logo6.png`}
            alt="Logo 6"
            className="w-24
             h-auto"
          />
        </Slider.Slide>
      </Slider>
    </div>
  );
};

export default TrustedBy;
