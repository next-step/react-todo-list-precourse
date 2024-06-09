import React, { useRef, useState } from "react";
import { useInputTodo } from "../../hooks/useInputTodo";
import "../../style/Input.css";

const Input = ({ todos, setTodos }) => {
  const { handleText, text, onChange } = useInputTodo({ todos, setTodos });
  const inputRef = useRef();
  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="할 일을 입력해주세요!"
        ref={inputRef}
        value={text}
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleText(inputRef.current.value);
        }}
      />
      <button onClick={() => handleText(inputRef.current.value)}>+</button>
    </div>
  );
};

export default Input;
