import { React } from "react";

import Project from "./Project";

import OMNIFOODPic from "../../../assets/Omnifood.png";
import AmazonClonePic from "../../../assets/amazon.png";
import BankistPic from "../../../assets/Bankist.png";
import forkifyPic from "../../../assets/forkify.png";
import HTMLTag from "../../../assets/HTMLTag.svg";
import CSSTag from "../../../assets/CSSTag.svg";
import ReactTag from "../../../assets/ReactTag.svg";
import JavaScriptTag from "../../../assets/JavaScriptTag.svg";

const Projects = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="container">
      <div className="mx-2 grid grid-cols-2 grid-rows-2 mt-8 gap-24 md:gap-5 xl:gap-12">
        <div>
          <Project
            image={OMNIFOODPic}
            name={"OMNIFOOD"}
            tagOne={HTMLTag}
            tagTwo={CSSTag}
            tagThree={JavaScriptTag}
            description={
              vietnamese
                ? "Landing page cho một dịch vụ ăn uống. Tập trung vào responsive và UI!"
                : "Landing page for a food service. Focus in responsive and UI!"
            }
            sourceCode={`https://github.com/phamthienduy-dev/OMNIFOOD`}
            url={`https://omnifood-duyfe.netlify.app/`}
            vietnamese={props.vietnamese}
          />
        </div>
        <div>
          <Project
            image={BankistPic}
            name={"BANKIST"}
            tagOne={HTMLTag}
            tagTwo={CSSTag}
            tagThree={JavaScriptTag}
            description={
              vietnamese
                ? "Landing page cho ngân hàng kỹ thuật số. Sử dụng animation đơn giản + modal."
                : "Landing page for a digital bank. Using some basic animations and modal."
            }
            sourceCode={`https://github.com/phamthienduy-dev/bankist`}
            url={`https://bankist-duyfe.netlify.app/`}
            vietnamese={props.vietnamese}
          />
        </div>
        <div>
          <Project
            image={forkifyPic}
            name={"forkify"}
            tagOne={HTMLTag}
            tagTwo={CSSTag}
            tagThree={JavaScriptTag}
            description={
              vietnamese
                ? "Bạn có thể tìm kiếm, thêm, bookmark các công thức nấu ăn bạn thích."
                : "You can search, add, bookmark your favorite cooking recipes."
            }
            sourceCode={`https://github.com/phamthienduy-dev/forkify`}
            url={`https://forkify-duyfe.netlify.app/`}
            vietnamese={props.vietnamese}
          />
        </div>
        <div>
          <Project
            image={AmazonClonePic}
            name={"Amazon Clone"}
            tagOne={HTMLTag}
            tagTwo={CSSTag}
            tagThree={ReactTag}
            description={
              vietnamese ? "Website clone amazon" : "Amazon clone website"
            }
            url={`https://clone-2250a.web.app/`}
            sourceCode={`https://github.com/phamthienduy-dev/amazon-clone`}
            vietnamese={props.vietnamese}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
