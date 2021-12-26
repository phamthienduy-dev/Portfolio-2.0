import React, { useContext } from "react";

import { BiSun, BiMoon, BiUser, BiGridAlt } from "react-icons/bi";

import { ThemeContext } from "../../context/theme-context";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

const NavBar = React.forwardRef((props, ref) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const vietnamese = props.vietnamese;
  const inView = props.inView;

  const langueNotActive =
    "text-gray-300 hover:text-gray-900 transition duration-300 dark:text-gray-600 dark:text-gray-200 dark:hover:text-gray-200";

  const languageChangeHandler = (e) => {
    e.preventDefault();
    props.setVietnamese((prevState) => !prevState);
  };

  return (
    <>
      <div
        ref={ref}
        id="nav"
        className={`transition-all sticky top-0 z-50 ${
          !inView ? "w-full bg-white dark:bg-gray-900 shadow-lg " : ""
        }`}
      >
        <div className="container">
          <div
            className={`mx-2 grid grid-cols-2 text-gray-500 dark:text-gray-400   font-bold py-4 px-5 rounded-tl-2xl rounded-tr-2xl  ${
              !inView
                ? "bg-white dark:bg-gray-900"
                : "bg-gray-50 dark:bg-gray-800"
            }`}
          >
            <div
              className="text-4xl lg:text-3xl sm:text-2xl sphone:text-xl flex  font-extrabold justify-self-start"
              onClick={() => scroll.scrollToTop()}
            >
              <a href="#">
                <span className="text-primary-200">DUY</span>
                <span className="text-secondary-200">FE</span>
              </a>
            </div>

            <nav className="text-sm sm:text-xs lg:text-xs flex self-center gap-12 lg:gap-8 mobile:gap-5 sphone:gap-3 justify-self-end ">
              <div className="flex justify-self-end gap-12 self-center lg:gap-8 sm:gap-6">
                <Link
                  to="about"
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="hover:text-gray-900 transition duration-300 self-center dark:hover:text-gray-200 cursor-pointer md:hidden"
                >
                  {vietnamese ? "GIỚI THIỆU" : "ABOUT"}
                </Link>
                <Link
                  to="about"
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="hover:text-gray-900 transition duration-300 self-center dark:hover:text-gray-200 cursor-pointer text-xl sm:text-base sphone:text-sm md:flex 2xl:hidden 1xl:hidden xl:hidden lg:hidden "
                >
                  <BiUser />
                </Link>
                <Link
                  to="project"
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="hover:text-gray-900 transition duration-300 self-center dark:hover:text-gray-200  cursor-pointer md:hidden"
                >
                  {vietnamese ? "DỰ ÁN" : "PROJECTS"}
                </Link>
                <Link
                  to="project"
                  smooth={true}
                  offset={-120}
                  duration={500}
                  className="hover:text-gray-900 transition duration-300 self-center dark:hover:text-gray-200 cursor-pointer text-xl sm:text-base sphone:text-sm md:flex 2xl:hidden 1xl:hidden xl:hidden lg:hidden "
                >
                  <BiGridAlt />
                </Link>

                <div className="self-center md:hidden">
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
                <div className="2xl:hidden 1xl:hidden xl:hidden lg:hidden md:flex">
                  <a onClick={languageChangeHandler} className="self-center">
                    {vietnamese ? "EN" : "VN"}
                  </a>
                </div>
                <a
                  href="#"
                  className="self-center transition duration-500 ease-in-out text-xl sm:text-base sphone:text-sm "
                >
                  {theme === "dark" ? (
                    <BiSun
                      onClick={(e) => {
                        e.preventDefault();
                        setTheme(theme === "dark" ? "light" : "dark");
                      }}
                    />
                  ) : (
                    <BiMoon
                      onClick={(e) => {
                        e.preventDefault();
                        setTheme(theme === "light" ? "dark" : "light");
                      }}
                    />
                  )}
                </a>
                <motion.a
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg dark:hover:bg-red-200 transition duration-300 text-white font-semibold py-2 px-6 rounded-md md:rounded text-sm lg:text-xs lg:px-4 lg:py-2 sm:px-3 sm:py-1 sm:text-sxs sphone:hidden"
                  href="https://drive.google.com/file/d/1d3BCopD0BKiI7Wz4-xsmSHWynOhw82-r/view?usp=sharing"
                  target="_blank"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.9 }}
                >
                  RESUME
                </motion.a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
});

export default NavBar;
