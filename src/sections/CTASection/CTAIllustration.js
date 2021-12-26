import React from "react";

import test from "../../assets/example.svg";
import { motion } from "framer-motion";

const CTAIllustrationTop = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="mt-64  lg:mt-56 sphone:mt-24 sm:mt-40 flex-col mx-10 sphone:mx-0">
      <div className=" grid grid-cols-2 mobile:grid-cols-1 w-full container bg-blue-400  bg-gradient-to-b from-secondary-300 to-primary-300 rounded-xl z-10">
        <div className="col-start-1 pl-10 py-10  mobile:px-7 mobile:py-7 md:pl-8 md:py-8 sm:pl-6 sm:py-6 sxphone:pl-3 sxphone:py-7">
          <h1 className="text-gray-200 text-6xl md:text-4xl sphone:text-5xl font-semibold col leading-normal">
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
                className="font-semibold text-xl md:text-base text-gray-200 "
                htmlFor="name"
              >
                {vietnamese ? "Tên" : "Your name"}
              </label>
              <br />
              <input
                require
                placeholder={vietnamese ? "Tên của bạn" : "Your full name"}
                id="name"
                name="name"
                className="w-11/12 mobile:w-full p-3 rounded-md mt-1 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="mt-4">
              <label
                className="font-semibold text-xl md:text-base text-gray-200"
                htmlFor="email"
              >
                {vietnamese ? "Email" : "Your email"}
              </label>
              <br />
              <input
                require
                placeholder={vietnamese ? "Email của bạn" : "Your email"}
                id="email"
                name="email"
                className="w-11/12 mobile:w-full  p-3 rounded-md mt-1 dark:bg-gray-900 dark:text-white"
              />
            </div>

            <div className="mt-4">
              <label
                className="font-semibold text-xl md:text-base text-gray-200"
                htmlFor="message"
              >
                {vietnamese ? "Lời nhắn" : "Message"}
              </label>
              <br />
              <textarea
                require
                placeholder={vietnamese ? "Lời nhắn" : "Your message"}
                id="message"
                name="message"
                className="w-11/12 mobile:w-full h-56 p-3 rounded-md mt-1 dark:bg-gray-900 dark:text-white"
              ></textarea>
            </div>

            <motion.button
              className="mt-8 lg:text-xs shadow-md px-12 py-2 font-bold hover:shadow-x  transition rounded-md duration-300 bg-gray-50 dark:bg-gray-900 dark:text-gray-200"
              href={`${props.url}`}
              target="_blank"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
            >
              {props.vietnamese ? "GỬI" : "SUBMIT"}
            </motion.button>
          </form>
        </div>
        <div className="relative my-3 mobile:hidden">
          <div className="px-3 py-24 flex items-end h-full">
            <img src={test} className="bottom-0" alt="Man standing vector" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTAIllustrationTop;
