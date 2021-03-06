import React from "react";

import {
  SiHtml5 as HTML,
  SiCss3 as CSS,
  SiJavascript as JavaScript,
  SiReact as ReactLogo,
  SiTailwindcss as Tailwind,
  SiRedux as Redux,
  SiGit as Git,
} from "react-icons/si";

import { AiFillCode } from "react-icons/ai";

const AboutIllustration = () => {
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
    <div className="flex-grow sphone:w-3/4 sphone:mx-auto sxphone:w-full">
      <div className="grid grid-cols-5 grid-rows-5 md:grid-cols-3 sxm:grid-cols-2 sphone:grid-rows-4  gap-7 sm:gap-5 xl:gap-6 ">
        <GridItem className="text-center ">
          <AiFillCode />
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
        <GridItem className="row-start-3 sxm:hidden"></GridItem>

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
