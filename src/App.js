import React, { useState } from "react";
import "./App.css";

import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";

function App() {
  const [vietnamese, setVietnamese] = useState(true);

  return (
    <>
      <HeroSection vietnamese={vietnamese} setVietnamese={setVietnamese} />
      <AboutSection vietnamese={vietnamese} />
    </>
  );
}

export default App;
