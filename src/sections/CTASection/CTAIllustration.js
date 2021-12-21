import React from "react";

import { ThemeContext } from "../../context/theme-context";

import CTAIllustration from "../../assets/CTAIllustration.svg";
import CTAIllustrationDark from "../../assets/CTAIllustrationDark.svg";
import test from "../../assets/example.svg";
import { motion } from "framer-motion";

const CTAIllustrationTop = (props) => {
  const { theme } = React.useContext(ThemeContext);

  const vietnamese = props.vietnamese;

  return (
    <div className="mt-56 md:mt-36 lg:mt-44 flex-col mx-10 ">
      <div className=" grid grid-cols-2 w-4/5 container bg-blue-400  bg-gradient-to-b from-secondary-300 to-primary-300 rounded-xl z-10">
        <div className="col-start-1 pl-10 py-10 ">
          <h1 className="text-white dark:text-gray-800 text-5xl md:text-3xl mobile:text-2xl font-semibold col leading-normal">
            {vietnamese ? "Liên hệ" : "Contact"}
          </h1>
          <form
            className="mt-10"
            method="post"
            name="contact"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div>
              <label
                className="font-semibold text-xl text-gray-200"
                htmlFor="name"
              >
                {vietnamese ? "Tên của bạn" : "Your name"}
              </label>
              <br />
              <input
                placeholder={vietnamese ? "Tên của bạn" : "Your full name"}
                id="name"
                name="name"
                className="w-11/12   p-2 rounded-md mt-1 dark:bg-gray-600 dark:text-gray-200"
              />
            </div>

            <div className="mt-4">
              <label
                className="font-semibold text-xl text-gray-200"
                htmlFor="email"
              >
                {vietnamese ? "Email của bạn" : "Your email"}
              </label>
              <br />
              <input
                placeholder={vietnamese ? "Email của bạn" : "Your email"}
                id="email"
                name="email"
                className="w-11/12   p-2 rounded-md mt-1 dark:bg-gray-600 dark:text-gray-200"
              />
            </div>

            <div className="mt-4">
              <label
                className="font-semibold text-xl text-gray-200"
                htmlFor="message"
              >
                {vietnamese ? "Lời nhắn" : "Message"}
              </label>
              <br />
              <textarea
                placeholder={vietnamese ? "Lời nhắn" : "Your message"}
                id="message"
                name="message"
                className="w-11/12 h-56   p-2 rounded-md mt-1 dark:bg-gray-600 dark:text-white"
              ></textarea>
            </div>

            <motion.button
              className="mt-8 lg:text-xs shadow-md px-8 py-2 lg:px-3 font-bold hover:shadow-x  transition rounded-md duration-300 bg-gray-50 dark:bg-gray-900 text-gray-600"
              href={`${props.url}`}
              target="_blank"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
            >
              {props.vietnamese ? "GỬI" : "SUBMIT"}
            </motion.button>
          </form>
        </div>
        <div className="relative my-3">
          <div className="px-3 py-24 flex items-end h-full">
            <img src={test} className="bottom-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAIllustrationTop;
