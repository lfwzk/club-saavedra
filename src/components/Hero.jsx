import React from "react";

import logo from "../assets/saavedra.png";
import video from "../assets/video/soccer.mp4";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section className="hero h-screen relative overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-1000"
        autoPlay
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
      {/* Contenido del héroe */}
      <div className="absolute top-1/3  left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <img src={logo} alt="Logo" className="mx-auto w-60 h-auto" />
        <TypeAnimation
          cursor={false}
          sequence={["CLUB SAAVEDRA"]}
          wrapper="h1"
          className="text-white text-4xl font-bold mt-2 "
        />
      </div>
    </section>
  );
};

export default Hero;

{
  /* <TypeAnimation
cursor={false}
sequence={["CLUB SAAVEDRA"]}
wrapper="h1"
className="text-white text-4xl font-bold mt-2 "
/> */
}
