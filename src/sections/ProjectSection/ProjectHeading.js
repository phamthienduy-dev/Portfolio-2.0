import React from "react";

const ProjectHeading = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="text-center ">
      <span className="font-semibold text-gray-400">
        {vietnamese ? "DỰ ÁN" : "PROJECTS"}
      </span>
      <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200">
        {vietnamese ? "Mình làm được gì? " : "What can I do?"}
      </h1>
    </div>
  );
};

export default ProjectHeading;
