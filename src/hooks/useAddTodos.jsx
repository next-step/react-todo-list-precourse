import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const getCurrentKey = () => {
  const { todoItems } = useContext(TodoContext);
  const currentKey = todoItems[todoItems.length - 1] ? todoItems[todoItems.length - 1].key + 1 : 0;
  return currentKey;
};

const useInputTodos = () => {
  const [inputValue, setInputValue] = useState("");
  return { inputValue, setInputValue };
};

const useAddTodos = (inputValue, currentKey, setInputValue) => {
  const { setTodoItems } = useContext(TodoContext);
  const addTodo = (event) => {
    if ((event.type === "click" || event.key === "Enter") && inputValue.trim() !== "") {
      setTodoItems((prevTodo) => [...prevTodo, { key: currentKey, content: inputValue, done: false }]);
      setInputValue("");
      event.preventDefault();
    }
  };

  return { addTodo };
};

export { useInputTodos, useAddTodos, getCurrentKey };
