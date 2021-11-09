import React from "react";

const AboutHeading = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="text-center ">
      <span className="font-semibold text-gray-400">
        {vietnamese ? "GIỚI THIỆU" : "ABOUT"}
      </span>
      <h1 className="text-7xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200 pb-2">
        {vietnamese ? "Đôi điều về mình" : "Something about me"}
      </h1>
    </div>
  );
};

export default AboutHeading;
