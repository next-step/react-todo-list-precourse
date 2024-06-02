import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (context === undefined) {
    throw new Error("TodoProvider를 반드시 사용해야합니다.");
  }
  return context;
};
