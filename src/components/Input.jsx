import { useContext, useRef, useState } from "react";
import "../styles/Input.css";
import { TodosContext } from "../context/TodosContext";

const Input = () => {
  const [todoText, setTodoText] = useState("");
  const { todos, setTodos } = useContext(TodosContext);
  const nextId = useRef(1);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([
        { id: nextId.current, todo: todoText, checked: false },
        ...todos,
      ]);
      nextId.current++;
      setTodoText("");
    }
  };
  return (
    <input
      className="inputbox"
      type="text"
      placeholder="일정을 입력하세요."
      value={todoText}
      onChange={(e) => setTodoText(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default Input;
