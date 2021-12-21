import { React } from "react";

import CTAIllustrationTop from "./CTAIllustration";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="container " id="cta">
      <CTAIllustrationTop
        vietnamese={vietnamese}
        setShowModal={props.setShowModal}
      />
    </div>
  );
};

export default CTASection;
