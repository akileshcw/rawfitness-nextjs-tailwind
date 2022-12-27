import React from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import { useRouter } from "next/router";

const Services = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Raw Fitness - Services</title>
      </Head>
      <Navbar />
      <div className="flex flex-col space-y-5 justify-center items-center center mx-auto max-w-5xl h-screen">
        <h1 className="font-bold text-black text-4xl text-center">Services</h1>
        <button
          className="btn-main text-black font-semibold text-2xl"
          onClick={() => {
            router.push("/");
          }}
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Services;
