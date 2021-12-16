import React from "react";

import Introduction from "./Introduction";

const HeroSection = (props) => {
  return (
    <div className="container ">
      <Introduction vietnamese={props.vietnamese} />
    </div>
  );
};

export default HeroSection;
