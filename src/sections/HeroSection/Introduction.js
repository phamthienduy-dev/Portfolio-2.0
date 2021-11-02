import ButtonPrimary from "../UI/ButtonPrimary";
import heroIllustration from "../../assets/heroIllustration.svg";
import SocialMediaIcons from "./SocialMediaIcons";

const Introduction = () => {
  return (
    <>
      <div className="text-center mt-20">
        <span className="text-gray-400 font-medium">Xin chào! Mình là</span>
        <div className="text-5xl font-medium mb-5">
          <span className="text-primary-200">Phạm </span>
          <span className="text-secondary-200">Thiên </span>
          <span className="text-primary-200">Duy</span>
        </div>
        <ButtonPrimary name="LIÊN HỆ" />
      </div>
      <div className="relative">
        <SocialMediaIcons />
        <img src={heroIllustration} />
      </div>
    </>
  );
};

export default Introduction;
