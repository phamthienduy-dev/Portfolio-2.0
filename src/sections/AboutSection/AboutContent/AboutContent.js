import React from "react";

import AboutCard from "./AboutCard";
import AboutIllustration from "./AboutIllustration";

const AboutContent = (props) => {
  return (
    <div className="container ">
      <div className="mx-2 bg-gray-50 dark:bg-gray-800 rounded-2xl my-8 py-12 px-10 flex gap-12">
        <AboutCard vietnamese={props.vietnamese} />
        <AboutIllustration vietnamese={props.vietnamese} />
      </div>
    </div>
  );
};

export default AboutContent;
