import React from "react";

import AmazonClonePic from "../../../assets/AmazonClone.png";
import HTMLTag from "../../../assets/HTMLTag.svg";
import CSSTag from "../../../assets/CSSTag.svg";
import ReactTag from "../../../assets/ReactTag.svg";

function AmazonClone(props) {
  const vietnamese = props.vietnamese;

  return (
    <div className="h-full border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
      <div className="p-5 grid grid-cols-2 gap-5 h-full">
        <img
          src={AmazonClonePic}
          className="rounded-lg"
          alt="Amazon Clone project "
        />
        <div className="py-9">
          <h1 className="text-3xl text-gray-500 font-semibold">Amazon Clone</h1>
          <div className="flex gap-1">
            <img src={HTMLTag} alt="HTML Tag" />
            <img src={CSSTag} alt="CSS Tag" />
            <img src={ReactTag} alt="React Tag" />
          </div>
          <p className="mt-4 text-gray-500">
            {vietnamese ? "Amazon Clone project" : "Amazon Clone project"}
          </p>
          <div className="mt-6 flex gap-6 text-sm text-gray-500 h-9">
            <a
              className="shadow-md px-4 py-2 font-bold hover:shadow-x cursor-not-allowed transition rounded-md duration-300"
              href="#"
              // target="_blank"
            >
              {vietnamese ? "XEM" : "VIEW"}
            </a>
            <a
              className="font-bold px-4 py-2 bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition text-white rounded-md duration-300"
              target="_blank"
              href="https://github.com/phamthienduy-dev/amazon-clone"
            >
              SOURCE CODE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AmazonClone;
