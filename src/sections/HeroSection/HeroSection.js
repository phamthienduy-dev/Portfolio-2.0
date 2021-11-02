import NavBar from "./NavBar";
import Introduction from "./Introduction";

const HeroSection = () => {
  return (
    <header className="container bg-gray-50 rounded-md mt-8 ">
      <NavBar />
      <Introduction />
    </header>
  );
};

export default HeroSection;
