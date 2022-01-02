import { React } from "react";

import CTAIllustration from "./CTAIllustration";
import CTAHeading from "./CTAHeading";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="container" id="cta">
      <CTAHeading vietnamese={vietnamese} />
      <CTAIllustration vietnamese={vietnamese} />
    </div>
  );
};

export default CTASection;
