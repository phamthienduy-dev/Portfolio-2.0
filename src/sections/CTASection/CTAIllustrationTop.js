import React from "react";

import CTAComputer from "../../assets/CTAComputer.svg";
import CTAComputerEnglish from "../../assets/CTAComputerEnglish.svg";

const CTAIllustrationTop = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="relative">
      <div className="absolute w-full">
        <img
          src={vietnamese ? CTAComputer : CTAComputerEnglish}
          className="mx-auto w-4/6"
        />
      </div>
      <button className="bg-secondary-200 font-bold text-white py-6 px-9 absolute top-96 left-144 rounded-xl hover:bg-secondary      -100">
        {vietnamese ? "ĐÁNH GIÁ" : "REVIEW"}
      </button>
      <button className="bg-primary-200 font-bold text-white py-6 px-11 absolute top-96 left-196 rounded-xl hover:bg-primary-100">
        {vietnamese ? "LIÊN HỆ" : "CONTACT"}
      </button>
    </div>
  );
};

export default CTAIllustrationTop;
