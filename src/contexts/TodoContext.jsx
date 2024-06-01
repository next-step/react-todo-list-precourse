import { useState, useEffect, createContext } from "react";

let initDate = window.localStorage.getItem("todos") ? JSON.parse(window.localStorage.getItem("todos")) : [];

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState(initDate);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  return <TodoContext.Provider value={{ todoItems, setTodoItems }}>{children}</TodoContext.Provider>;
};
