import React from "react";

import { motion } from "framer-motion";

function Project(props) {
  return (
    <div className="h-full border-gradient-b-blue-purple-white border-transparent border-solid border-2 rounded-xl ">
      <div className="p-5 grid grid-cols-2 gap-5 h-full dark:bg-gray-800 rounded-lg ">
        <img src={props.image} className="rounded-lg" alt={`${props.image}`} />
        <div className="py-9 md:py-3 lg:py-5">
          <h1 className="text-3xl lg:text-2xl text-gray-500 font-semibold dark:text-gray-200">
            {props.name}
          </h1>
          <div className="flex gap-1">
            <img src={props.tagOne} alt={`${props.tagOne}`} />
            <img src={props.tagTwo} alt={`${props.tagTwo}`} />
            <img src={props.tagThree} alt={`${props.tagThree}`} />
          </div>
          <p className="mt-4 text-gray-500 dark:text-gray-200 lg:text-sm">
            {props.description}
          </p>
          <div className="mt-6 flex gap-6 text-sm text-gray-500  dark:text-gray-200 ">
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
              SOURCE CODE
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
