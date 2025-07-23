import React from "react";

const ProfileSuccessScreen = ({ onNext, onEditProfile, onBack }) => {
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

      {/* Success Message */}
      <div className="w-full flex flex-col items-center justify-center px-6 flex-1">
        <div className="text-center">
          <p className="text-xl font-light italic text-gray-800 font-garamond leading-relaxed">
            Your profiles have been successfully created.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full px-6 mt-auto space-y-4">
        {/* Next Button */}
        <button
          onClick={onNext}
          className="w-full bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 font-alumni"
        >
          NEXT
        </button>

        {/* Edit Profile Link */}
        <div className="text-center">
          <button
            onClick={onEditProfile}
            className="text-sm text-gray-600 underline hover:text-gray-800 transition-colors font-alumni"
          >
            Edit profile
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSuccessScreen;
