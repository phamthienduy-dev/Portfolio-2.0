import { motion } from "framer-motion";

const ButtonPrimary = (props) => {
  return (
    <motion.button
      className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg dark:hover:bg-red-200 transition duration-300 text-white font-semibold py-2 px-8 rounded-md text-sm "
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
