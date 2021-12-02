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
        <div className="p-5 grid grid-cols-2 gap-5 h-full dark:bg-gray-800 rounded-lg">
          <img
            src={BankistPic}
            className="rounded-lg h-full"
            alt="Bankist Project"
          />
          <div className="py-9">
            <h1 className="text-3xl text-gray-500 dark:text-gray-200 font-semibold">
              BANKIST
            </h1>
            <div className="flex gap-1">
              <img src={HTMLTag} alt="HTML Tag" />
              <img src={CSSTag} alt="CSS Tag" />
              <img src={JavaScriptTag} alt="JavaScript Tag" />
            </div>
            <p className="mt-4 text-gray-500 dark:text-gray-200">
              {vietnamese
                ? "Landing page cho ngân hàng kỹ thuật số. Sử dụng animation đơn giản + modal."
                : "Landing page for a digital bank. Using some basic animations and modal."}
            </p>
            <div className=" dark:text-gray-200 mt-6 flex gap-6 text-sm text-gray-500 h-9">
              <a
                className=" dark:bg-gray-900 shadow-md px-4 py-2 font-bold hover:shadow-xl transition rounded-md duration-300"
                href="https://bankist-duyfe.netlify.app/"
                target="_blank"
              >
                {vietnamese ? "XEM" : "VIEW"}
              </a>
              <a
                className="font-bold px-4 py-2 bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition text-white rounded-md duration-300"
                target="_blank"
                href="https://github.com/phamthienduy-dev/bankist"
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

export default Bankist;
