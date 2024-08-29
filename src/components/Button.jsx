function Button({ title, value, handleButtonClick }) {
  return (
    <button className="btns" value={value} onClick={handleButtonClick}>
      {title}
    </button>
  );
}

export default Button;
