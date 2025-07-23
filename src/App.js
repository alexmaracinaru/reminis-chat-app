import React from "react";
import AppScreen from "./components/AppScreen";

function App() {
  return (
    <div className="relative">
      {/* App Screen with Phone Frame */}
      <div className="sticky top-0 z-10 h-screen">
        <AppScreen />
      </div>

      {/* Content Sections */}
      <div className="relative z-20 bg-white"></div>
    </div>
  );
}

export default App;
