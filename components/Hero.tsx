"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";

export default function Hero() {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-10 sm:pt-32">
        <h1 className="hero__title">
          Find, book or rent any car quickly and easily!
        </h1>

        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        {/* <CustomButton
          title="Explore Cars"
          containerStyles="bg-primary-blue text-white rounded-full mt-10 mx-auto"
          handleClick={handleScroll}
        /> */}
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/hero.png"
            alt="hero img"
            fill
            className="object-contain"
          />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
}
