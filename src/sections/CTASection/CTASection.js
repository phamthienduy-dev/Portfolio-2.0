import { React } from "react";

import CTAIllustrationTop from "./CTAIllustration";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="container mt-56 flex-col h-cta" id="cta-section z-10">
      <CTAIllustrationTop
        vietnamese={vietnamese}
        setShowModal={props.setShowModal}
      />
    </div>
  );
};

export default CTASection;
