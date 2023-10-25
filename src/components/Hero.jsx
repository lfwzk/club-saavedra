import React from "react";
import img from "../assets/background.jpg";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: ` url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Somos un club",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Escuela de Futbol",
              1000,
              "Club de Futbol",
              1000,
              "Club de Futbol",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "4em", display: "inline-block" }}
            repeat={Infinity}
            cursor={true}
            cursorStyle="_"
            cursorBlinkSpeed={500}
            color="#fff"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
