import { ReactNode, useEffect, useReducer } from "react";
import { TodosContext } from "./TodosContext";
import { todosReducer } from "./todosReducer";

export const TodosProvider = ({ children }: { children: ReactNode }) => {
  const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
  const [todos, dispatch] = useReducer(todosReducer, storedTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodosContext.Provider>
  );
};
