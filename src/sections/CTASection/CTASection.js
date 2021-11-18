import { React } from "react";

import CTAIllustrationTop from "./CTAIllustration";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <section className="container mt-56 flex-col h-cta" id="cta-section">
      <CTAIllustrationTop vietnamese={vietnamese} />
    </section>
  );
};

export default CTASection;
