import React from "react";

import BankistPic from "../../../assets/Bankist.png";
import HTMLTag from "../../../assets/HTMLTag.svg";
import CSSTag from "../../../assets/CSSTag.svg";
import JavaScriptTag from "../../../assets/JavaScriptTag.svg";

const Bankist = (props) => {
  const vietnamese = props.vietnamese;
  return (
    <>
      <div className="h-full border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
        <div className="p-5 grid grid-cols-2 gap-5 h-full">
          <div className="">
            <img src={BankistPic} className="rounded-lg h-full" />
          </div>
          <div className="py-9">
            <h1 className="text-3xl text-gray-500 font-semibold">BANKIST</h1>
            <div className="flex gap-1">
              <img src={HTMLTag} />
              <img src={CSSTag} />
              <img src={JavaScriptTag} />
            </div>
            <p className="mt-4 text-gray-500">
              {vietnamese
                ? "Landing page cho ngân hàng kỹ thuật số. Sử dụng animation đơn giản + modal."
                : "Landing page for a digital bank. Using some basic animations and modal."}
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

export default Bankist;
