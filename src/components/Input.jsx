import { useContext, useState } from "react";
import "../styles/Input.css";
// import { TodosContext } from "../context/todosContext";

const Input = () => {
  const [todoText, setTodoText] = useState("");
  return (
    <div>
      <input
        className="inputbox"
        type="text"
        placeholder="일정을 입력하세요."
        onChange={(e) => setTodoText(e.target.value)}
        // onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default Input;
