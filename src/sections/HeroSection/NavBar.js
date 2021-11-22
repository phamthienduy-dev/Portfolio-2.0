import React, { useState } from "react";

import modeToggle from "../../assets/modeToggle.svg";
import ButtonPrimary from "../../UI/ButtonPrimary";

const NavBar = (props) => {
  const vietnamese = props.vietnamese;

  const langueNotActive =
    "text-gray-300 hover:text-gray-500 transition duration-300";

  const languageChangeHandler = (e) => {
    e.preventDefault();

    props.setVietnamese((prevState) => !prevState);
  };

  if (vietnamese) {
    document.title = "Xin chào, mình là Duy!";
  } else {
    document.title = "Hi I am Duy!";
  }

  return (
    <div className="font-bold p-4 ">
      <div className="grid grid-cols-3 text-gray-500">
        <nav className="text-sm flex self-center gap-12 ">
          <a href="#" className="hover:text-gray-900 transition duration-300 ">
            {vietnamese ? "GIỚI THIỆU" : "ABOUT"}
          </a>
          <a href="#" className="hover:text-gray-900 transition duration-300">
            {vietnamese ? "DỰ ÁN" : "PROJECTS"}
          </a>
          <a href="#" className="hover:text-gray-900 transition duration-300">
            {vietnamese ? "LIÊN HỆ" : "CONTACT"}
          </a>
        </nav>
        <div className="text-4xl flex justify-self-center font-extrabold ">
          <a href="/">
            <span className="text-primary-200">DUY</span>
            <span className="text-secondary-200">FE</span>
          </a>
        </div>
        <div className="flex justify-self-end gap-12 self-center text-sm ">
          <div className="self-center">
            <a
              href="#"
              className={vietnamese && langueNotActive}
              onClick={languageChangeHandler}
            >
              EN
            </a>{" "}
            |{" "}
            <a
              href="#"
              className={!vietnamese && langueNotActive}
              onClick={languageChangeHandler}
            >
              VN
            </a>
          </div>
          <a href="#" className="self-center">
            <img src={modeToggle} alt="Darkmode Toggle" />
          </a>
          <a
            className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition duration-300  text-white font-semibold py-2 px-8 rounded-md text-sm "
            href="https://drive.google.com/file/d/1d3BCopD0BKiI7Wz4-xsmSHWynOhw82-r/view?usp=sharing"
            target="_blank"
          >
            RESUME
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
