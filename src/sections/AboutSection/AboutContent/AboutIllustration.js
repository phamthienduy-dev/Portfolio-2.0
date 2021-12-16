import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";

import { SiHtml5 as HTML } from "react-icons/si";
import { SiCss3 as CSS } from "react-icons/si";
import { SiJavascript as JavaScript } from "react-icons/si";
import { SiReact as ReactLogo } from "react-icons/si";
import { SiTailwindcss as Tailwind } from "react-icons/si";
import { SiRedux as Redux } from "react-icons/si";
import { SiGit as Git } from "react-icons/si";

import { GiSkills as Skill } from "react-icons/gi";
import ManWorking from "../../../assets/SVG/Asset1.svg";

const AboutIllustration = (props) => {
  // const { theme } = useContext(ThemeContext);
  // const vietnamese = props.vietnamese;

  // const renderVector = () => {
  //   if (theme === "dark" && vietnamese) {
  //     return <img src={ManSittingVietnameseDark} alt="About Vector Dark" />;
  //   }
  //   if (theme === "dark" && !vietnamese) {
  //     return <img src={ManSittingEnglishDark} alt="About Vector Dark" />;
  //   }
  //   if (theme === "light" && vietnamese) {
  //     return <img src={ManSittingVietnamese} alt="About Vector" />;
  //   }
  //   if (theme === "light" && !vietnamese) {
  //     return <img src={ManSittingEnglish} alt="About Vector" />;
  //   }
  // };

  const GridItem = (props) => {
    return (
      <div
        className={`${
          props.className ? props.className : ""
        } text-7xl dark:bg-gray-900 bg-gray-100 text-gray-600 px-5 py-7 text-center dark:text-gray-200 rounded-xl flex justify-center`}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div className="flex-grow">
      <div className="grid grid-cols-5 grid-rows-5 gap-7 ">
        <GridItem className="text-center">
          <Skill />
        </GridItem>
        <GridItem className="row-start-2">
          <HTML />
        </GridItem>
        <GridItem className="row-start-2"></GridItem>
        <GridItem className="row-start-3">
          <CSS />
        </GridItem>
        <GridItem className="row-start-3">
          <JavaScript />
        </GridItem>
        <div className="row-start-3 relative">
          <img src={ManWorking} className="absolute -top-7" />
        </div>

        <GridItem className="row-start-4"></GridItem>
        <GridItem className="row-start-4">
          <Redux />
        </GridItem>
        <GridItem className="row-start-4"></GridItem>
        <GridItem className="row-start-4"></GridItem>
        <GridItem className="row-start-5"></GridItem>
        <GridItem className="row-start-5"></GridItem>
        <GridItem className="row-start-5">
          <Tailwind />
        </GridItem>
        <GridItem className="row-start-5">
          <Git />
        </GridItem>
        <GridItem className="row-start-5">
          <ReactLogo />
        </GridItem>
      </div>
    </div>
  );
};

export default AboutIllustration;
