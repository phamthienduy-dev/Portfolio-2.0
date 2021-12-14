import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const SocialMediaIcons = () => {
  return (
    <div className="bottom-3 left-4 fixed z-50">
      <div className="flex flex-col gap-3 mt-2">
        <a
          href="https://www.linkedin.com/in/ph%E1%BA%A1m-thi%C3%AAn-duy-76b347220/"
          target="_blank"
          className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 self-center flex"
        >
          <img src={linkedin} alt="Linkedin Icon" />
        </a>
        <a
          href="https://github.com/phamthienduy-dev"
          target="_blank"
          className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 self-center flex"
        >
          <img src={github} alt="Github Icon" />
        </a>
        <a
          href="https://www.facebook.com/phamthienduy181"
          target="_blank"
          className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 self-center flex"
        >
          <img src={facebook} alt="Facebook Icon" />
        </a>
        <a
          href="https://twitter.com/Thienduy181Duy"
          target="_blank"
          className="hover:shadow-lg hover:-translate-y-0.5 transform transition p-2 rounded-lg h-10 w-10 bg-gray-100 dark:bg-gray-800 self-center flex "
        >
          <img src={twitter} alt="Twitter Icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
