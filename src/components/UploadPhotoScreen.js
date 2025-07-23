import React, { useState, useRef } from "react";

const UploadPhotoScreen = ({ onBack, onUploadPhoto, onContinue }) => {
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("Please select an image smaller than 5MB.");
        return;
      }

      // Create a URL for the uploaded image
      const imageUrl = URL.createObjectURL(file);
      setUploadedPhoto(imageUrl);

      // Call the parent handler with the file and URL
      onUploadPhoto(file, imageUrl);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleBack = () => {
    // Clean up the object URL if it exists
    if (uploadedPhoto) {
      URL.revokeObjectURL(uploadedPhoto);
    }
    onBack();
  };

  const handleContinue = () => {
    if (uploadedPhoto) {
      onContinue();
    } else {
      alert("Please upload a photo to continue.");
    }
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept="image/*"
        className="hidden"
      />

      {/* Top Bar */}
      <div className="relative w-full mb-6 px-6">
        <button
          onClick={handleBack}
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

      {/* UPLOAD YOUR PHOTO Tabs */}
      <div className="w-full px-6 mb-8">
        <div className="flex items-center justify-center text-lg font-alumni text-gray-800">
          <span className="relative">UPLOAD</span>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <span>YOUR PHOTO</span>
        </div>
      </div>

      {/* Photo Upload Area */}
      <div className="w-full flex flex-col items-center px-6 mb-8 mt-12">
        {/* Circular Photo Placeholder */}
        <div className="w-36 h-36 rounded-full border-2 border-gray-300 flex items-center justify-center mb-6 overflow-hidden">
          {uploadedPhoto ? (
            <img
              src={uploadedPhoto}
              alt="Uploaded photo"
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={`${process.env.PUBLIC_URL}/images/circle-image.svg`}
              alt="Photo placeholder"
              className="w-24 h-16 object-contain"
            />
          )}
        </div>

        {/* Descriptive Text */}
        <div className="text-center mb-8">
          <p className="text-md text-gray-600 font-alumni leading-relaxed max-w-[200px]">
            Your photo will be shown on your profile and in the chats with your
            loved ones.
          </p>
        </div>

        {/* Abstract Graphic */}
        <div className="mb-8">
          <img
            src={`${process.env.PUBLIC_URL}/images/vertical.svg`}
            alt="Abstract graphic"
            className="w-36 h-24 object-contain mt-18"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="w-full px-6 mt-auto space-y-3">
        {/* Primary Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 font-alumni"
        >
          CONTINUE
        </button>

        {/* Secondary Change Photo Button */}
        <button
          onClick={handleUploadClick}
          className="w-full bg-white text-black px-6 py-3 rounded-lg text-base border border-gray-300 hover:bg-gray-50 transition-colors duration-300 font-alumni"
        >
          {uploadedPhoto ? "CHANGE PHOTO" : "UPLOAD PHOTO"}
        </button>
      </div>
    </>
  );
};

export default UploadPhotoScreen;
