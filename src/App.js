import React from "react";
import HeroWithNavbar from "./components/HeroWithNavbar";
import OurStartups from "./components/OurStartups";
import OurApproach from "./components/OurApproach";
import IntegratedCapabilities from "./components/IntegratedCapabilities";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative">
      {/* Hero Section with Navbar */}
      <div className="sticky top-0 z-10 h-screen">
        <HeroWithNavbar />
      </div>

      {/* Content Sections */}
      <div className="relative z-20 bg-white">
        <OurStartups />
        <OurApproach />
        <IntegratedCapabilities />
        <AboutUs />
        <Footer />
      </div>
    </div>
  );
}

export default App;
