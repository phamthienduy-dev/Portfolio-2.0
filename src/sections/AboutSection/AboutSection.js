import React from "react";

import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent/AboutContent";

const AboutSection = (props) => {
  return (
    <section className="mt-24 ">
      <AboutHeading vietnamese={props.vietnamese} />
      <AboutContent vietnamese={props.vietnamese} />
    </section>
  );
};

export default AboutSection;
