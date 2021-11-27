import React from "react";

import ButtonPrimary from "../../UI/ButtonPrimary";
import heroIllustration from "../../assets/heroIllustration.svg";
import SocialMediaIcons from "./SocialMediaIcons";

const Introduction = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <>
      <div className="text-center mt-16">
        <div className="text-gray-400 font-light mb-1">
          {vietnamese ? "Xin chào! Mình là" : "Hi! I am"}
        </div>
        <p className="text-5xl mb-5 font-semibold">
          <span className="text-primary-200">
            {vietnamese ? "Phạm " : "Pham "}
          </span>
          <span className="text-secondary-200">
            {vietnamese ? "Thiên " : "Thien "}
          </span>
          <span className="text-primary-200">Duy</span>
        </p>
        <ButtonPrimary name={vietnamese ? "LIÊN HỆ" : "CONTACT"} />
      </div>
      <div className="relative">
        <SocialMediaIcons />
        <img src={heroIllustration} alt="Hero Illustration" />
      </div>
    </>
  );
};

export default Introduction;
