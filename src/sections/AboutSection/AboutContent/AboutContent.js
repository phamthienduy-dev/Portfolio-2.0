import React from "react";

import AboutCard from "./AboutCard";
import AboutIllustration from "./AboutIllustration";

const AboutContent = (props) => {
  return (
    <div className="container">
      <div className="mx-2 md:mx-1 bg-gray-50 dark:bg-gray-800 rounded-2xl mobile:rounded-xl my-8 sm:my-4 py-12 sphone:py-16 sxphone:py-5 px-10 lg:py-10 lg:px-8 md:py-9 md:px-7 sm:py-8 sm:px-6 flex gap-12 lg:gap-8 sm:gap-6 sphone:flex-col">
        <AboutCard vietnamese={props.vietnamese} />
        <AboutIllustration vietnamese={props.vietnamese} />
      </div>
    </div>
  );
};

export default AboutContent;
