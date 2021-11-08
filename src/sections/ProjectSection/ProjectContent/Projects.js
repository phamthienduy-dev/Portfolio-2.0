import { React } from "react";

import ButtonSecondary from "../../../UI/ButtonSecondary";
import ButtonPrimary from "../../../UI/ButtonPrimary";
import Omnifood from "../../../assets/Omnifood.png";
import HTMLTag from "../../../assets/HTMLTag.svg";
import CSSTag from "../../../assets/CSSTag.svg";
import JavaScriptTag from "../../../assets/JavaScriptTag.svg";

const Projects = () => {
  return (
    <div className="container grid grid-cols-2 grid-rows-2 mt-8 gap-48 ">
      <div className="border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
        <div className="p-4 grid grid-cols-2 gap-5">
          <div className="">
            <img src={Omnifood} />
          </div>
          <div className="py-9">
            <h1 className="text-3xl text-gray-500 font-semibold">OMNIFOOD</h1>
            <div className="flex gap-1">
              <img src={HTMLTag} />
              <img src={CSSTag} />
              <img src={JavaScriptTag} />
            </div>
            <p className="mt-4 text-gray-500">
              Landing page cho một dịch vụ ăn uống. Tập trung vào responsive và
              UI!
            </p>
            <div className="mt-6 flex gap-6"></div>
          </div>
        </div>
      </div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default Projects;
