import { createContext } from "react";
import { useState } from "react";

export const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "머리감기", checked: true },
    { id: 2, todo: "행복하기", checked: false },
  ]);
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  );
};
