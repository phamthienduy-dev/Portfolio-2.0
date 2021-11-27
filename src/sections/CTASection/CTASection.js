import { React } from "react";

import CTAIllustrationTop from "./CTAIllustration";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="container mt-56 flex-col h-cta" id="cta-section">
      <CTAIllustrationTop vietnamese={vietnamese} />
    </div>
  );
};

export default CTASection;
