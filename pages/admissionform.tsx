import React from "react";
import Lottie from "lottie-react";

import admissionForm from "./../public/AdmissionForm.json";
import Head from "next/head";

import { bloodGroup } from "../utils/bloodGroup";
import { profession } from "./../utils/profession";

function AdmissionForm() {
  return (
    <>
      <Head>
        <title>Raw Fitness</title>
      </Head>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-orange-500 font-extrabold lg:text-6xl text-3xl p-8 tracking-wider text-center">
          Raw Fitness Studio
        </h1>
        <h2 className="font-bold lg:text-4xl text-2xl p-4 underline underline-offset-4 decoration-orange-600 decoration-4 tracking-wide decoration-rounded text-center">
          Admission Form
        </h2>
      </div>
      {/* ---------------FORM OVERALL LAYOUT DIV----------------------------*/}
      <div className="lg:grid lg:grid-cols-2 flex">
        <div className="w-auto hidden lg:block h-screen">
          <Lottie animationData={admissionForm} />
        </div>
        <div className="flex shadow-md lg:w-auto mx-auto">
          <form action="">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10 lg:place-content-center">
              <div className="form-group">
                <label className="text-xl font-semibold">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Please enter your full name"
                  className="input-element"
                />
              </div>
              <div className="form-group">
                <label className="text-xl font-semibold">
                  Phone Number (WhatsApp Number)
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  size={10}
                  required
                  placeholder="Please enter your phone number"
                  className="input-element"
                />
              </div>
              <div className="form-group">
                <label className="text-xl font-semibold">Date of Birth</label>
                <input
                  type="date"
                  maxLength={8}
                  size={8}
                  required
                  placeholder="Please enter your phone number"
                  className="input-element"
                />
              </div>
              <div className="form-group">
                <label className="form-indivudual-header">Gender</label>
                <div className="flex space-x-10 items-center">
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="input-element"
                    />
                    <label className="radioBtn-label">Female</label>
                  </div>
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="input-element"
                    />
                    <label className="radioBtn-label">Male</label>
                  </div>
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="focus:outline-orange-500 focus:outline-4 lg:p-4"
                    />
                    <label className="radioBtn-label">Other</label>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="form-indivudual-header">Blood Group</label>
                <select
                  name="bloodGroup"
                  id="bloodGroup"
                  className="input-element"
                >
                  {bloodGroup.map((group) => (
                    <option value={`${group.group}`} key={group.id}>
                      {group.group}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-indivudual-header">Profession</label>
                <select
                  name="profession"
                  id="profession"
                  className="input-element"
                >
                  {profession.map((group) => (
                    <option value={`${group.profession}`} key={group.id}>
                      {group.profession}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label className="form-indivudual-header">
                  Reference (if any)
                </label>
                <input
                  type="text"
                  className="input-element"
                  placeholder="Please enter the person or media that referred you"
                />
              </div>
              <div className="form-group">
                <label htmlFor="" className="form-indivudual-header">
                  Membership Start Date
                </label>
                <input type="date" className="input-element" />
              </div>
              <div className="form-group col-span-2">
                <label htmlFor="" className="form-indivudual-header">
                  Membership Type
                </label>
                <div className="flex space-x-20 items-center">
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="input-element"
                    />
                    <label className="radioBtn-label">Monthly</label>
                  </div>
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="input-element"
                    />
                    <label className="radioBtn-label">3 Months</label>
                  </div>
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="focus:outline-orange-500 focus:outline-4 lg:p-4"
                    />
                    <label className="radioBtn-label">6 Months</label>
                  </div>
                  <div className="radioBtn-group">
                    <input
                      type="radio"
                      required
                      name="gender"
                      value="male"
                      className="focus:outline-orange-500 focus:outline-4 lg:p-4"
                    />
                    <label className="radioBtn-label">1 Year</label>
                  </div>
                </div>
              </div>
              <button type='submit' className="col-span-2 justify-center p-4 bg-orange-500 text-white font-bold text-xl rounded-xl hover:scale-110 transition duration:300 active:scale-90">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AdmissionForm;
