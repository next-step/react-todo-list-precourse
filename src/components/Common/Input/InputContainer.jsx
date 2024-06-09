import React from "react";
import "./InputContainer.css";

const InputContainer = ({ newTodo, setNewTodo, handleEnterPress, addTodo }) => {
  return (
    <div className="inputContainer">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleEnterPress}
        placeholder="이것이 오늘의 할 일"
        className="todoInputBox"
      />
      <button className="addTodoBtn" onClick={addTodo}>
        추가!
      </button>
    </div>
  );
};

export default InputContainer;
