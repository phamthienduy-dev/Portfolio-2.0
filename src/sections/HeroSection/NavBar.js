import modeToggle from "../../assets/modeToggle.svg";
import ButtonPrimary from "../UI/ButtonPrimary";

const NavBar = () => {
  const buttonHandler = () => {
    console.log("Button Clicked!");
  };

  return (
    <div className="font-bold p-2">
      <div className="grid grid-cols-3 text-gray-700">
        <div className="text-sm flex self-center gap-12 ">
          <a href="#">GIỚI THIỆU</a>
          <a href="#">DỰ ÁN</a>
          <a href="#">LIÊN HỆ</a>
        </div>
        <span className="text-4xl flex justify-self-center font-extrabold ">
          <div className="text-primary-200">DUY</div>
          <div className="text-secondary-200">FE</div>
        </span>
        <div className="flex justify-self-end gap-12 self-center text-sm ">
          <div className="self-center">
            <a href="#" className="text-gray-300">
              EN
            </a>{" "}
            | <a href="#">VN</a>
          </div>
          <a href="#" className="self-center">
            <img src={modeToggle} href="Dark Mode Toggle" />
          </a>
          <a>
            <ButtonPrimary name="RESUME" handleClick={buttonHandler} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
