import React, { useState } from "react";
import PhoneFrame from "./PhoneFrame";
import HomeScreen from "./HomeScreen";
import TermsScreen from "./TermsScreen";
import EthicalScreen from "./EthicalScreen";
import SignupScreen from "./SignupScreen";
import SignupFormScreen from "./SignupFormScreen";
import UploadPhotoScreen from "./UploadPhotoScreen";
import LovedOneProfileScreen from "./LovedOneProfileScreen";
import LovedOnePhotoScreen from "./LovedOnePhotoScreen";
import ProfileSuccessScreen from "./ProfileSuccessScreen";
import MessageHistoryScreen from "./MessageHistoryScreen";
import UploadSuccessScreen from "./UploadSuccessScreen";
import ChatScreen from "./ChatScreen";

const AppScreen = () => {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [userPhoto, setUserPhoto] = useState(null);
  const [lovedOneProfile, setLovedOneProfile] = useState(null);
  const [lovedOnePhoto, setLovedOnePhoto] = useState(null);

  const handleEnterRealm = () => {
    setCurrentScreen("terms");
  };

  const handleBack = () => {
    setCurrentScreen("home");
  };

  const handleAgree = () => {
    setCurrentScreen("ethical");
  };

  const handleContinue = () => {
    setCurrentScreen("signup");
  };

  const handleSignUp = () => {
    setCurrentScreen("signupForm");
  };

  const handleSignUpSubmit = (formData) => {
    // Handle signup form submission
    console.log("Signup form submitted:", formData);
    setCurrentScreen("uploadPhoto");
  };

  const handleSignIn = () => {
    // Handle sign in - could navigate to sign in screen
    console.log("User clicked sign in");
    // setCurrentScreen("signin");
  };

  const handleUploadPhoto = (file, imageUrl) => {
    // Store the uploaded photo globally
    setUserPhoto({ file, imageUrl });
    console.log("Photo uploaded:", file.name);
    // You can navigate to the next screen here if needed
    // setCurrentScreen("next-screen");
  };

  const handlePhotoContinue = () => {
    // Navigate to the loved one profile screen after photo upload
    console.log("Continuing to loved one profile screen");
    setCurrentScreen("lovedOneProfile");
  };

  const handleLovedOneProfileContinue = (profileData) => {
    // Store the loved one profile data
    setLovedOneProfile(profileData);
    console.log("Loved one profile created:", profileData);
    // Navigate to the loved one photo screen
    setCurrentScreen("lovedOnePhoto");
  };

  const handleLovedOnePhotoUpload = (file, imageUrl) => {
    // Store the loved one's photo globally
    setLovedOnePhoto({ file, imageUrl });
    console.log("Loved one's photo uploaded:", file.name);
    // Navigate to the next screen
    // setCurrentScreen("next-screen");
  };

  const handleLovedOnePhotoContinue = () => {
    // Navigate to the success screen after loved one photo upload
    console.log("Continuing to success screen");
    setCurrentScreen("profileSuccess");
  };

  const handleNext = () => {
    // Navigate to the message history screen after success
    console.log("Moving to message history screen");
    setCurrentScreen("messageHistory");
  };

  const handleEditProfile = () => {
    // Navigate back to edit profile (could go to a profile editing screen)
    console.log("Edit profile clicked");
    // setCurrentScreen("editProfile");
  };

  const handleMessageHistoryUpload = (files) => {
    // Store the message history files globally
    // setMessageHistory(files); // This line was removed
    console.log("Message history files uploaded:", files.length);
  };

  const handleMessageHistoryContinue = () => {
    // Navigate to the upload success screen after message history upload
    console.log("Continuing to upload success screen");
    setCurrentScreen("uploadSuccess");
  };

  const handleStartChat = () => {
    // Navigate to the chat screen
    console.log("Starting chat");
    setCurrentScreen("chat");
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "home":
        return <HomeScreen onEnterRealm={handleEnterRealm} />;
      case "terms":
        return <TermsScreen onBack={handleBack} onAgree={handleAgree} />;
      case "ethical":
        return (
          <EthicalScreen
            onContinue={handleContinue}
            onBack={() => setCurrentScreen("terms")}
          />
        );
      case "signup":
        return (
          <SignupScreen
            onBack={() => setCurrentScreen("ethical")}
            onSignUp={handleSignUp}
            onSignIn={handleSignIn}
          />
        );
      case "signupForm":
        return (
          <SignupFormScreen
            onBack={() => setCurrentScreen("signup")}
            onSubmit={handleSignUpSubmit}
            onSignIn={handleSignIn}
          />
        );
      case "uploadPhoto":
        return (
          <UploadPhotoScreen
            onBack={() => setCurrentScreen("signupForm")}
            onUploadPhoto={handleUploadPhoto}
            onContinue={handlePhotoContinue}
          />
        );
      case "lovedOneProfile":
        return (
          <LovedOneProfileScreen
            onBack={() => setCurrentScreen("uploadPhoto")}
            onContinue={handleLovedOneProfileContinue}
          />
        );
      case "lovedOnePhoto":
        return (
          <LovedOnePhotoScreen
            onBack={() => setCurrentScreen("lovedOneProfile")}
            onUploadPhoto={handleLovedOnePhotoUpload}
            onContinue={handleLovedOnePhotoContinue}
          />
        );
      case "profileSuccess":
        return (
          <ProfileSuccessScreen
            onNext={handleNext}
            onEditProfile={handleEditProfile}
            onBack={() => setCurrentScreen("lovedOnePhoto")}
          />
        );
      case "messageHistory":
        return (
          <MessageHistoryScreen
            onBack={() => setCurrentScreen("profileSuccess")}
            onUploadFiles={handleMessageHistoryUpload}
            onContinue={handleMessageHistoryContinue}
          />
        );
      case "uploadSuccess":
        return (
          <UploadSuccessScreen
            onBack={() => setCurrentScreen("messageHistory")}
            onStartChat={handleStartChat}
          />
        );
      case "chat":
        return (
          <ChatScreen
            onBack={() => setCurrentScreen("uploadSuccess")}
            lovedOneProfile={lovedOneProfile}
            userPhoto={userPhoto}
            lovedOnePhoto={lovedOnePhoto}
          />
        );
      // Add more screens here as needed
      // case 'login':
      //   return <LoginScreen />;
      // case 'dashboard':
      //   return <DashboardScreen />;
      default:
        return <HomeScreen onEnterRealm={handleEnterRealm} />;
    }
  };

  return <PhoneFrame>{renderScreen()}</PhoneFrame>;
};

export default AppScreen;
