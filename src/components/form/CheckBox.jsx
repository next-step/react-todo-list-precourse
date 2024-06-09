import { checkTodo } from "../../util/todoUtilFunc";
import "../../style/CheckBox.css";
const CheckBox = ({ className, checked, handleCheck }) => {
  return (
    <div className={className}>
      <input
        id={className}
        type="checkbox"
        checked={checked}
        onChange={handleCheck}
      />
      <label htmlFor={className} className="material-icons">
        {checked ? "check_box" : "check_box_outline_blank"}
      </label>
    </div>
  );
};
export default CheckBox;
