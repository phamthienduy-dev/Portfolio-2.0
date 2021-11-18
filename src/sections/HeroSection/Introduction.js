import React from "react";

import ButtonPrimary from "../../UI/ButtonPrimary";
import heroIllustration from "../../assets/heroIllustration.svg";
import SocialMediaIcons from "./SocialMediaIcons";

const Introduction = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <>
      <div className="text-center mt-20">
        <span className="text-gray-400 font-medium">
          {vietnamese ? "Xin chào! Mình là" : "Hi! I am"}
        </span>
        <p className="text-5xl font-medium mb-5">
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
