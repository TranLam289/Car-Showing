"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book and Enjoy <br /> Your Next Adventure
        </h1>
        <p className="hero__subtitle">
          Streamline your car experience with our website
        </p>

        <CustomButton
          title="Explore Cars"
          containerStyle="bg-slate-600 text-white rounded-full mt-10"
          handleClick={() => {
            handleScroll;
          }}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
