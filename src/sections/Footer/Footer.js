import { Link, animateScroll as scroll } from "react-scroll";

import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Footer = (props) => {
  const vietnamese = props.vietnamese;
  const year = new Date().getFullYear();

  return (
    <div className="mt-12 xl:mt-0 lg:mt-0 md:mt-0 container grid grid-cols-4  pb-9 px-11">
      <a
        className="text-4xl lg:text-3xl flex font-extrabold cursor-pointer pl-9"
        onClick={() => scroll.scrollToTop()}
      >
        <div className="text-primary-200">DUY</div>
        <div className="text-secondary-200">FE</div>
      </a>

      <div>
        <ul className="flex flex-col gap-4 text-gray-500 font-semibold pl-9 lg:text-sm">
          <li className="hover:text-gray-800 dark:hover:text-gray-200 transition duration-300">
            <Link
              to="about"
              smooth={true}
              offset={-120}
              duration={500}
              href="#"
            >
              {vietnamese ? "Giới thiệu" : "About"}
            </Link>
          </li>
          <li className="hover:text-gray-800 transition duration-300 dark:hover:text-gray-200">
            <Link
              to="project"
              smooth={true}
              offset={-120}
              duration={500}
              href="#"
              href="#"
            >
              {vietnamese ? "Dự án" : "Projects"}
            </Link>
          </li>
          <li className="hover:text-gray-800 transition duration-300 dark:hover:text-gray-200">
            <a
              href="https://drive.google.com/file/d/1d3BCopD0BKiI7Wz4-xsmSHWynOhw82-r/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <address className="flex flex-col gap-4 text-gray-600 dark:text-gray-500 lg:text-sm">
            <p className="not-italic font-semibold">
              {vietnamese ? "Liên lạc" : "Contact"}
            </p>
            <a
              href="tel:084-938-004-592"
              className="text-gray-400 dark:text-gray-200"
            >
              0938 004 592
            </a>
            <a
              href="mailto:duyphamthien@outlook.com"
              className="text-gray-400 dark:text-gray-200"
            >
              duyphamthien@outlook.com
            </a>
          </address>
        </div>
      </div>
      <div className="dark:text-gray-200 text-sm lg:text-sm">{`Copyright © ${year} by Pham Thien Duy. All rights reserved.`}</div>
    </div>
  );
};

export default Footer;
