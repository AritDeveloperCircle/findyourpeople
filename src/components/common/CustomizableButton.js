function CustomizableButton({ text, onClickProp, customClass }) {
  return (
    <button className={customClass} onClick={onClickProp}>
      {text}
    </button>
  );
}
export default CustomizableButton;
