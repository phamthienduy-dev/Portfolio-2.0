import React, { useState, useContext } from "react";

import { BiSun, BiMoon } from "react-icons/bi";
import { ThemeContext } from "../../context/theme-context";

const NavBar = (props) => {
  const { theme, setTheme } = useContext(ThemeContext);
  const vietnamese = props.vietnamese;

  const langueNotActive =
    "text-gray-300 hover:text-gray-900 transition duration-300 dark:text-gray-600 dark:text-gray-200 dark:hover:text-gray-200";

  const languageChangeHandler = (e) => {
    e.preventDefault();
    props.setVietnamese((prevState) => !prevState);
  };

  return (
    <header
      id="nav"
      className="font-bold py-4 px-5 sticky top-0 z-50 container bg-gray-50 rounded-tl-2xl rounded-tr-2xl dark:bg-gray-800  "
    >
      <div className="grid grid-cols-2 text-gray-500 dark:text-gray-400 ">
        <div className="text-4xl flex  font-extrabold justify-self-start ">
          <a href="/">
            <span className="text-primary-200">DUY</span>
            <span className="text-secondary-200">FE</span>
          </a>
        </div>
        <nav className="text-sm flex self-center gap-12 justify-self-end ">
          <div className="flex justify-self-end gap-12 self-center text-sm ">
            <a
              href="#"
              className="hover:text-gray-900 transition duration-300 self-center dark:hover:text-gray-200"
            >
              {vietnamese ? "GIỚI THIỆU" : "ABOUT"}
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition duration-300 self-center dark:hover:text-gray-200"
            >
              {vietnamese ? "DỰ ÁN" : "PROJECTS"}
            </a>

            <div className="self-center ">
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
            <a
              href="#"
              className="self-center transition duration-500 ease-in-out"
            >
              {theme === "dark" ? (
                <BiSun
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.preventDefault();
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                />
              ) : (
                <BiMoon
                  className="h-6 w-6"
                  onClick={(e) => {
                    e.preventDefault();
                    setTheme(theme === "light" ? "dark" : "light");
                  }}
                />
              )}
            </a>
            <a
              className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition duration-300  text-white font-semibold py-2 px-8 rounded-md text-sm "
              href="https://drive.google.com/file/d/1d3BCopD0BKiI7Wz4-xsmSHWynOhw82-r/view?usp=sharing"
              target="_blank"
            >
              RESUME
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
