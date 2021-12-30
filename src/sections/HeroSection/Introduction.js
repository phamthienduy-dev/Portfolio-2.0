import React, { useContext } from "react";

import { Link } from "react-scroll";

import ButtonPrimary from "../../UI/ButtonPrimary";
import heroVectorLight from "../../assets/heroVectorLight.svg";
import heroTest from "../../assets/herotest.svg";
import heroVectorDark from "../../assets/heroVectorDark.svg";

import { ThemeContext } from "../../context/theme-context";

const Introduction = (props) => {
  const { theme } = useContext(ThemeContext);
  const vietnamese = props.vietnamese;

  return (
    <div className="mx-2 lg:pt-6 sphone:pt-4 bg-gray-50 rounded-bl-2xl rounded-br-2xl px-5 py-36 dark:bg-gray-800 flex gap-7">
      <div className="text-left flex-70% pt-28 ml-12">
        <p className="text-6xl lg:text-4xl sm:text-2xl mb-3 sm:mb-3 sphone:mb-2 font-semibold sphone:text-xl ">
          <span className="text-primary-200">
            {vietnamese ? "Phạm " : "Pham "}
          </span>
          <span className="text-secondary-200">
            {vietnamese ? "Thiên " : "Thien "}
          </span>
          <span className="text-primary-200">Duy</span>
        </p>
        <p className="text-gray-400 font-light pl-1  dark:text-gray-200 sm:text-sm sphone:text-xs sphone:mb-0 text-xl mb-12">
          Front-end developer
        </p>
        <Link to="cta" smooth={true} offset={-120} duration={500}>
          <ButtonPrimary name={vietnamese ? "LIÊN HỆ" : "CONTACT"} />
        </Link>
      </div>
      <div className="w-11/12">
        {theme === "light" ? (
          <img src={heroTest} alt="Hero Vector Light" />
        ) : (
          <img src={heroTest} alt="Hero Vector Dark" />
        )}
      </div>
    </div>
  );
};

export default Introduction;
