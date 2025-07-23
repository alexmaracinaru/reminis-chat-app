import React, { useState } from "react";

const LovedOneProfileScreen = ({ onBack, onContinue }) => {
  const [formData, setFormData] = useState({
    lovedOneName: "",
    relationship: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.lovedOneName && formData.relationship) {
      onContinue(formData);
    } else {
      alert("Please fill in the required fields.");
    }
  };

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

      {/* CREATE LOVED ONE'S PROFILE Tabs */}
      <div className="w-full px-6 mb-8">
        <div className="flex items-center justify-center text-lg font-alumni text-gray-800">
          <span className="relative">CREATE</span>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <span>LOVED ONE'S PROFILE</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full px-6 space-y-6">
        {/* Loved One's Name Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni mb-2">
            LOVED ONE'S NAME
          </label>
          <input
            type="text"
            name="lovedOneName"
            value={formData.lovedOneName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="As used in the app. This will appear in the chat. E.G.: 'Ellie'"
          />
        </div>

        {/* Relationship Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni mb-2">
            RELATIONSHIP
          </label>
          <input
            type="text"
            name="relationship"
            value={formData.relationship}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="Sibling, Friend, Parent..."
          />
        </div>

        {/* Brief Description Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni mb-2">
            BRIEF DESCRIPTION
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="3"
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent resize-none"
            placeholder="Describe your relationship with your loved one or tell us what you
            think it's important for our AI to know in order to help you get the
            most accurate experience."
          />
        </div>

        {/* Abstract Graphic */}
        <div className="flex justify-center py-12">
          <img
            src={`${process.env.PUBLIC_URL}/images/loved-icon.svg`}
            alt="Abstract heart-seed graphic"
            className="w-32 h-20 object-contain"
          />
        </div>

        {/* Continue Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 font-alumni"
          >
            CONTINUE
          </button>
        </div>
      </form>
    </>
  );
};

export default LovedOneProfileScreen;
