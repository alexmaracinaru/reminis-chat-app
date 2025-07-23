import React from "react";

const EthicalScreen = ({ onContinue, onBack }) => {
  return (
    <>
      {/* Top Bar */}
      <div className="relative w-full mb-8 px-6">
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
          alt="Light mode icon"
          className="w-6 h-6 absolute top-0 right-6"
        />
      </div>

      {/* First Text Block */}
      <div className="w-full px-6 mb-8 mt-6">
        <p className="text-md text-gray-600 text-center leading-relaxed font-alumni">
          REMINIS is an app designed to recreate the communication style of your
          loved ones who are no longer with us. By using advanced AI technology,
          REMINIS helps you relive and interact with cherished memories through
          conversations that feel real and personal.
        </p>
      </div>

      {/* Stylized Graphic */}
      <div className="w-full mb-8 flex justify-center px-6 m-4">
        <img
          src={`${process.env.PUBLIC_URL}/images/ethical.svg`}
          alt="Ethical illustration"
          className="w-32 h-12"
        />
      </div>

      {/* Main Heading */}
      <div className="w-full px-6 mb-8">
        <h2 className="text-xl font-light italic text-center font-garamond text-gray-800">
          Ethical Considerations
        </h2>
      </div>

      {/* Second Text Block */}
      <div className="w-full px-6 mb-8">
        <p className="text-md text-gray-600 text-center leading-relaxed font-alumni">
          We deeply value the privacy and dignity of both you and your loved
          ones. Our AI is trained using message histories to simulate
          conversational styles. This process involves sensitive data, and we
          take extensive measures to protect your privacy and ensure ethical use
          of the technology.
        </p>
      </div>

      {/* Continue Button */}
      <div className="w-full px-6 mt-auto">
        <button
          onClick={onContinue}
          className="bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 w-full font-alumni text-lg"
        >
          CONTINUE
        </button>
      </div>
    </>
  );
};

export default EthicalScreen;
