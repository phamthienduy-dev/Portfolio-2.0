import React, { useState } from "react";

import { ThemeContext } from "../../context/theme-context";
import CTAComputer from "../../assets/ComputerVietnamese.svg";
import CTAComputerEnglish from "../../assets/ComputerEnglish.svg";
import CTAComputerDark from "../../assets/CTAComputerDark.svg";
import CTAComputerDarkEnglish from "../../assets/CTAComputerEnglishDark.svg";

import CTAIllustration from "../../assets/CTAIllustration.svg";
import CTAIllustrationDark from "../../assets/CTAIllustrationDark.svg";

const CTAIllustrationTop = (props) => {
  const { theme } = React.useContext(ThemeContext);

  const vietnamese = props.vietnamese;

  const renderVector = () => {
    if (theme === "dark" && vietnamese) {
      return (
        <img src={CTAComputerDark} className="mx-auto " alt="CTA Vector Dark" />
      );
    }
    if (theme === "dark" && !vietnamese) {
      return (
        <img
          src={CTAComputerDarkEnglish}
          className="mx-auto "
          alt="CTA Vector Dark"
        />
      );
    }
    if (theme === "light" && vietnamese) {
      return <img src={CTAComputer} className="mx-auto  " alt="CTA Vector" />;
    }
    if (theme === "light" && !vietnamese) {
      return (
        <img
          src={CTAComputerEnglish}
          className="mx-auto  min-w-min"
          alt="CTA Vector"
        />
      );
    }
  };

  return (
    <div className=" mt-56 md:mt-36 lg:mt-44 flex-col h-cta lg:h-296 md:h-248 sm:h-228 sxm:h-200 mobile:h-160 sphone:h-140 mx-2">
      <div className="relative flex justify-center w-3/5 xl:w-7/12  mx-auto">
        <div className="absolute flex gap-5 top-41% left-39% w-full ">
          <button
            onClick={() => props.setShowModal(true)}
            className="md:text-sm sm:text-xs mobile:text-sxs  bg-secondary-200 font-bold text-white py-5  lg:py-4 sm:py-3 mobile:py-2 sphone:py-1   w-19.7% md:rounded-lg mobile:rounded rounded-xl hover:bg-secondary-100 transition duration-300"
          >
            {vietnamese ? "ĐÁNH GIÁ" : "REVIEW"}
          </button>
          <button className="md:text-sm sm:text-xs mobile:text-sxs bg-primary-200 font-bold text-white py-5 lg:py-4 sm:py-3 mobile:py-2 sphone:py-1 w-19.7% md:rounded-lg mobile:rounded rounded-xl hover:bg-primary-100 transition duration-300 cursor-not-allowed">
            {vietnamese ? "LIÊN HỆ" : "CONTACT"}
          </button>
        </div>
        <div className="w-full ">{renderVector()}</div>
      </div>
      <div className="relative">
        <div className="absolute grid grid-cols-5 sm:grid-cols-3 sphone:grid-cols-4 container bg-blue-400 w-full bg-gradient-to-b from-secondary-300 to-primary-300 rounded-xl z-10">
          <div className="col-start-1 col-span-3 sm:col-span-2 sphone:col-span-3 py-28 pl-28 sphone:py-6 sphone:pl-6 mobile:py-10 mobile:pl-10 sxm:py-14 sxm:pl-14 sm:py-16 sm:pl-16 md:py-20 md:pl-20 lg:py-20 lg:pl-16 xl:pl-20 xl:py-24">
            <h1 className="text-white dark:text-gray-800 text-5xl md:text-3xl mobile:text-2xl font-semibold col leading-normal">
              {vietnamese
                ? "Để lại email và mình sẽ liên hệ ngay nhé!"
                : "Leave your email and I will contact you shortly!"}
            </h1>
            <form
              name="email"
              data-netlify="true"
              onSubmit="submit"
              className="flex dark:border-gray-900 border-4 border-opacity-100 w-3/4 rounded-md mt-10 mobile:mt-6"
            >
              <input type="hidden" name="form-name" value="email" />
              <input
                name="email"
                type="email"
                id="email"
                placeholder="yourname@email.com"
                required
                className="dark:bg-gray-800 dark:text-gray-200 w-full px-3 md:px-2 sm:text-xs mobile:text-sxs border-none focus:ring-2 focus:ring-blue-600 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r rounded-sm from-secondary-200 to-primary-200 hover:shadow-lg text-white font-semibold py-2 px-8 text-sm border-none md:text-xs md:px-6"
              >
                {vietnamese ? "Gửi" : "SUBMIT"}
              </button>
            </form>
          </div>
          <div className="relative sm:col-start-3 sm:col-span-1 sphone:col-start-4  col-span-2">
            <img
              src={theme === "light" ? CTAIllustration : CTAIllustrationDark}
              alt="CTA Illustration"
              className="w-full h-full absolute -bottom-18 -left-14 sphone:left-0 sphone:-bottom-8 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAIllustrationTop;
