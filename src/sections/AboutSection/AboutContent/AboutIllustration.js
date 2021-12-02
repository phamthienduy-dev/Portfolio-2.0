import React, { useContext } from "react";
import { ThemeContext } from "../../../context/theme-context";

import HTMLLogo from "../../../assets/HTMLLogo.svg";
import CSSLogo from "../../../assets/CSSLogo.svg";
import TailwindLogo from "../../../assets/TailwindLogo.svg";
import JavaScriptLogo from "../../../assets/JavaScriptLogo.svg";
import ReduxLogo from "../../../assets/ReduxLogo.svg";
import ReactLogo from "../../../assets/ReactLogo.svg";
import GithubLogo from "../../../assets/GitHubLogo.svg";
import GitLogo from "../../../assets/GitLogo.svg";
import MenWithDocument from "../../../assets/MenWithDocument.svg";
import ManSittingVietnameseDark from "../../../assets/ManSittingVietnameseDark.svg";
import ManSittingEnglishDark from "../../../assets/ManSittingEnglishDark.svg";
import ManSittingVietnamese from "../../../assets/ManSitting.svg";
import ManSittingEnglish from "../../../assets/ManSittingEnglish.svg";

const AboutIllustration = (props) => {
  const { theme } = useContext(ThemeContext);
  const vietnamese = props.vietnamese;

  const renderVector = () => {
    if (theme === "dark" && vietnamese) {
      return <img src={ManSittingVietnameseDark} alt="About Vector Dark"/>;
    }
    if (theme === "dark" && !vietnamese) {
      return <img src={ManSittingEnglishDark} alt="About Vector Dark"/>;
    }
    if (theme === "light" && vietnamese) {
      return <img src={ManSittingVietnamese} alt="About Vector"/>;
    }
    if (theme === "light" && !vietnamese) {
      return <img src={ManSittingEnglish} alt="About Vector"/>;
    }
  };

  return (
    <div className="flex relative justify-end w-full ">
      <div className="w-2/5 absolute bottom-0 left-0 z-10">
        <img src={MenWithDocument} alt="Men With Document" />
      </div>
      <div className="absolute z-20 w-1/2 top-1 right-11">{renderVector()}</div>
      <div className="self-end justify-self-end ">
        <div className="grid grid-rows-5 bg-gradient-to-r from-primary-200  to-secondary-200 p-3 rounded-xl ">
          <div className=" row-start-1 col-span-full bg-white dark:bg-gray-800 dark:text-gray-200 m-4 h-20 rounded-xl w-96 hover:shadow-lg hover:-translate-y-0.5 transform transition">
            <div className="flex h-full justify-center ">
              <img
                src={HTMLLogo}
                className="h-12 w-12 self-center"
                alt="HTML5 Logo"
              />
              <span className="self-center ml-3 font-semibold text-gray-500 text-xl dark:text-gray-200">
                HTML5
              </span>
            </div>
          </div>
          <div className="row-start-2 m-4 grid grid-cols-3 rounded-xl gap-5">
            <div className="dark:bg-gray-800 col-span-2 flex justify-center mr-2 bg-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transform transition">
              <img
                src={CSSLogo}
                className="h-12 w-12 self-center"
                alt="CSS3 Logo"
              />
              <span className="self-center ml-3 font-semibold text-gray-500 text-xl dark:text-gray-200">
                CSS3
              </span>
            </div>
            <div className="dark:bg-gray-800 bg-white rounded-xl justify-center hover:shadow-lg hover:-translate-y-0.5 transform transition flex">
              <img
                src={TailwindLogo}
                className="h-12 w-12 self-center"
                alt="Tailwind Logo"
              />
            </div>
          </div>
          <div className="dark:bg-gray-800 row-start-3 bg-white m-4 rounded-xl hover:shadow-lg hover:-translate-y-0.5 transform transition">
            <div className="flex h-full justify-center ">
              <img
                src={JavaScriptLogo}
                className="h-12 w-12 self-center"
                alt="JavaScript Logo"
              />
              <span className="self-center ml-3 font-semibold text-gray-500 text-xl dark:text-gray-200">
                JavaScript
              </span>
            </div>
          </div>
          <div className=" row-start-4  m-4 grid grid-cols-3 rounded-xl gap-5">
            <div className="dark:bg-gray-800 bg-white rounded-xl justify-center hover:shadow-lg hover:-translate-y-0.5 transform transition flex">
              <img
                src={ReduxLogo}
                className="h-12 w-12 self-center"
                alt="Redux Logo"
              />
            </div>
            <div className="dark:bg-gray-800 col-span-2 flex justify-center ml-2 bg-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transform transition">
              <img
                src={ReactLogo}
                className="h-12 w-12 self-center"
                alt="React Logo"
              />
              <span className="self-center ml-3 font-semibold text-gray-500 text-xl dark:text-gray-200">
                React
              </span>
            </div>
          </div>
          <div className="row-start-5  m-4 grid grid-cols-3 rounded-xl gap-5">
            <div className="dark:bg-gray-800 col-span-2 flex justify-center mr-2 bg-white rounded-xl hover:shadow-lg hover:-translate-y-0.5 transform transition">
              <img
                src={GithubLogo}
                className="h-12 w-12 self-center"
                alt="Github Logo"
              />
              <span className="self-center ml-3 font-semibold text-gray-500 text-xl dark:text-gray-200">
                GitHub
              </span>
            </div>
            <div className="dark:bg-gray-800 bg-white rounded-xl justify-center hover:shadow-lg hover:-translate-y-0.5 transform transition flex">
              <img
                src={GitLogo}
                className="h-12 w-12 self-center"
                alt="Git GitLogo"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIllustration;
