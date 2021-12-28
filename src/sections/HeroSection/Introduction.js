import React, { useContext } from "react";

import { Link } from "react-scroll";

import ButtonPrimary from "../../UI/ButtonPrimary";
import heroVectorLight from "../../assets/heroVectorLight.svg";
import heroVectorDark from "../../assets/heroVectorDark.svg";

import { ThemeContext } from "../../context/theme-context";

const Introduction = (props) => {
  const { theme } = useContext(ThemeContext);
  const vietnamese = props.vietnamese;

  return (
    <div className="mx-2 pt-10 lg:pt-6 sphone:pt-4 bg-gray-50 rounded-bl-2xl rounded-br-2xl  px-2   dark:bg-gray-800">
      <div className="text-center">
        <div className="text-gray-400 font-light mb-1 dark:text-gray-200 sm:text-sm sphone:text-xs sphone:mb-0">
          {vietnamese ? "Xin chào! Mình là" : "Hi! I am"}
        </div>
        <p className="text-5xl lg:text-4xl sm:text-2xl mb-5 sm:mb-3 sphone:mb-2 font-semibold sphone:text-xl">
          <span className="text-primary-200">
            {vietnamese ? "Phạm " : "Pham "}
          </span>
          <span className="text-secondary-200">
            {vietnamese ? "Thiên " : "Thien "}
          </span>
          <span className="text-primary-200">Duy</span>
        </p>
        <Link to="cta" smooth={true} offset={-120} duration={500}>
          <ButtonPrimary name={vietnamese ? "LIÊN HỆ" : "CONTACT"} />
        </Link>
      </div>
      <div className="relative w-full">
        {theme === "light" ? (
          <img src={heroVectorLight} alt="Hero Vector Light" />
        ) : (
          <img src={heroVectorDark} alt="Hero Vector Dark" />
        )}
      </div>
    </div>
  );
};

export default Introduction;
