import React from "react";

const PhoneFrame = ({ children }) => {
  return (
    <section className="relative h-screen bg-black">
      {/* Navbar */}
      <nav className="relative z-10 flex justify-between items-center px-6 md:px-36 py-4 pt-6">
        {/* Mobile Menu Button */}
        <button id="mobile-menu-button" className="block md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
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

      {/* Phone Frame Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        {/* Phone Frame */}
        <div className="relative">
          <div className="w-96 h-[800px] bg-white rounded-[2rem] shadow-2xl border-8 border-gray-700 relative">
            {/* REMINIS App Content Inside Phone */}
            <div className="relative w-full h-full bg-[#EAE8E3] rounded-[2rem] overflow-y-auto flex flex-col px-6 py-6">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhoneFrame;
