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
  const GridItem = (props) => {
    return (
      <div
        className={`${
          props.className ? props.className : ""
        } lg:text-6xl  sm:text-5xl sphone:text-6xl text-7xl dark:bg-gray-900 bg-gray-100 text-gray-600 px-5 py-7 md:py-7 md:px-3 text-center dark:text-gray-200 rounded-xl flex justify-center`}
      >
        {props.children}
      </div>
    );
  };

  return (
    <div className="flex-grow sphone:w-94% sphone:mx-auto">
      <div className="grid grid-cols-5 grid-rows-5 md:grid-cols-3 sxm:grid-cols-2 sphone:grid-rows-4  gap-7 sm:gap-5 xl:gap-6 ">
        <GridItem className="text-center ">
          <Skill />
        </GridItem>
        <GridItem className="row-start-2 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-1 sphone:col-start-2">
          <HTML />
        </GridItem>
        <GridItem className="row-start-2 sxm:hidden"></GridItem>
        <GridItem className="row-start-3 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-2">
          <CSS />
        </GridItem>
        <GridItem className="row-start-3 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-2">
          <JavaScript />
        </GridItem>
        <div className="row-start-3 relative z-20 sxm:hidden">
          <img
            src={ManWorking}
            className="absolute lg:-top-3 md:-top-14 -top-7"
          />
        </div>

        <GridItem className="row-start-4 sxm:hidden"></GridItem>
        <GridItem className="row-start-4 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-3">
          <Redux />
        </GridItem>
        <GridItem className="row-start-4 sxm:hidden"></GridItem>
        <GridItem className="row-start-4 md:hidden"></GridItem>
        <GridItem className="row-start-5 md:hidden"></GridItem>
        <GridItem className="row-start-5 md:hidden"></GridItem>
        <GridItem className="row-start-5 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-4">
          <Tailwind />
        </GridItem>
        <GridItem className="row-start-5 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-4">
          <Git />
        </GridItem>
        <GridItem className="row-start-5 sxm:row-start-4 hover:shadow-lg hover:-translate-y-0.5 transform transition sphone:row-start-3">
          <ReactLogo />
        </GridItem>
      </div>
    </div>
  );
};

export default AboutIllustration;
