import { React } from "react";

import ProjectHeading from "./ProjectHeading";
import Projects from "./ProjectContent/Projects";

const ProjectSection = (props) => {
  return (
    <div className="mt-24" id="project">
      <ProjectHeading vietnamese={props.vietnamese} />
      <Projects vietnamese={props.vietnamese} />
    </div>
  );
};

export default ProjectSection;
