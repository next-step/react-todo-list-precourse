import React from "react";
import "../styles/Checkbox.css";

const Checkbox = ({ checked, onChange }) => {
    return (
      <input
        type="checkbox"
        className="ui-checkbox"
        checked={checked}
        onChange={onChange}
      />
    );
};
  
export default Checkbox;