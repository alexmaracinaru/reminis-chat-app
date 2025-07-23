import React from "react";

const HomeScreen = ({ onEnterRealm }) => {
  return (
    <>
      {/* App Name and Icon Container */}
      <div className="relative w-full mb-8 px-6">
        <h1 className="text-2xl font-light text-gray-800 font-alumni text-center">
          REMINIS
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/light.svg`}
          alt="Light mode icon"
          className="w-6 h-6 absolute top-0 right-6"
        />
      </div>

      {/* Wave Image */}
      <div className="w-full flex-1 mb-6 flex items-center justify-center px-6">
        <img
          src={`${process.env.PUBLIC_URL}/images/home.png`}
          alt="Abstract wave graphic"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Enter Realm Button */}
      <div className="w-full px-6 mb-4">
        <button
          onClick={onEnterRealm}
          className="bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 w-full font-alumni text-lg"
        >
          ENTER REALM
        </button>
      </div>

      {/* Tagline */}
      <div className="flex justify-center">
        <p className="text-gray-600 text-xl font-light italic text-center font-garamond max-w-[200px] leading-tight">
          Reconnect with Cherished Memories
        </p>
      </div>
    </>
  );
};

export default HomeScreen;
