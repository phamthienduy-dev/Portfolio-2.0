import React from "react";

import ProfilePic from "../../../assets/ProfilePic.png";
import { motion } from "framer-motion";

const AboutCard = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="relative w-1/3 md:w-5/12 sm:w-2/5 sxm:w-1/2 sphone:w-3/4 sxphone:w-full bg-white shadow-lg px-3 py-1 rounded-2xl dark:bg-gray-900 sm:mx-auto">
      <img src={ProfilePic} className="inline-block" alt="Profile" />
      <div className="mt-8 text-center text-gray-600 font-semibold text-xl sm:text-lg  mobile:text-base dark:text-gray-200">
        <p>
          {vietnamese ? "Xin chào! Mình là " : "Hi! My name is "}
          <span className="text-primary-100">
            {vietnamese ? "Duy." : "Duy,"}
          </span>
        </p>
        <p className="mt-1">
          {vietnamese ? "Đến từ Vũng Tàu, " : "from Vung Tau, "}
          <span className="text-secondary-100">
            {vietnamese ? "Việt Nam." : "Viet Nam."}
          </span>
        </p>
      </div>

      <blockquote className="mt-9 relative p-3 ">
        <span className="absolute  text-7xl lg:text-6xl mobile:text-4xl text-gray-300 flex">
          “
        </span>
        <span className="absolute text-7xl lg:text-6xl mobile:text-4xl right-3 bottom-4 sphone:bottom-16 items-end transform rotate-180 text-gray-300">
          “
        </span>
        <p className="p-8 sm:p-7 mobile:p-6 lg:text-base sm:text-sm text-lg mobile:text-xs sphone:text-sm sphone:h-44 text-gray-600 font-semibold dark:text-gray-200">
          {vietnamese ? "Mình thích " : "I love "}
          <span className="text-primary-100">
            {vietnamese ? "thiết kế " : "designing "}
          </span>
          {vietnamese ? "và " : "and "}
          <span className="text-secondary-100">
            {vietnamese ? "lập trình " : "programming "}
          </span>
          {vietnamese
            ? "những trang web trực quan, thân thiện với người dùng."
            : "beautiful, user-friendy websites."}
        </p>
      </blockquote>

      <div className="absolute bottom-1 right-1 xl:mt-12.8 mt-20 mb-4 pr-3 flex w-full justify-end">
        <motion.a
          href="https://drive.google.com/file/d/12sb3J2oMhM5fww1Mp8AUYLNDUYt9UWA3/view?usp=sharing"
          rel="noopener noreferrer"
          className="sm:text-xs text-sm shadow-md  px-4 py-3 font-bold text-gray-600 bg-gray-50 hover:shadow-x dark:text-gray-200  transition rounded-md duration-300 dark:bg-gray-800"
          target="_blank"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
        >
          RESUME
        </motion.a>
      </div>
    </div>
  );
};

export default AboutCard;
