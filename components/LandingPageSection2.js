import React from "react";

import { motion } from "framer-motion";

import { FaDumbbell, FaHeartbeat } from "react-icons/fa";
import { useRouter } from "next/router";

const LandingPageSection2 = () => {
  const router = useRouter();


  return (
    <>
      <section className="grid lg:grid-cols-2 sm:grid-cols-1 h-1/2 w-full snap-y snap-mandatory snap-start snap-always">
        <motion.div
          className="bg-gradient-to-r from-orange-200 to-pink-500 flex hover:bg-gray-100"
          
        >
          <div className="grid grid-rows-3 gap-5 mx-14">
            <div className="flex space-x-5 items-center">
              <div className="hover:rotate-45 transition duration-300">
                <FaHeartbeat
                  className="text-black h-16 w-16"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-semibold">
                  We train <span className="text-gradient">RIGOUROUSLY</span>.
                </h3>
                <h3 className="text-3xl font-semibold">
                  We help you transform{" "}
                  <span className="text-gradient">NATURALLY</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-center w-3/4">
              <p className="text-lg font-medium">
                Minim laborum sint occaecat sit aute sit anim fugiat irure.
                Tempor nisi ullamco v.Minim laborum sint occaecat sit.Minim
                laborum sint occaecat sit aute sit anim fugiat irure. Tempor
                nisi ullamco v.Minim laborum sint occaecat sit.
              </p>
            </div>
            <div className="">
              <button
                className="btn-main"
                onClick={() => {
                  router.push("/features");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-gradient-to-r from-gray-200 to-gray-500 flex hover:bg-gray-100"
          
        >
          <div className="grid grid-rows-3 gap-5 mx-14">
            <div className="flex space-x-5 items-center">
              <div className="hover:rotate-45 transition duration-300">
                <FaDumbbell
                  className="text-black h-16 w-16"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-3xl font-semibold">
                  We train <span className="text-gradient">RIGOUROUSLY</span>.
                </h3>
                <h3 className="text-3xl font-semibold">
                  We help you transform{" "}
                  <span className="text-gradient">NATURALLY</span>
                </h3>
              </div>
            </div>
            <div className="flex justify-center w-3/4">
              <p className="text-lg font-medium">
                Minim laborum sint occaecat sit aute sit anim fugiat irure.
                Tempor nisi ullamco v.Minim laborum sint occaecat sit.Minim
                laborum sint occaecat sit aute sit anim fugiat irure. Tempor
                nisi ullamco v.Minim laborum sint occaecat sit.
              </p>
            </div>
            <div className="">
              <button
                className="btn-main"
                onClick={() => {
                  router.push("/features");
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="max-w-7xl bg-white h-1/2"></section>
    </>
  );
};

export default LandingPageSection2;
