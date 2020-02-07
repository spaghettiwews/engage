import React from "react";
import { heroSlides } from "../siteConfig";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      {heroSlides.map(heroSlide => {
        return (
          <>
            <div className="hero__image">
              <img src={heroSlide.image} alt="hero" />
            </div>
            <div className="hero__caption">
              <h2>{heroSlide.caption}</h2>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Hero;
