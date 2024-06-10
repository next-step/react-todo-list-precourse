import React from "react";

function TaskInput({ value, onChange, onKeyPress }) {
  return (
    <input
      type="text"
      placeholder="할 일을 입력해보자..."
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}

export default TaskInput;