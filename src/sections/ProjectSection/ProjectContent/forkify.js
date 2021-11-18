import React from "react";

import forkifyPic from "../../../assets/forkify.png";
import HTMLTag from "../../../assets/HTMLTag.svg";
import CSSTag from "../../../assets/CSSTag.svg";
import JavaScriptTag from "../../../assets/JavaScriptTag.svg";

const Forkify = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <>
      <div className="h-full border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
        <div className="p-5 grid grid-cols-2 gap-5 h-full">
          <img
            src={forkifyPic}
            className="rounded-lg h-full"
            alt="forkify Project"
          />
          <div className="py-9">
            <h1 className="text-3xl text-gray-500 font-semibold">forkify</h1>
            <div className="flex gap-1">
              <img src={HTMLTag} alt="HTML Tag" />
              <img src={CSSTag} alt="CSS Tag" />
              <img src={JavaScriptTag} alt="JavaScript Tag" />
            </div>
            <p className="mt-4 text-gray-500">
              {vietnamese
                ? "Bạn có thể tìm kiếm, thêm, bookmark các công thức nấu ăn bạn thích."
                : "You can search, add, bookmark your favorite cooking recipes."}
            </p>
            <div className="mt-6 flex gap-6 text-sm text-gray-500 h-9">
              <button className="px-4 font-bold hover:shadow-xl hover:-translate-y-0.5 transform transition rounded-md">
                {vietnamese ? "XEM" : "VIEW"}
              </button>
              <button className="font-bold px-4 bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg hover:-translate-y-0.5 transform transition text-white rounded-md">
                SOURCE CODE
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forkify;
