import React, { useState, useRef } from "react";

const MessageHistoryScreen = ({ onBack, onUploadFiles, onContinue }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    if (files.length > 0) {
      // Validate file types
      const validTypes = [".txt", ".pdf", ".csv"];
      const invalidFiles = files.filter((file) => {
        const extension = "." + file.name.split(".").pop().toLowerCase();
        return !validTypes.includes(extension);
      });

      if (invalidFiles.length > 0) {
        alert("Please select only .txt, .pdf, or .csv files.");
        return;
      }

      // Validate file sizes (max 10MB each)
      const oversizedFiles = files.filter(
        (file) => file.size > 10 * 1024 * 1024
      );
      if (oversizedFiles.length > 0) {
        alert("Please select files smaller than 10MB each.");
        return;
      }

      setUploadedFiles(files);
      onUploadFiles(files);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleContinue = () => {
    if (uploadedFiles.length > 0) {
      onContinue();
    } else {
      alert("Please upload message history files to continue.");
    }
  };

  return (
    <>
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        accept=".txt,.pdf,.csv"
        multiple
        className="hidden"
      />

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

      {/* UPLOAD MESSAGE HISTORY Tabs */}
      <div className="w-full px-6 mb-8">
        <div className="flex items-center justify-center text-lg font-alumni text-gray-800">
          <span className="relative">UPLOAD</span>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <span>MESSAGE HISTORY</span>
        </div>
      </div>

      {/* Central Graphic */}
      <div className="w-full flex justify-center px-6 mb-8">
        <img
          src={`${process.env.PUBLIC_URL}/images/message.svg`}
          alt="Message history graphic"
          className="w-64 h-48 object-contain mt-12"
        />
      </div>

      {/* Instructions Text */}
      <div className="w-full px-6 mb-8">
        <div className="text-center">
          <p className="text-xl text-gray-600 font-garamond italic leading-relaxed max-w-[280px] mx-auto">
            Please upload the message history file between you and your loved
            one. This will help our AI recreate their communication style.
          </p>
        </div>
      </div>

      {/* Upload Files Button */}
      <div className="w-full px-6 mt-auto">
        <button
          onClick={onContinue}
          className="w-full bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 font-alumni"
        >
          UPLOAD FILES
        </button>

        {/* Supported File Types */}
        <div className="text-center mt-3">
          <p className="text-xs text-gray-500 font-alumni">
            Supported file types: .txt, .pdf, .csv
          </p>
        </div>
      </div>
    </>
  );
};

export default MessageHistoryScreen;
