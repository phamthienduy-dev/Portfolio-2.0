import React, { useState } from "react";

import Introduction from "./Introduction";

const HeroSection = (props) => {
  return (
    <section className="container bg-gray-50 rounded-bl-2xl rounded-br-2xl pt-1">
      <Introduction vietnamese={props.vietnamese} />
    </section>
  );
};

export default HeroSection;
