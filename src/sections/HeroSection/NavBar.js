import React, { useState } from "react";

import modeToggle from "../../assets/modeToggle.svg";
import ButtonPrimary from "../../UI/ButtonPrimary";

const NavBar = (props) => {
  const vietnamese = props.vietnamese;

  const langueNotActive = "text-gray-300";

  const buttonHandler = () => {
    console.log("Button Clicked!");
  };

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
    <div className="font-bold p-2">
      <div className="grid grid-cols-3 text-gray-700">
        <nav className="text-sm flex self-center gap-12 ">
          <a href="#" className="hover:underline">
            {vietnamese ? "GIỚI THIỆU" : "ABOUT"}
          </a>
          <a href="#" className="hover:underline">
            {vietnamese ? "DỰ ÁN" : "PROJECTS"}
          </a>
          <a href="#" className="hover:underline">
            {vietnamese ? "LIÊN HỆ" : "CONTACT"}
          </a>
        </nav>
        <span className="text-4xl flex justify-self-center font-extrabold ">
          <div className="text-primary-200">DUY</div>
          <div className="text-secondary-200">FE</div>
        </span>
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

          <ButtonPrimary name="RESUME" handleClick={buttonHandler} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
