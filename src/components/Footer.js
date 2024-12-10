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
          <img src="/logo.svg" alt="Namandla Advisors" className="w-36" />
          <p className="text-sm leading-relaxed blue-text font-openSans max-w-[350px] font-semibold  md:max-w-[300px] max-w-[270px]">
            Transforming startups into high-growth companies through founder alignment,
            design, branding, and strategy.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 md:pt-0 pt-6">Services</h3>
          <ul className="space-y-2">
             <li>
    <a href="#founders-alignment" className="text-sm hover:underline">
      Founder Alignment
    </a>
  </li>
  <li>
    <a href="#pmf" className="text-sm hover:underline">
      Product-Market Fit
    </a>
  </li>
  <li>
    <a href="#design-sprint" className="text-sm hover:underline">
      Product Design
    </a>
  </li>
  <li>
    <a href="#branding" className="text-sm hover:underline">
      Branding
    </a>
  </li>
 
  <li>
    <a href="#gtm" className="text-sm hover:underline">
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
              <a href="#studio" className="text-sm hover:underline">
                Our Studio
              </a>
            </li>
            <li>
              <a href="#case-studies" className="text-sm hover:underline">
                Case Studies
              </a>
            </li>
            <li>
              <a href="#startup-consulting" className="text-sm hover:underline">
                Startup Consulting
              </a>
            </li>
            <li>
              <a href="#assessment" className="text-sm hover:underline">
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
    <h3 className="indigo-text text-4xl sm:text-6xl md:text-8xl text-left gray-text max-w-[950px] md:pb-0 pb-12">
      Let’s grow your company together.
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
      className="bg-black text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition self-start"
    >
      Submit
    </button>
  </form>
</div>



      {/* Divider */}
  <div className="md:block hidden mt-12 border-t border-gray-300 relative z-10"></div>

      {/* Offices Section */}
      <div className="flex flex-col md:flex-row justify-between relative z-10 space-y-8 md:space-y-0 md:space-x-6 md:mt-12">
        {[
          {
            city: "Copenhagen",
            address: "Hvidovrevej 101. 1620 Copenhagen",
            phone: "+45 52788505",
          },
          {
            city: "Stockholm",
            address: "Drottning 100, 111 60 Stockholm",
            phone: "+46 8123 4567",
          },
          {
            city: "Barcelona",
            address: "Carrer de Mallorca, 08008 Barcelona",
            phone: "+34 932 123 456",
          },
        ].map((office, index) => (
          <div key={index} className=" pt-6 space-y-2 text-sm max-w-[200px] md:pd-0 md:last:pb-0 last:pb-12">
            <h4 className="font-semibold">{office.city}</h4>
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
