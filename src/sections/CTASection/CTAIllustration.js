import React from "react";

import CTAVector from "../../assets/CTAVector.svg";

import { motion } from "framer-motion";

const CTAIllustrationTop = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="w-11/12 mx-auto">
      <div className="flex w-full  dark:bg-gray-800 bg-gray-50   rounded-xl z-10">
        <div className="m-3 bg-secondary-300 flex-40% py-16 rounded-lg">
          <img src={CTAVector} alt="CTA Vector" />
        </div>

        <div className="px-10 py-10 mobile:px-7 mobile:py-7 md:pl-8 md:py-8 sm:pl-6 sm:py-6 sxphone:pl-3 sxphone:py-7 flex-55%">
          <form
            className="relative"
            method="post"
            name="contact"
            data-netlify="true"
            onSubmit="submit"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="">
              <label
                className="font-semibold text-base md:text-base text-gray-600 dark:text-gray-200 mb-2"
                htmlFor="name"
              >
                {vietnamese ? "Tên" : "Your name"}
              </label>
              <br />
              <input
                require
                placeholder={vietnamese ? "Phạm Thiên Duy" : "Pham Thien Duy"}
                id="name"
                name="name"
                className="w-full pb-3  mt-1 bg-transparent text-gray-600 border-b-2 dark:border-gray-900 border-gray-300 focus:border-gray-600 dark:text-white text-xl focus:outline-none dark:focus:border-gray-50"
              />
            </div>

            <div className="mt-14">
              <label
                className="font-semibold text-base md:text-base text-gray-600 dark:text-gray-200 mb-2"
                htmlFor="email"
              >
                {vietnamese ? "Email" : "Your email"}
              </label>
              <br />
              <input
                require
                placeholder="duyphamthien@outlook.com"
                id="email"
                name="email"
                className="w-full pb-3  mt-1 bg-transparent border-b-2 text-gray-600 dark:border-gray-900 dark:text-white border-gray-300 focus:border-gray-600 text-xl focus:outline-none dark:focus:border-gray-50"
              />
            </div>

            <div className="mt-14">
              <label
                className="font-semibold text-base md:text-base text-gray-600 dark:text-gray-200 mb-2"
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
                className="w-full pb-3  mt-1 bg-transparent text-gray-600 border-b-2 dark:border-gray-900 focus:border-gray-600 dark:text-white border-gray-300 text-xl resize-none focus:outline-none dark:focus:border-gray-50"
              ></textarea>
            </div>

            <div className="w-full flex justify-end">
              <motion.button
                className="mt-16 lg:text-xs shadow-md py-4 px-8 font-bold hover:shadow-x  transition rounded-md duration-300 bg-white dark:bg-gray-900 dark:text-gray-200 self-end"
                href={`${props.url}`}
                target="_blank"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.9 }}
              >
                {props.vietnamese ? "GỬI" : "SUBMIT"}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CTAIllustrationTop;
