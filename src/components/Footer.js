import React from "react";
import GradientBackground from "./GradientBackground";

const Footer = () => {
  return (
    <footer className="relative text-gray-800 px-6 md:px-36 md:pt-48 md:mt-0 mt-12 pt-12 pb-12">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-[-1]">
        <GradientBackground />
      </div>

      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between relative z-10">
        {/* Column 1: Logo and Description */}
        <div className="flex flex-col space-y-4">
        <img
  src={`${process.env.PUBLIC_URL}/images/logo.svg`}
  alt="Namandla Advisors"
  className="w-36 h-auto transition-transform duration-300 ease-in-out hover:scale-95"
/>

          <p className="text-sm leading-relaxed blue-text font-openSans max-w-[350px] font-semibold  md:max-w-[300px] max-w-[270px]">
          We support and invest in companies we
          would personally want to join.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-lg font-medium mb-4 md:pt-0 pt-6">Services</h3>
          <ul className="space-y-2">
             <li>
        <a href="#founders-alignment" className=" text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
      Founder Alignment
    </a>
  </li>
  <li>
    <a href="#pmf" className="text-xs font-openSans font-medium text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
      Product-Market Fit
    </a>
  </li>
  <li>
    <a href="#pmf" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
      Product Design
    </a>
  </li>
  <li>
    <a href="#branding" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
      Branding
    </a>
  </li>
 
  <li>
    <a href="#gtm" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
      Go-To-Market
    </a>
  </li>
</ul>

        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 md:pt-0 pt-6">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#studio" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
                Our Studio
              </a>
            </li>
            <li>
              <a href="#case-studies" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#startup-consulting" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
                Startup Consulting
              </a>
            </li>
            <li>
              <a href="#assessment" className="text-xs font-openSans font-medium  text-gray-500 text-sm indigo-text hover:text-gray-500  ease-in-out duration-300">
               Assessment
              </a>
            </li>
          </ul>
        </div>
      </div>
  {/* Divider */}
  <div className="mt-12 border-t border-gray-300 pt-6 relative z-10"></div>

{/* Bottom Inquiry Section */}
<div className="mt-8 py-8 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 relative z-10">
  <div className="md:mb-12 text-center md:text-left">
    <h3 className="indigo-text text-4xl sm:text-6xl md:text-8xl lg:text-7xl xl:text-7xl 2xl:text-8xl text-left gray-text max-w-[950px] md:pb-0 pb-12 pr-12">
      Let’s design your company together.
    </h3>
  </div>
  <form className="flex flex-col space-y-4 w-full max-w-md">
    <input
      type="text"
      placeholder="Your Name"
      className="border-b border-gray-400 focus:border-black transition-all px-2 py-2 w-full outline-none placeholder-gray-600 text-sm bg-transparent"
      required
    />
    <input
      type="email"
      placeholder="Your Email"
      className="border-b border-gray-400 focus:border-black transition-all px-2 py-2 w-full outline-none placeholder-gray-600 text-sm bg-transparent"
      required
    />
    <textarea
      placeholder="How can we help you?"
      className="border-b border-gray-400 focus:border-black transition-all px-2 py-2 w-full outline-none placeholder-gray-600 text-sm h-24 resize-none bg-transparent"
      required
    ></textarea>
    <button
      type="submit"
      className="bg-black text-white px-6 py-2 rounded-full text-sm hover:bg-gray-700 transition self-start"
    >
     Work with us
    </button>
  </form>
</div>



      {/* Divider */}
  <div className="md:block hidden mt-12 border-t border-gray-300 relative z-10"></div>

      {/* Offices Section */}
      <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-8 md:space-y-0 md:space-x-6 md:mt-12">
        {[
          {
            country: "Denmark ",
            address: "Hvidovrevej 101. 1620 Copenhagen",
            phone: "+45 91994403",
          },
          {
            country: "Sweden",
            address: "Drottning 100, 111 60 Stockholm",
            phone: "+46 8123 4567",
          },
          {
            country: "Spain",
            address: "Carrer de Mallorca, 08008 Barcelona",
            phone: "+34 932 123 456",
          },
        ].map((office, index) => (
          <div key={index} className=" pt-6 space-y-2 text-sm max-w-[200px] md:pd-0 md:last:pb-0 last:pb-12">
            <h4 className="font-semibold">{office.country}</h4>
            <p>{office.address}</p>
            <p>{office.phone}</p>
          </div>
        ))}
      </div>
{/* Bottom Section */}
{/* <div className="mt-12 border-t border-gray-300 pt-12 relative z-10 flex flex-col md:flex-row justify-between items-center">
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Namandla Advisors. All rights
          reserved.
        </p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li>
            <a href="#" className="hover:underline text-sm">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline text-sm">
              Terms of Service
            </a>
          </li>
        </ul>
      </div> */}
     
    </footer>
  );
};

export default Footer;
