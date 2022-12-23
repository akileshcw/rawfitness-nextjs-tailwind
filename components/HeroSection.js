import React from "react";

import Image from "next/image";

import headerImage1 from "../public/pictures/headerImage.JPG";

const HeroSection = () => {
  return (
    <div>
          <div className="relative border-4 w-full h-full">
              <div className="h-[90vh] overflow-clip">
                <Image src={headerImage1} alt="This is the hero section" fill={true} layout="responsive" className='grayscale absolute' />
              </div>
              <div className='absolute bottom-0 left-1/2 py-6'>
                  <div className='bg-orange-300 rounded-full h-4 w-4 border-orange-800 border-2'></div>
              </div>
      </div>
    </div>
  );
};

export default HeroSection;
