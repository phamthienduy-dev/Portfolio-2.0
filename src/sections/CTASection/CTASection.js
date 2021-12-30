import { React } from "react";

import CTAIllustrationTop from "./CTAIllustration";
import CTAHeading from "./CTAHeading";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="container" id="cta">
      <CTAHeading />
      <CTAIllustrationTop
        vietnamese={vietnamese}
        setShowModal={props.setShowModal}
      />
    </div>
  );
};

export default CTASection;
