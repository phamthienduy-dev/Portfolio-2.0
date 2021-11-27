import Introduction from "./Introduction";

const HeroSection = (props) => {
  return (
    <div
      className="container bg-gray-50 rounded-bl-2xl rounded-br-2xl pt-1"
      id="hero-section"
    >
      <Introduction vietnamese={props.vietnamese} />
    </div>
  );
};

export default HeroSection;
