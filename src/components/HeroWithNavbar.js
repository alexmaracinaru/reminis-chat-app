import React from "react";
import GradientBackground from "./GradientBackground";

const HeroWithNavbar = () => {
  return (
    <section className="relative h-screen">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        <GradientBackground />
      </div>

    {/* Navbar */}
<nav className="relative z-10 flex justify-between items-center px-6 md:px-36 py-4 pt-6 backdrop-blur-sm">
  {/* Logo with hover and home link */}
  <a href="/" className="flex items-center">
  <img
  src={`${process.env.PUBLIC_URL}/images/logo.svg`}
  alt="Namandla Advisors"
  className="w-36 h-auto transition-transform duration-300 ease-in-out hover:scale-95"
/>


  </a>

  {/* Navigation Links */}
  <div className="hidden md:flex items-center space-x-8">
    <a
      href="#"
      className="font-openSans font-semibold text-gray-500 text-sm indigo-text hover:text-gray-500 ease-in-out duration-300"
    >
      Our Studio
    </a>
    <a
      href="#"
      className="font-openSans font-semibold text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300"
    >
      Case Studies
    </a>
    <a
      href="#"
      className="font-openSans font-semibold text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300"
    >
      Startup Consulting
    </a>
    <button className="self-start px-6 py-2 btn-color text-white rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
      Assessment
    </button>
  </div>

  {/* Mobile Menu Button */}
  <button id="mobile-menu-button" className="block md:hidden text-black">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16m-7 6h7"
      />
    </svg>
  </button>
</nav>


      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-end justify-between px-6 sm:px-12 md:px-36 md:pb-36 md:h-full h-1/2">
        <h1 className="indigo-text text-5xl sm:text-6xl md:text-8xl text-left gray-text max-w-[650px] md:pb-0 pt-32">
          We're a venture design studio.
        </h1>
        <div className="flex flex-col space-y-4 md:max-w-[350px]">
          <p className="font-openSans text-xl sm:text-base md:text-sm blue-text leading-relaxed">
            We transform startups into high-growth companies through founder alignment,
            product design, branding, and go-to-market strategies.
          </p>
          <button className=" self-start px-6 py-2 mt-6 btn-color text-white rounded-full hover:bg-gray-800 transition duration-300 ease-in-out">
          Book scoping session
        </button>
        </div>
      </div>
    </section>
  );
};

export default HeroWithNavbar;
