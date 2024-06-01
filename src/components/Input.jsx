import { useContext, useState } from "react";
import "../styles/Input.css";
import { TodosContext } from "../context/TodosContext";

const Input = () => {
  const [todoText, setTodoText] = useState("");
  const { todos, setTodos } = useContext(TodosContext);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setTodos([{ todo: todoText, checked: false }, ...todos]);
      setTodoText("");
    }
  };
  return (
    <div>
      <input
        className="inputbox"
        type="text"
        placeholder="일정을 입력하세요."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
