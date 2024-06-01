import "./styles/Main.css";
import { useInputTodos, useAddTodos, getCurrentKey } from "../hooks/useAddTodos";
import { TodoContext } from "../contexts/TodoContext";
import { useContext } from "react";

const Main = () => {
  const currentKey = getCurrentKey();
  const { todoItems } = useContext(TodoContext);
  console.log(todoItems);
  const { inputValue, setInputValue } = useInputTodos();
  const { addTodo } = useAddTodos(inputValue, currentKey, setInputValue);

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainInput">
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => addTodo(e)} />
          <button onClick={(e) => addTodo(e)}>추가</button>
        </div>
        <div className="mainTodos"></div>
      </div>
    </div>
  );
};

export default Main;
