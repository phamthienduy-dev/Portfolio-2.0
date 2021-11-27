import { React } from "react";

import OMNIFOOD from "./OMNIFOOD";
import Bankist from "./Bankist";
import Forkify from "./forkify";
import AmazonClone from "./amazonClone";

const Projects = (props) => {
  return (
    <div className="container grid grid-cols-2 grid-rows-2 mt-8 gap-24 ">
      <div>
        <OMNIFOOD vietnamese={props.vietnamese} />
      </div>
      <div>
        <Bankist vietnamese={props.vietnamese} />
      </div>
      <div>
        <Forkify vietnamese={props.vietnamese} />
      </div>
      <div>
        <AmazonClone vietnamese={props.vietnamese} />
      </div>
    </div>
  );
};

export default Projects;
