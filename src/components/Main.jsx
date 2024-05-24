import "./styles/Main.css";
import { todoContext } from "../page/TodoList";
import { useContext, useState, useCallback } from "react";

const Main = () => {
  const [todoItems, setTodos] = useContext(todoContext);
  const [inputValue, setInputValue] = useState("");

  const currentKey = todoItems[todoItems.length - 1]
    ? todoItems[todoItems.length - 1].key + 1
    : 0;

  const newTodo = useCallback(() => {
    if (!inputValue.trim()) return;
    setTodos({ key: currentKey, content: inputValue, isDone: false });
    setInputValue("");
  }, [setTodos, inputValue]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      newTodo();
    }
  };

  return (
    <div className="Main">
      <div className="Main__container">
        <div className="Main__input">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <button onClick={newTodo}>추가</button>
        </div>
        <div className="Main__todos">
          {todoItems?.map((todo) => {
            return <h1 key={todo.key}>{todo.content}</h1>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Main;
