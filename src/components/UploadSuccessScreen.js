import React from "react";

const UploadSuccessScreen = ({ onBack, onStartChat }) => {
  return (
    <>
      {/* Top Bar */}
      <div className="relative w-full mb-6 px-6">
        <button
          onClick={onBack}
          className="absolute top-0 left-6 text-gray-800 hover:text-gray-600 transition-colors"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/back-arrow.svg`}
            alt="Back arrow"
            className="w-6 h-6"
          />
        </button>
        <h1 className="text-2xl font-light text-gray-800 font-alumni text-center">
          REMINIS
        </h1>
        <img
          src={`${process.env.PUBLIC_URL}/images/light.svg`}
          alt="Dark mode icon"
          className="w-6 h-6 absolute top-0 right-6"
        />
      </div>

      {/* Central Graphic */}
      <div className="w-full flex justify-center px-6 mb-8">
        <div className="w-80 h-96 rounded-2xl overflow-hidden">
          <img
            src={`${process.env.PUBLIC_URL}/images/uploaded.png`}
            alt="Upload success graphic"
            className="w-80 h-96 object-contain"
          />
        </div>
      </div>

      {/* Success Message */}
      <div className="w-full px-6 mb-8">
        <div className="text-center">
          <p className="text-xl text-gray-800 font-garamond italic leading-relaxed mt-12">
            Your loved one's files were uploaded.
          </p>
        </div>
      </div>

      {/* Start Chat Button */}
      <div className="w-full px-6 mt-auto">
        <button
          onClick={onStartChat}
          className="w-full bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 font-alumni"
        >
          START CHAT
        </button>
      </div>
    </>
  );
};

export default UploadSuccessScreen;
