const CustomButton = ({ buttonStyles, buttonText, click }) => {
  return (
    <button className={`${buttonStyles}`} onClick={click}>
      {buttonText}
    </button>
  );
};

export default CustomButton;
