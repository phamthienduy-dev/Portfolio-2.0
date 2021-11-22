import React from "react";

import OMNIFOODPic from "../../../assets/Omnifood.png";
import HTMLTag from "../../../assets/HTMLTag.svg";
import CSSTag from "../../../assets/CSSTag.svg";
import JavaScriptTag from "../../../assets/JavaScriptTag.svg";

const OMNIFOOD = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <>
      <div className="h-full border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
        <div className="p-5 grid grid-cols-2 gap-5 h-full">
          <img
            src={OMNIFOODPic}
            className="rounded-lg"
            alt="OMNIFOOD project "
          />
          <div className="py-9">
            <h1 className="text-3xl text-gray-500 font-semibold">OMNIFOOD</h1>
            <div className="flex gap-1">
              <img src={HTMLTag} alt="HTML Tag" />
              <img src={CSSTag} alt="CSS Tag" />
              <img src={JavaScriptTag} alt="JavaScript Tag" />
            </div>
            <p className="mt-4 text-gray-500">
              {vietnamese
                ? "Landing page cho một dịch vụ ăn uống. Tập trung vào responsive và UI!"
                : "Landing page for a food service. Focus in responsive and UI!"}
            </p>
            <div className="mt-6 flex gap-6 text-sm text-gray-500 h-9">
              <button className="shadow-md px-4 font-bold hover:shadow-xl transition rounded-md duration-300">
                {vietnamese ? "XEM" : "VIEW"}
              </button>
              <a
                className="font-bold px-4 py-2 bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition text-white rounded-md duration-300"
                target="_blank"
                href="https://github.com/phamthienduy-dev/OMNIFOOD"
              >
                SOURCE CODE
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OMNIFOOD;
