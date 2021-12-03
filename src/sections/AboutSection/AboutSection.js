import React from "react";

import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent/AboutContent";

const AboutSection = (props) => {
  return (
    <div className="mt-24" id="about">
      <AboutHeading vietnamese={props.vietnamese} />
      <AboutContent vietnamese={props.vietnamese} />
    </div>
  );
};

export default AboutSection;
