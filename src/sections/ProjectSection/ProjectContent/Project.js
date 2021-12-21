import React from "react";

import { motion } from "framer-motion";

function Project(props) {
  return (
    <div className="h-full sxm:w-2/3 sphone:w-full sxm:mx-auto border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
      <div className="p-5 md:p-4 flex gap-5 h-full dark:bg-gray-800 rounded-lg  ">
        <img
          src={props.image}
          className="rounded-lg w-1/2"
          alt={`${props.image}`}
        />
        <div className="py-4">
          <h1 className="text-3xl lg:text-2xl sm:text-xl text-gray-500 font-semibold dark:text-gray-200">
            {props.name}
          </h1>
          <div className="flex gap-1">
            <img src={props.tagOne} alt={`${props.tagOne}`} />
            <img src={props.tagTwo} alt={`${props.tagTwo}`} />
            <img src={props.tagThree} alt={`${props.tagThree}`} />
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-200 lg:text-sm sm:text-xs sxphone:text-sxs">
            {props.description}
          </p>
          <div className="mt-6 flex gap-6 sxphone:gap-3 text-sm text-gray-500  dark:text-gray-200 ">
            <motion.a
              className="lg:text-xs shadow-md px-4 py-2 lg:px-3 font-bold hover:shadow-x  transition rounded-md duration-300 dark:bg-gray-900"
              href={`${props.url}`}
              target="_blank"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
            >
              {props.vietnamese ? "XEM" : "VIEW"}
            </motion.a>
            <motion.a
              className="lg:text-xs font-bold px-4 py-2 lg:px-3 bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition text-white rounded-md duration-300"
              target="_blank"
              href={`${props.sourceCode}`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.9 }}
            >
              CODE
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
