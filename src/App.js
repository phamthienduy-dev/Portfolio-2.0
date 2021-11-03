import React, { useState } from "react";

import HeroSection from "./sections/HeroSection/HeroSection";

import "./App.css";

function App() {
  const [vietnamese, setVietnamese] = useState(true);

  return (
    <>
      <HeroSection vietnamese={vietnamese} setVietnamese={setVietnamese} />
    </>
  );
}

export default App;
