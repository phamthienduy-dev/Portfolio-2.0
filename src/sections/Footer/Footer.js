import { Link, animateScroll as scroll } from "react-scroll";

const Footer = (props) => {
  const vietnamese = props.vietnamese;
  const year = new Date().getFullYear();

  return (
    <div className="mt-40 lg:mt-32 sphone:mt-20 container grid grid-cols-4 sxm:grid-cols-3  pb-9 px-11 sphone:px-5 mobile:grid-cols-2 mobile:grid-rows-2 mobile:gap-y-5 ">
      <div>
        <h1
          className="text-4xl lg:text-3xl sm:text-2xl sphone:text-2xl flex font-extrabold cursor-pointer pl-9"
          onClick={() => scroll.scrollToTop()}
        >
          <span className="text-primary-200">DUY</span>
          <span className="text-secondary-200">FE</span>
        </h1>
        <div className="pl-9 dark:text-gray-200 text-gray-600 text-sm lg:text-sm sm:text-xs sxm:text-sxs xl:hidden lg:hidden 1xl:hidden 2xl:hidden md:hidden sm:hidden sxm:block mobile:hidden">{`Copyright © ${year} by Pham Thien Duy.`}</div>
      </div>

      <div>
        <ul className="flex flex-col gap-4 sphone:gap-2 text-gray-500 font-semibold pl-9 lg:text-sm sm:text-xs sphone:text-xs">
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
          <li className="hover:text-gray-800 transition duration-300 dark:hover:text-gray-200 ">
            <Link
              to="project"
              smooth={true}
              offset={-120}
              duration={500}
              href="#"
            >
              {vietnamese ? "Dự án" : "Projects"}
            </Link>
          </li>
          <li className="hover:text-gray-800 transition duration-300 dark:hover:text-gray-200 ">
            <a
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/12sb3J2oMhM5fww1Mp8AUYLNDUYt9UWA3/view?usp=sharing"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
      <div className="mobile:pl-9">
        <div>
          <address className="flex flex-col gap-4 sphone:gap-2 text-gray-600 dark:text-gray-500 lg:text-sm sm:text-xs sphone:text-xs">
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
      <div className="sxm:hidden mobile:block mobile:pl-9 dark:text-gray-200 text-gray-600 text-sm lg:text-sm sm:text-xs ">{`Copyright © ${year} by Pham Thien Duy.`}</div>
    </div>
  );
};

export default Footer;
