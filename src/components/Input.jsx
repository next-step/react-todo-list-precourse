import React from "react";

function Input({ value, onChange, onKeyPress }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
      placeholder="What needs to be done? &#128149;"
      id="todoInput"
    />
  );
}

export default Input;
