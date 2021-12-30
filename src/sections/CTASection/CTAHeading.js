import React from "react";

const CTAHeading = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="text-center mb-10">
      <h1 className="text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200 pb-2 mt-64  lg:mt-56 sphone:mt-24 sm:mt-40">
        {vietnamese ? "LIÊN HỆ" : "CONTACT ME"}
      </h1>
      <span className="text-gray-400 dark:text-gray-200 text-2xl sm:text-sm sphone:text-sm">
        {vietnamese
          ? "Bạn có lời muốn nói? Để lại lời nhắn nhé!"
          : "Want to tell me something? Just leave a message!"}
      </span>
    </div>
  );
};

export default CTAHeading;
