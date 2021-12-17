import React from "react";

import ProfilePic from "../../../assets/ProfilePic.png";
import PrimaryButton from "../../../UI/ButtonPrimary";
import { motion } from "framer-motion";

const AboutCard = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="w-1/3 bg-white shadow-lg px-3 py-1 rounded-2xl dark:bg-gray-900">
      <img src={ProfilePic} className="inline-block" />
      <div className="mt-8 text-center text-gray-600 font-semibold text-xl md:text-base dark:text-gray-200">
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
        <span className="absolute md:text-5xl text-7xl lg:text-6xl text-gray-300 flex">
          “
        </span>
        <span className="absolute md:text-5xl text-7xl lg:text-6xl right-3 bottom-4 items-end transform rotate-180 text-gray-300">
          “
        </span>
        <p className="p-8 md:text-sm lg:text-base text-lg text-gray-600 font-semibold dark:text-gray-200">
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

      <a className="xl:mt-12.8 mt-20 mb-4 pr-3 flex w-full justify-end">
        <motion.a
          className="text-sm shadow-md md:text-xs md:px-2 md:py-1 px-4 py-2 font-bold text-gray-600 bg-gray-50 hover:shadow-x dark:text-gray-200  transition rounded-md duration-300 dark:bg-gray-800"
          href={`${props.url}`}
          target="_blank"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.9 }}
        >
          RESUME
        </motion.a>
      </a>
    </div>
  );
};

export default AboutCard;
