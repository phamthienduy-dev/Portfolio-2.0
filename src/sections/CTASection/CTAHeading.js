import React from "react";

const CTAHeading = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="text-center mb-10 sphone:mb-5">
      <h1 className="text-7xl lg:text-6xl sm:text-5xl sphone:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-200 to-secondary-200 pb-2 mt-64 lg:mt-56 sphone:mt-24sm:mt-40">
        {vietnamese ? "LIÊN HỆ" : "CONTACT ME"}
      </h1>
      <span className="text-gray-400 dark:text-gray-200 text-2xl sm:text-xl sphone:text-base ">
        {vietnamese
          ? "Bạn có lời muốn nói? Để lại lời nhắn nhé!"
          : "Want to tell me something? Just leave a message!"}
      </span>
    </div>
  );
};

export default CTAHeading;
