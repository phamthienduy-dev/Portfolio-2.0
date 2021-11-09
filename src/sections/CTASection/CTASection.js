import { React } from "react";

import CTAIllustration from "./CTAIllustration";

const CTASection = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <section className="container mt-56">
      <CTAIllustration vietnamese={vietnamese} />
    </section>
  );
};

export default CTASection;
