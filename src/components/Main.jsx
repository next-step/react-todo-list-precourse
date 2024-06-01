import "./styles/Main.css";
import { useInputTodos, useAddTodos, getCurrentKey } from "../hooks/useAddTodos";
import TodoContainer from "./Main/TodoContainer";

const Main = () => {
  const currentKey = getCurrentKey();
  const { inputValue, setInputValue } = useInputTodos();
  const { addTodo } = useAddTodos(inputValue, currentKey, setInputValue);

  return (
    <div className="main">
      <div className="mainContainer">
        <div className="mainInput">
          <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => addTodo(e)} />
          <button onClick={(e) => addTodo(e)}>추가</button>
        </div>
        <TodoContainer />
      </div>
    </div>
  );
};

export default Main;
