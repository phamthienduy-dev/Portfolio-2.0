import React from "react";

const ProjectHeading = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="text-center ">
      <span className="font-semibold text-gray-400 dark:text-gray-200 sm:text-sm sphone:text-sxs">
        {vietnamese ? "DỰ ÁN" : "PROJECTS"}
      </span>
      <h1 className="text-7xl lg:text-6xl sm:text-5xl sphone:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200 pb-2">
        {vietnamese ? "Mình làm được gì? " : "What can I do?"}
      </h1>
    </div>
  );
};

export default ProjectHeading;
