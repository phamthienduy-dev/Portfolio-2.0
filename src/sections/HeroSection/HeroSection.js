import React from "react";

import Introduction from "./Introduction";

const HeroSection = (props) => {
  return (
    <div className="container bg-gray-50 rounded-bl-2xl rounded-br-2xl pt-5 -pb-5 dark:bg-gray-800">
      <Introduction vietnamese={props.vietnamese} />
    </div>
  );
};

export default HeroSection;
