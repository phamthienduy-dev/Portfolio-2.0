import { React } from "react";

import ProjectHeading from "./ProjectHeading";
import Projects from "./ProjectContent/Projects";

const ProjectSection = (props) => {
  return (
    <section className="mt-24">
      <ProjectHeading vietnamese={props.vietnamese} />
      <Projects />
    </section>
  );
};

export default ProjectSection;
