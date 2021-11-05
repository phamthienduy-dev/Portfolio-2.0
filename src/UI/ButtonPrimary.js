const ButtonPrimary = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg hover:-translate-y-0.5 transform transition text-white font-semibold py-2 px-8 rounded-md text-sm "
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default ButtonPrimary;
