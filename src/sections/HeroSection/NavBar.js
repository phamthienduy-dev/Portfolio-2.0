import modeToggle from "../../assets/modeToggle.svg";

const NavBar = (props) => {
  const vietnamese = props.vietnamese;

  const langueNotActive =
    "text-gray-300 hover:text-gray-500 transition duration-300";

  const languageChangeHandler = (e) => {
    e.preventDefault();

    props.setVietnamese((prevState) => !prevState);
  };

  if (vietnamese) {
    document.title = "Xin chào, mình là Duy!";
  } else {
    document.title = "Hi I am Duy!";
  }

  return (
    <div className="mt-8 font-bold py-4 px-5 sticky z-50 top-0 container bg-gray-50 rounded-tl-2xl rounded-tr-2xl">
      <div className="grid grid-cols-2 text-gray-500">
        <div className="text-4xl flex  font-extrabold justify-self-start ">
          <a href="/">
            <span className="text-primary-200">DUY</span>
            <span className="text-secondary-200">FE</span>
          </a>
        </div>
        <nav className="text-sm flex self-center gap-12 justify-self-end ">
          <div className="flex justify-self-end gap-12 self-center text-sm ">
            <a
              href="#"
              className="hover:text-gray-900 transition duration-300 self-center "
            >
              {vietnamese ? "GIỚI THIỆU" : "ABOUT"}
            </a>
            <a
              href="#"
              className="hover:text-gray-900 transition duration-300 self-center"
            >
              {vietnamese ? "DỰ ÁN" : "PROJECTS"}
            </a>

            <div className="self-center">
              <a
                href="#"
                className={vietnamese && langueNotActive}
                onClick={languageChangeHandler}
              >
                EN
              </a>{" "}
              |{" "}
              <a
                href="#"
                className={!vietnamese && langueNotActive}
                onClick={languageChangeHandler}
              >
                VN
              </a>
            </div>
            <a href="#" className="self-center">
              <img src={modeToggle} alt="Darkmode Toggle" />
            </a>
            <a
              className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition duration-300  text-white font-semibold py-2 px-8 rounded-md text-sm "
              href="https://drive.google.com/file/d/1d3BCopD0BKiI7Wz4-xsmSHWynOhw82-r/view?usp=sharing"
              target="_blank"
            >
              RESUME
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
