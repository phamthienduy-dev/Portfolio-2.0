import React from "react";

import AboutCard from "./AboutCard";
import AboutIllustration from "./AboutIllustration";

const AboutContent = (props) => {
  return (
    <div className="container ">
      <div className="mx-2 md:mx-1 bg-gray-50 dark:bg-gray-800 rounded-2xl my-8 py-12 px-10 lg:py-10 lg:px-8 md:py-9 md:px-7 flex gap-12 lg:gap-8">
        <AboutCard vietnamese={props.vietnamese} />
        <AboutIllustration vietnamese={props.vietnamese} />
      </div>
    </div>
  );
};

export default AboutContent;
