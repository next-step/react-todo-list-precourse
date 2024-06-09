import "./CheckBox.css";

const CheckBox = ({ isChecked, onChange }) => {
  return (
    <input
      type="checkbox"
      id="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
  );
};

export default CheckBox;
