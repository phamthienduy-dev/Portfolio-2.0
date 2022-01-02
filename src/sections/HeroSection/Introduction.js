import React, { useContext } from "react";

import { Link } from "react-scroll";

import ButtonPrimary from "../../UI/ButtonPrimary";

import heroVector from "../../assets/heroVector.svg";
import heroVectorDark from "../../assets/heroVectorDark.svg";

import { ThemeContext } from "../../context/theme-context";

const Introduction = (props) => {
  const { theme } = useContext(ThemeContext);
  const vietnamese = props.vietnamese;

  return (
    <div className="flex mx-2 px-5 sxphone:px-2 pb-36 pt-28 md:pt-20 mobile:pt-16 mobile:pb-32 bg-gray-50 rounded-bl-2xl rounded-br-2xl dark:bg-gray-800">
      <div className="flex-100% text-left pt-24 md:pt-20 sxm:pt-16 mobile:pt-12 sphone:pt-8 sxphone:pt-6 ml-12 lg:ml-10 md:ml-2">
        <p className="text-6xl lg:text-5xl sm:text-4xl mobile:text-3xl sphone:text-2xl sxphone:text-xl mb-3 sphone:mb-2 font-semibold">
          <span className="text-primary-200">
            {vietnamese ? "Phạm " : "Pham "}
          </span>
          <span className="text-secondary-200">
            {vietnamese ? "Thiên " : "Thien "}
          </span>
          <span className="text-primary-200">Duy</span>
        </p>
        <p className="text-xl sm:text-lg mobile:text-base sphone:text-sm sxphone:text-sxs text-gray-400 font-light pl-1 dark:text-gray-200 mb-12 sm:mb-8 sphone:mb-6">
          Front-end developer
        </p>
        <Link to="cta" smooth={true} offset={-120} duration={500}>
          <ButtonPrimary name={vietnamese ? "LIÊN HỆ" : "CONTACT"} />
        </Link>
      </div>
      <div className="w-11/12 mr-12 lg:mr-10 md:mr-2">
        {theme === "light" ? (
          <img src={heroVector} alt="Hero Vector Light" />
        ) : (
          <img src={heroVectorDark} alt="Hero Vector Dark" />
        )}
      </div>
    </div>
  );
};

export default Introduction;
