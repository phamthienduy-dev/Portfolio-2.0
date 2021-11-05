import React from "react";

import HTMLLogo from "../../../assets/HTMLLogo.svg";
import CSSLogo from "../../../assets/CSSLogo.svg";
import TailwindLogo from "../../../assets/TailwindLogo.svg";

const AboutIllustration = () => {
  return (
    <div className="self-end justify-self-end">
      <div className="grid grid-rows-5 bg-gradient-to-b from-primary-200  to-secondary-200 p-3 rounded-xl">
        <div className="row-start-1 col-span-full bg-white m-4 h-20 rounded-xl w-96 hover:shadow-lg hover:-translate-y-0.5 transform transition">
          <div className="flex h-full justify-center ">
            <img src={HTMLLogo} className="h-12 w-12 self-center " />
            <span className="self-center ml-3 font-semibold text-gray-500 text-xl">
              HTML5
            </span>
          </div>
        </div>
        <div className="row-start-2  m-4 grid grid-cols-3 rounded-xl gap-3">
          <div className="col-span-2 flex justify-center mr-2 bg-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transform transition">
            <img src={CSSLogo} className="h-12 w-12 self-center " />
            <span className="self-center ml-3 font-semibold text-gray-500 text-xl ">
              CSS3
            </span>
          </div>
          <div className="bg-white rounded-xl justify-center hover:shadow-lg hover:-translate-y-0.5 transform transition">
            <img src={TailwindLogo} className="h-12 w-12 self-center" />
          </div>
        </div>
        <div className="row-start-3 bg-white m-4 rounded-xl">JavaScript</div>
        <div className="row-start-4 bg-white m-4 grid grid-cols-3 rounded-xl">
          <div>Redux</div>
          <div className="col-span-2">React</div>
        </div>
        <div className="row-start-5 bg-white m-4 grid grid-cols-3 rounded-xl">
          <div className="col-span-2">GitHub</div>
          <div>Git</div>
        </div>
      </div>
    </div>
  );
};

export default AboutIllustration;
