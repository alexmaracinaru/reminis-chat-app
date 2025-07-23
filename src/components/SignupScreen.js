import React from "react";

const SignupScreen = ({ onBack, onSignUp, onSignIn }) => {
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
          alt="Light mode icon"
          className="w-6 h-6 absolute top-0 right-6"
        />
      </div>

      {/* Language Selector */}
      <div className="w-full px-6 mb-8">
        <div className="flex items-center justify-between text-sm text-gray-600 font-alumni">
          <span>LANGUAGE</span>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <div className="flex items-center">
            <span>ENGLISH</span>
            <svg
              className="w-4 h-4 ml-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Wave Image */}
      <div className="w-full flex-1 mb-8 flex items-center justify-center px-6">
        <img
          src={`${process.env.PUBLIC_URL}/images/signup.png`}
          alt="Abstract wave graphic"
          className="w-96 h-96 object-contain"
        />
      </div>

      {/* Let's Get You Started */}
      <div className="w-full px-6 mb-6 flex justify-center">
        <p className="text-2xl font-light italic text-center font-garamond text-gray-800 max-w-[200px]">
          Let's Get You Started
        </p>
      </div>

      {/* Sign Up Button */}
      <div className="w-full px-6 mb-4">
        <button
          onClick={onSignUp}
          className="bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 w-full font-alumni text-lg"
        >
          SIGN UP
        </button>
      </div>

      {/* Sign In Link */}
      <div className="w-full px-6">
        <p className="text-sm text-gray-600 text-center font-alumni">
          Already have an account?{" "}
          <button
            onClick={onSignIn}
            className="text-gray-800 underline hover:text-gray-600 transition-colors"
          >
            Sign in.
          </button>
        </p>
      </div>
    </>
  );
};

export default SignupScreen;
