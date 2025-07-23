import React, { useState } from "react";

const SignupFormScreen = ({ onBack, onSubmit, onSignIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
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
    onSubmit(formData);
  };

  const handleEmailSignUp = () => {
    onSubmit(formData);
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

      {/* CREATE ACCOUNT Tabs */}
      <div className="w-full px-6 mb-8">
        <div className="flex items-center justify-center text-lg font-alumni text-gray-800">
          <span className="relative">CREATE</span>
          <div className="flex-1 h-px bg-gray-300 mx-4"></div>
          <span>ACCOUNT</span>
        </div>
      </div>

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="w-full px-6 space-y-6">
        {/* Email Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="your@email.com"
          />
        </div>

        {/* Username Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni">
            USERNAME
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="The name that will appear in the chat with your loved one"
          />
        </div>

        {/* First Name Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni">
            FIRST NAME
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="Your First Name"
          />
        </div>

        {/* Last Name Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni">
            LAST NAME
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="Your Last Name"
          />
        </div>

        {/* Password Field */}
        <div>
          <label className="block text-sm text-gray-600 font-alumni">
            PASSWORD
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
            className="w-full px-0 py-1 border-b border-gray-300 focus:outline-none focus:border-gray-500 font-alumni text-sm bg-transparent"
            placeholder="Password"
          />
        </div>

        {/* Sign Up Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-black text-white px-6 py-3 rounded-lg text-base hover:bg-gray-800 transition-colors duration-300 font-alumni"
          >
            SIGN UP
          </button>
        </div>

        {/* OR Separator */}
        <div className="flex items-center justify-center py-2">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-600 font-alumni px-4">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Sign Up with Email Button */}
        <div>
          <button
            type="button"
            onClick={handleEmailSignUp}
            className="w-full bg-white text-black px-6 py-3 rounded-lg text-base border border-gray-300 hover:bg-gray-50 transition-colors duration-300 font-alumni"
          >
            SIGN UP WITH EMAIL
          </button>
        </div>
      </form>

      {/* Terms & Privacy */}
      <div className="w-full px-6 mt-8">
        <p className="text-xs text-gray-600 text-center font-alumni leading-relaxed">
          By creating an account you agree with our{" "}
          <button
            type="button"
            className="text-gray-800 underline hover:text-gray-600"
          >
            Terms & Conditions
          </button>
          , and{" "}
          <button
            type="button"
            className="text-gray-800 underline hover:text-gray-600"
          >
            Privacy Policy
          </button>
          .
        </p>
      </div>
    </>
  );
};

export default SignupFormScreen;
