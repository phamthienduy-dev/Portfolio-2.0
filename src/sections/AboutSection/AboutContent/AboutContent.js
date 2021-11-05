import React from "react";

import AboutCard from "./AboutCard";
import AboutIllustration from "./AboutIllustration";

const AboutContent = (props) => {
  return (
    <div className="container bg-gray-50 rounded-2xl my-8 p-8 grid grid-cols-2  ">
      <AboutCard vietnamese={props.vietnamese} />
      <AboutIllustration vietnamese={props.vietnamese} />
    </div>
  );
};

export default AboutContent;
