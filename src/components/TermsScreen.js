import React from "react";

const TermsScreen = ({ onBack, onAgree }) => {
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

      {/* Greeting */}
      <div className="w-full px-6 mb-4 mt-4">
        <div className="flex items-center justify-between text-sm font-alumni text-gray-600 font-light">
          <span>HI THERE.</span>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <span>WELCOME TO REMINIS.</span>
        </div>
      </div>

      {/* Main Tagline */}
      <div className="w-full px-6 mb-6 flex justify-center">
        <p className="text-xl font-light italic max-w-[200px] text-center font-garamond text-gray-800 leading-tight">
          Reconnect with your loved ones who are no longer with us
        </p>
      </div>

      {/* Wave Image */}
      <div className="w-full mb-6 flex items-center justify-center px-6">
        <img
          src={`${process.env.PUBLIC_URL}/images/terms.png`}
          alt="Abstract wave graphic"
          className="w-12  h-12"
        />
      </div>

      {/* Terms and Conditions */}
      <div className="w-full px-6 mb-6">
        <p className="text-lg text-gray-600 mb-4 font-alumni">
          By proceeding, you agree to the following terms:
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <svg
              className="w-4 h-4 text-gray-500 mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z" />
            </svg>
            <p className="text-md text-gray-500 leading-relaxed font-alumni">
              I understand that the AI-generated responses are simulations and
              not actual communications from the deceased.
            </p>
          </div>

          <div className="w-full h-px bg-gray-300"></div>

          <div className="flex items-start">
            <svg
              className="w-4 h-4 text-gray-500 mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z" />
            </svg>
            <p className="text-md text-gray-500 leading-relaxed font-alumni">
              I consent to the use of my provided data solely for the purpose of
              training the AI within REMINIS.
            </p>
          </div>

          <div className="w-full h-px bg-gray-300"></div>

          <div className="flex items-start">
            <svg
              className="w-4 h-4 text-gray-500 mt-0.5 mr-3 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0L12.245 7.755L20 10L12.245 12.245L10 20L7.755 12.245L0 10L7.755 7.755L10 0Z" />
            </svg>
            <p className="text-md text-gray-500 leading-relaxed font-alumni">
              I acknowledge the emotional impact that interacting with the AI
              might have and agree to use the app responsibly.
            </p>
          </div>
        </div>
      </div>

      {/* Agree Button */}
      <div className="w-full px-6 mt-auto">
        <button
          onClick={onAgree}
          className="bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 w-full font-alumni text-xl"
        >
          AGREE & CONTINUE
        </button>
      </div>
    </>
  );
};

export default TermsScreen;
