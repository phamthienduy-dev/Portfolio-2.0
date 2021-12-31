import React, { useState } from "react";
import "./App.css";
import { useInView } from "react-intersection-observer";
import ReactModal from "react-modal";

import NavBar from "./components/NavBar";
import HeroSection from "./sections/HeroSection/HeroSection";
import AboutSection from "./sections/AboutSection/AboutSection";
import ProjectSection from "./sections/ProjectSection/ProjectSection";
import CTASection from "./sections/CTASection/CTASection";
import Footer from "./sections/Footer/Footer";
import SocialMediaIcons from "./components/SocialMediaIcons";

ReactModal.setAppElement("#root");

function App() {
  const [vietnamese, setVietnamese] = useState(true);
  const { ref, inView } = useInView({
    rootMargin: "-60px 0px 0px 0px",
    threshold: 0.4,
  });

  if (vietnamese) {
    document.title = "Xin chào, mình là Duy!";
  } else {
    document.title = "Hi I am Duy!";
  }

  return (
    <>
      <div className="h-full pt-6 dark:bg-gray-900" id="app">
        <SocialMediaIcons />
        <NavBar
          ref={ref}
          vietnamese={vietnamese}
          setVietnamese={setVietnamese}
          inView={inView}
        />
        <HeroSection vietnamese={vietnamese} setVietnamese={setVietnamese} />
        <AboutSection vietnamese={vietnamese} />
        <ProjectSection vietnamese={vietnamese} />
        <CTASection vietnamese={vietnamese} />
        <Footer vietnamese={vietnamese} setVietnamese={setVietnamese} />
      </div>
    </>
  );
}

export default App;
