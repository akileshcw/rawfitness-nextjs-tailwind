import React from "react";

import Image from "next/image";

import headerImage1 from "../public/pictures/headerImage.JPG";

const HeroSection = () => {
  return (
    <div className="">
      <div className="w-full h-full">
        <div className="h-screen overflow-clip">
          <Image
            src={headerImage1}
            alt="This is the hero section"
            fill={true}
            layout="responsive"
            className="grayscale absolute"
          />
        </div>
        <div className="absolute w-1/3 top-1/4 left-1/4 space-y-10">
          <h1 className="text-6xl font-semibold tracking-wider text-white">
          Get past your <span className='text-gradient'>lazines</span>. Your <span className='text-gradient'>fitness companion</span> is here
          </h1>
          <h1 className="text-7xl font-bold">Welcome to </h1>
          <h1 className="text-7xl font-bold text-gradient tracking-widest">Raw Fitness </h1>
        </div>
        <div className="absolute bottom-0 left-1/2 py-6 flex gap-4">
          <div className="bg-orange-300 rounded-full h-4 w-4 border-orange-800 border-2 cursor-pointer"></div>
          <div className="rounded-full h-4 w-4 border-orange-800 border-4 cursor-pointer"></div>
          <div className="rounded-full h-4 w-4 border-orange-800 border-4 cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
