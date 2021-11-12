import { React } from "react";

import CTAIllustrationTop from "./CTAIllustrationTop";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <section className="container mt-56">
      <CTAIllustrationTop vietnamese={vietnamese} />
    </section>
  );
};

export default CTASection;
