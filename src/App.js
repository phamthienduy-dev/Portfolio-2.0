import React, { useState } from "react";
import "./App.css";

import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";
import NavBar from "./sections/HeroSection/NavBar";

function App() {
  const [vietnamese, setVietnamese] = useState(true);

  return (
    <>
      <NavBar vietnamese={vietnamese} setVietnamese={setVietnamese} />
      <HeroSection vietnamese={vietnamese} setVietnamese={setVietnamese} />

      <AboutSection vietnamese={vietnamese} />
      <ProjectSection vietnamese={vietnamese} />
      <CTASection vietnamese={vietnamese} />

      <Footer vietnamese={vietnamese} setVietnamese={setVietnamese} />
    </>
  );
}

export default App;
