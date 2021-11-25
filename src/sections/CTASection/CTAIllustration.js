import React from "react";

import CTAComputer from "../../assets/ComputerVietnamese.svg";
import CTAComputerEnglish from "../../assets/ComputerEnglish.svg";
import CTAIllustration from "../../assets/CTAIllustration.svg";

const CTAIllustrationTop = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="relative">
      <div className="absolute w-full ">
        <img
          src={vietnamese ? CTAComputer : CTAComputerEnglish}
          className="mx-auto w-4/6"
        />
      </div>
      <button className="bg-secondary-200 font-bold text-white h-20.4 w-44.8 absolute top-88 left-142 rounded-xl hover:bg-secondary-100 transition duration-300">
        {vietnamese ? "ĐÁNH GIÁ" : "REVIEW"}
      </button>
      <button className="bg-primary-200 font-bold text-white h-20.4 w-44.8 absolute top-88 left-192.8 rounded-xl hover:bg-primary-100 transition duration-300">
        {vietnamese ? "LIÊN HỆ" : "CONTACT"}
      </button>
      <div className="absolute grid grid-cols-5 container bg-blue-400 w-full top-214 bg-gradient-to-b from-secondary-300 to-primary-300 rounded-xl z-10">
        <div className="col-start-1 col-span-3 py-28 pl-28">
          <h1 className="text-white text-5xl font-semibold col leading-normal">
            {vietnamese
              ? "Để lại email và mình sẽ liên hệ ngay nhé!"
              : "Leave your email and I will contact you shortly!"}
          </h1>
          <form className="flex border-4 border-opacity-100 w-3/4 rounded-md mt-10 ">
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              required
              className="w-full px-3 border-none  focus:ring-2 focus:ring-blue-600 focus:outline-none"
            />
            <button className="bg-gradient-to-r rounded-md from-secondary-200 to-primary-200 hover:shadow-lg text-white font-semibold py-2 px-8 text-sm ">
              {vietnamese ? "Gửi" : "SUBMIT"}
            </button>
          </form>
        </div>
        <div className="relative col-span-2">
          <img
            src={CTAIllustration}
            alt="CTA Illustration"
            className="w-full h-full absolute -bottom-18 -left-14 "
          />
        </div>
      </div>
    </div>
  );
};

export default CTAIllustrationTop;
