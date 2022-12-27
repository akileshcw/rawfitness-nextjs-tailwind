import React from "react";
import { useState } from "react";

import { useRouter } from "next/router";

import { navBarItems } from './../utils/constants';


import {
  BeakerIcon,
  Bars3Icon,
  XMarkIcon,
  UserPlusIcon,
  HomeIcon,
  ListBulletIcon,
  CurrencyDollarIcon,
  PhoneIcon,
  UserMinusIcon,
} from "@heroicons/react/24/solid";



function Navbar() {

  const router = useRouter();
  const [isNavbarClick, setIsNavbarClick] = useState(false);
  const [user, setUser] = useState(false);

  const openDrawer = () => {
    setIsNavbarClick(!isNavbarClick);
  };

  return (
    <div className="w-full z-20 absolute top-2">
      <nav className="nav-parent">
        {/* -------------------- LOGO AND LOGO TEXT --------------------------*/}
        <div
          className="flex items-center hover:scale-110 transition duration-300 active:scale-90 cursor-pointer"
          onClick={() => {
            router.push("/");
          }}
        >
          <BeakerIcon className="h-6 w-6 text-orange-500" />
          <h1 className="nav-logo-header">Raw Fitness</h1>
        </div>
        <div>
          <ul className="lg:flex space-x-7 text-lg font-semibold hidden text-white items-center">
            {navBarItems.map((navBarItem) => (
              <div
                key={navBarItem.id}
                className="flex space-x-2 py-4 rounded-lg hover:scale-110 transition duration-300 active:scale-95 text-gradient"
                onClick={(e) => {
                  e.preventDefault;
                  router.push(navBarItem.href);
                }}
              >
                {navBarItem.icon}
                <li className="nav-indivudual-item">{navBarItem.title}</li>
              </div>
            ))}
          </ul>
        </div>
        <div>
          <ul className="lg:flex space-x-4 font-semibold hidden">
            <li>
              <div
                className="flex space-x-2 cursor-pointer py-3 border-4 text-white rounded-lg px-2 border-orange-500 hover:bg-orange-500 hover:text-white hover:scale-110 transition duration-300 active:scale-95"
                onClick={(e) => {
                  e.preventDefault;
                  router.push("/signIn");
                }}
              >
                <UserPlusIcon className="w-6 h-6 text-orange-500 hover:text-white" />
                <h3>Sign in</h3>
              </div>
            </li>
          </ul>
        </div>
        {/* --------------------------- MOBILE NAVIGATION MENU ---------------------------*/}
        <div
          className="flex items-center hover:scale-110 transition duration-300 active-90 lg:hidden"
          onClick={openDrawer}
        >
          {isNavbarClick ? (
            <XMarkIcon className="w-6 h-6 text-orange-500" />
          ) : (
            <Bars3Icon className="h-6 w-6 text-orange-500" />
          )}
          <h2 className="text-lg font-bold tracking-wider px-2 text-white">
            Menu
          </h2>
        </div>
      </nav>
      {/* -----------------------MOBILE NAVIGATION DRAWER ------------------------ */}
      {isNavbarClick ? (
        <div className="flex flex-col items-center space-y-2 mb-4 lg:hidden">
          {!user ? (
            <div className="mobile-nav-button" onClick={() => {router.push("/signIn")}}>
              <UserPlusIcon className="w-6 h-6 text-orange-500" />
              <h3 className="text-xl font-medium text-gradient">Sign In</h3>
            </div>
          ) : null}
          {navBarItems.map((item) => (
            <div
              className="mobile-nav-item"
              key={item.id}
              onClick={() => {
                router.push(`${item.href}`);
              }}
            >
              {item.icon}
              <h3 className="text-lg font-medium text-gradient">{item.title}</h3>
            </div>
          ))}

          {user ? (
            <div className="mobile-nav-button">
              <UserMinusIcon className="w-6 h-6 text-orange-500" />
              <h3 className="text-lg font-medium">Log out</h3>
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
