import { motion } from "framer-motion";

const ButtonPrimary = (props) => {
  return (
    <motion.button
      className="text-sm sphone:text-xs font-semibold py-4 px-8 lg:py-3 lg:px-7 sm:py-2 sm:px-6 sphone:py-1 sphone:px-5  hover:shadow-lg dark:hover:bg-red-200 transition duration-300 text-white rounded-md sphone:rounded bg-gradient-to-r from-secondary-200 to-primary-200"
      onClick={props.handleClick}
      href={props.href}
      target="_blank"
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.9 }}
    >
      {props.name}
    </motion.button>
  );
};

export default ButtonPrimary;
