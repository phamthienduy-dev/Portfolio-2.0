import React from "react";

import CTAComputer from "../../assets/CTAComputer.svg";
import CTAComputerEnglish from "../../assets/CTAComputerEnglish.svg";

const CTAIllustration = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="relative">
      <img
        src={vietnamese ? CTAComputer : CTAComputerEnglish}
        className="absolute left-1/4"
      />
      <button className="bg-secondary-200 font-bold text-white py-6 px-9 absolute top-76 left-160 rounded-xl">
        {vietnamese ? "ĐÁNH GIÁ" : "REVIEW"}
      </button>
      <button className="bg-primary-200 font-bold text-white py-6 px-11 absolute top-76 left-204 rounded-xl">
        {vietnamese ? "LIÊN HỆ" : "CONTACT"}
      </button>
    </div>
  );
};

export default CTAIllustration;
