const ButtonPrimary = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg transition duration-300 text-white font-semibold py-2 px-8 rounded-md text-sm "
      onClick={props.handleClick}
      href={props.href}
      target="_blank"
    >
      {props.name}
    </button>
  );
};

export default ButtonPrimary;
