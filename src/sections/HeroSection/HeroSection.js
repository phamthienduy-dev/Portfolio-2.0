import NavBar from "./NavBar";
import Introduction from "./Introduction";

const HeroSection = (props) => {
  console.log(props);
  return (
    <header
      className="container bg-gray-50 rounded-2xl mt-8 pt-1"
      id="hero-section"
    >
      <NavBar
        vietnamese={props.vietnamese}
        setVietnamese={props.setVietnamese}
      />
      <Introduction vietnamese={props.vietnamese} />
    </header>
  );
};

export default HeroSection;
