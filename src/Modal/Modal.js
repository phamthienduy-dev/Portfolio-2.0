import React from "react";

import formLightVector from "../assets/formLightVector.svg";
import formDarkVector from "../assets/formDarkVector.svg";
import { AiOutlineClose } from "react-icons/ai";
import { ThemeContext } from "../context/theme-context";

function Modal(props) {
  const { theme } = React.useContext(ThemeContext);
  const vietnamese = props.vietnamese;

  return (
    <div className="bg-white grid grid-cols-2 rounded-2xl dark:bg-gray-800">
      <div className="pl-12 py-12">
        <div className="text-3xl flex font-extrabold justify-self-start ">
          <span className="text-primary-200">DUY</span>
          <span className="text-secondary-200">FE</span>
        </div>
        <h1 className="text-4xl text-primary-200 font-bold mt-8">
          {vietnamese ? "Đánh giá" : "Review"}
        </h1>

        <form
          className="mt-12"
          method="post"
          name="review"
          data-netlify="true"
          onSubmit="submit"
        >
          <input type="hidden" name="form-name" value="review" />
          <div>
            <label
              className="font-semibold dark:text-gray-200"
              htmlFor="opinion"
            >
              {vietnamese
                ? "Bạn nghĩ sao về portfolio của mình ?"
                : "What do you think about my portfolio?"}
            </label>
            <textarea
              id="opinion"
              name="opinion"
              className="w-3/4 border-2 border-solid border-gray-500 p-2 rounded-md mt-1 dark:bg-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="mt-4">
            <label className="font-semibold dark:text-gray-200" html="bugs">
              {vietnamese
                ? "Bạn có phát hiện ra lỗi? Nếu có hãy chỉ mình nhé!"
                : "Have you spotted any bugs, please show me!"}
            </label>
            <textarea
              id="bugs"
              name="bugs"
              className="w-3/4 border-2 border-solid border-gray-500 p-2 rounded-md mt-1 dark:bg-gray-600 dark:text-gray-200"
            />
          </div>

          <div className="mt-4">
            <label
              className="font-semibold dark:text-gray-200"
              htmlFor="improvement"
            >
              {vietnamese
                ? "Mình cần làm gì để cải thiệt portfolio này?"
                : "What should I do to improve this porfolio?"}
            </label>
            <textarea
              id="improvement"
              name="improvement"
              className="w-3/4 h-64 border-2 border-solid border-gray-500 p-2 rounded-md mt-1 dark:bg-gray-600 dark:text-white"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg  transition duration-300 text-white font-semibold px-12 py-2 rounded-md text-lg "
          >
            Gửi
          </button>
        </form>
      </div>
      <div className="flex items-center flex-col gap-1 relative pt-12 pb-14">
        <div
          onClick={props.onCloseModal}
          className="bg-gray-100 dark:bg-gray-600 absolute top-0 right-0 cursor-pointer p-2 rounded-full mt-2 mr-2"
        >
          <a className="text-2xl">
            <AiOutlineClose />
          </a>
        </div>
        <img
          src={theme === "light" ? formLightVector : formDarkVector}
          alt="Form Vector"
          className="w-full"
        />
      </div>
    </div>
  );
}

export default Modal;
