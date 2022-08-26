import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNave] = useState(false);
  const handelNav = () => {
    setNave(!nav);
  };
  const onRouteClick = (e, { name, route }) => {
    const anchor = document.querySelector(route);
    anchor.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };
  return (
    <div className="w-screen h-[80px] bg-zinc-200 fixed drop-shadow-lg z-30">
      <div className="px-4 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="font-bold text-3xl mr-4 sm:text-4xl cursor-default">
            Cloud.
          </h1>
          <ul className=" hidden sm:flex gap-10">
            <a href="#home" onClick={onRouteClick}>
              Home
            </a>
            <a href="#About" onClick={onRouteClick}>
              About
            </a>
            <a href="#Support" onClick={onRouteClick}>
              Support
            </a>
            <a href="#Platform" onClick={onRouteClick}>
              Platform
            </a>
            <a href="#Pricing" onClick={onRouteClick}>
              Pricing
            </a>
          </ul>
        </div>
        <div className="hidden sm:flex">
          <button className=" bg-transparent text-black hover:text-indigo-500">
            Sign In
          </button>
          <button className="hover:bg-transparent hover:text-indigo-600 border-2 border-indigo-600">
            Sign Up
          </button>
        </div>
        <div className="md:hidden cursor-pointer" onClick={handelNav}>
          {nav ? (
            <XIcon className="w-5 hover:text-indigo-600 " />
          ) : (
            <MenuIcon className="w-5 hover:text-indigo-600" />
          )}
        </div>
      </div>
      <ul
        className={
          nav
            ? "flex flex-col  bg-zinc-200 w-full px-8 sm:hidden absolute "
            : "hidden"
        }
      >
        <a
          href="#home"
          onClick={onRouteClick}
          className="border-b-4  border-zinc-300"
        >
          Home
        </a>
        <a
          href="#About"
          onClick={onRouteClick}
          className="border-b-4  border-zinc-300"
        >
          About
        </a>
        <a
          href="#Support"
          onClick={onRouteClick}
          className="border-b-4  border-zinc-300"
        >
          Support
        </a>
        <a
          href="#Platform"
          onClick={onRouteClick}
          className="border-b-4  border-zinc-300"
        >
          Platform
        </a>
        <a
          href="#Pricing"
          onClick={onRouteClick}
          className="border-b-4  border-zinc-300"
        >
          Pricing
        </a>
        <div className="flex flex-col">
          <button className="px-8 my-3 bg-transparent text-indigo-600 border-2 border-indigo-600 mb-4 hover:bg-indigo-600 hover:text-white">
            Sign In
          </button>
          <button className="px-8 py-3 hover:bg-transparent hover:text-indigo-600 border-2 border-indigo-600">
            Sign Up
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
