const ButtonPrimary = (props) => {
  return (
    <button
      className="bg-gradient-to-r from-secondary-200 to-primary-200 hover:shadow-lg hover:-translate-y-0.5 transform transition text-gray-50 font-bold py-2 px-8 rounded-md  "
      onClick={props.handleClick}
    >
      {props.name}
    </button>
  );
};

export default ButtonPrimary;
