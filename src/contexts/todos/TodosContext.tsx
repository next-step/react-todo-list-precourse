import { createContext, Dispatch } from "react";

interface TodosContextType {
  todos: Todo[];
  dispatch: Dispatch<TodosAction>;
}

export const TodosContext = createContext<TodosContextType | undefined>(
  undefined,
);
