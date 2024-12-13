import React from "react";
import Slider from "react-infinite-logo-slider";
import GradientBackground from "./GradientBackground";

const TrustedBy = () => {
  
  return (
    <div className=" px-6 md:px-36 md:py-48">
      <h2 className="text-4xl sm:text-5xl md:text-6xl  text-left  indigo-text pb-6">
     Our Clients & Friends
      </h2> 
      <p className="font-openSans text-xl sm:text-base md:text-sm blue-text leading-relaxed md:mb-24 max-w-[500px]">
            We, individually or as a team, worked with some of the best startups and brands in the world. They trusted us to help them launch or help them grow even more.
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
            className="w-28 h-auto"
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
