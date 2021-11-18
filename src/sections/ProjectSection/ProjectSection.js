import { React } from "react";

import ProjectHeading from "./ProjectHeading";
import Projects from "./ProjectContent/Projects";

const ProjectSection = (props) => {
  return (
    <section className="mt-24" id="project-section">
      <ProjectHeading vietnamese={props.vietnamese} />
      <Projects vietnamese={props.vietnamese} />
    </section>
  );
};

export default ProjectSection;
