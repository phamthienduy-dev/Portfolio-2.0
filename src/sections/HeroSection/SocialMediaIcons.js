import facebook from "../../assets/facebook.svg";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";

const SocialMediaIcons = () => {
  return (
    <div className="absolute left-45 top-20">
      <div className="h-40 w-40 relative">
        <a
          href="https://twitter.com/Thienduy181Duy"
          target="_blank"
          className="absolute top-0 right-0 hover:shadow-lg hover:-translate-y-0.5 transform transition"
        >
          <img src={twitter} alt="Twitter Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/ph%E1%BA%A1m-thi%C3%AAn-duy-76b347220/"
          target="_blank"
          className="absolute top-6 left-22 hover:shadow-lg hover:-translate-y-0.5 transform transition"
        >
          <img src={linkedin} alt="Linkedin Icon" />
        </a>
        <a
          href="https://github.com/phamthienduy-dev"
          target="_blank"
          className="absolute bottom-13 left-11 hover:shadow-lg hover:-translate-y-0.5 transform transition"
        >
          <img src={github} alt="Github Icon" />
        </a>
        <a
          href="https://www.facebook.com/phamthienduy181"
          target="_blank"
          className="absolute bottom-0 left-0 hover:shadow-lg hover:-translate-y-0.5 transform transition"
        >
          <img src={facebook} alt="Facebook Icon" />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaIcons;
