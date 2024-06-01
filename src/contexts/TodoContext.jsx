import { useState, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState([]);

  return <TodoContext.Provider value={{ todoItems, setTodoItems }}>{children}</TodoContext.Provider>;
};
