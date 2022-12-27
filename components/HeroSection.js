import React, {useState} from "react";

import Image from "next/image";

import headerImage1 from "../public/pictures/headerImage.JPG";
import { useRouter } from "next/router";

const HeroSection = () => {
  const router = useRouter();
  const [imageButtonClick, setImageButtonClick] = useState(false)

  const handleImageButtonClick = (e) => {
    setImageButtonClick(!imageButtonClick)
  }
  return (
    <section className="snap-mandatory snap-start">
      <div className="w-full h-full">
        <div className="h-screen overflow-clip">
          <Image
            src={headerImage1}
            alt="This is the hero section"
            layout="responsive"
            className="grayscale absolute"
          />
        </div>
        <div className="max-w-5xl absolute w-1/3 top-[150px] left-1/4 space-y-10">
          <h1 className="xl:text-[78px] md:text-[48px] font-bold text-white">
            Get past your <span className="text-gradient">lazines</span>.
          </h1>
          <h1 className="sxl:text-[78px] md:text-[48px] font-bold text-white">
            Your <span className="text-gradient">fitness companion</span> is
            here
          </h1>
          <h1 className="xl:text-[78px] md:text-[48px] font-bold text-white">
            Welcome to{" "}
          </h1>
          <h1 className="xl:text-[78px] md:text-[48px] font-bold  text-gradient">
            Raw Fitness{" "}
          </h1>
          <button
            className="btn-main text-lg font-semibold tracking-wider"
            onClick={() => {
              router.push("/features");
            }}
          >
            Learn More
          </button>
        </div>
        <div className="absolute bottom-0 left-1/2 py-6 flex gap-4">
          <div className="rounded-full h-4 w-4 border-orange-800 border-4 cursor-pointer flex items-center justify-center">
            <div className="rounded-full h-1 w-1 bg-orange-500"></div>
          </div>
          <div
            className="rounded-full h-4 w-4 border-orange-800 border-4 cursor-pointer flex items-center justify-center"
            onClick={handleImageButtonClick}
          >
            {imageButtonClick ? (
              <div className="rounded-full h-1 w-1 bg-orange-500"></div>
            ) : null}
          </div>
          <div className="rounded-full h-4 w-4 border-orange-800 border-4 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
