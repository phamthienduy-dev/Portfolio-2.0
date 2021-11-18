import React from "react";

import ProfilePic from "../../../assets/ProfilePic.png";
import PrimaryButton from "../../../UI/ButtonPrimary";

const AboutCard = (props) => {
  const vietnamese = props.vietnamese;

  return (
    <div className="w-3/5 bg-white shadow-lg px-2 py-1 rounded-2xl ">
      <img src={ProfilePic} className="inline-block" />
      <div className="mt-8 text-center text-gray-600 font-semibold text-xl">
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
        <span className="absolute text-7xl text-gray-300 flex">“</span>
        <span className="absolute text-7xl right-3 bottom-4 items-end transform rotate-180 text-gray-300">
          “
        </span>
        <p className="p-8 text-base text-gray-600 font-semibold">
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

      <a className="mt-24 p-3 grid grid-cols-2">
        <a
          href="#"
          className="text-xs font-bold text-gray-500 self-center ml-4"
        >
          RESUME
        </a>
        <div className="w-3/4 justify-self-end">
          <PrimaryButton name={vietnamese ? "LIÊN HỆ" : "CONTACT"} />
        </div>
      </a>
    </div>
  );
};

export default AboutCard;
