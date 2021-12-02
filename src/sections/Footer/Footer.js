import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const Footer = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="mt-64 container grid grid-cols-3 pb-9 px-11">
      <div className="">
        <span className="text-2xl flex justify-self-center font-extrabold ">
          <div className="text-primary-200">DUY</div>
          <div className="text-secondary-200">FE</div>
        </span>
        <div className="flex gap-3 mt-2">
          <a
            href="https://twitter.com/Thienduy181Duy"
            target="_blank"
            className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-8 w-8 bg-gray-100 dark:bg-gray-800 self-center flex "
          >
            <img src={twitter} alt="Twitter Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/ph%E1%BA%A1m-thi%C3%AAn-duy-76b347220/"
            target="_blank"
            className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-8 w-8 bg-gray-100 dark:bg-gray-800 self-center flex"
          >
            <img src={linkedin} alt="Linkedin Icon" />
          </a>
          <a
            href="https://github.com/phamthienduy-dev"
            target="_blank"
            className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-8 w-8 bg-gray-100 dark:bg-gray-800 self-center flex"
          >
            <img src={github} alt="Github Icon" />
          </a>
          <a
            href="https://www.facebook.com/phamthienduy181"
            target="_blank"
            className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-8 w-8 bg-gray-100 dark:bg-gray-800 self-center flex"
          >
            <img src={facebook} alt="Facebook Icon" />
          </a>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-4 text-gray-500 font-semibold pl-9 ">
          <li className="hover:text-gray-800 dark:hover:text-gray-200 transition duration-300">
            <a href="#">{vietnamese ? "Giới thiệu" : "About"}</a>
          </li>
          <li className="hover:text-gray-800 transition duration-300 dark:hover:text-gray-200">
            <a href="#">{vietnamese ? "Dự án" : "Projects"}</a>
          </li>
          <li className="hover:text-gray-800 transition duration-300 dark:hover:text-gray-200">
            <a href="#">Resume</a>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <address className="flex flex-col gap-4 text-gray-600 dark:text-gray-500">
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
    </div>
  );
};

export default Footer;
