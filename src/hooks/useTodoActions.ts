import { Dispatch } from "react";
import { useTodos } from "../contexts/todos/useTodos";

const addTodo = (dispatch: Dispatch<TodosAction>, text: string) => {
  if (!text.trim()) return;
  dispatch({ type: "ADD_TODO", text });
};

const toggleTodo = (dispatch: Dispatch<TodosAction>, id: number) => {
  dispatch({ type: "TOGGLE_TODO", id });
};

const removeTodo = (dispatch: Dispatch<TodosAction>, id: number) => {
  dispatch({ type: "REMOVE_TODO", id });
};

const removeDoneTodos = (dispatch: Dispatch<TodosAction>) => {
  dispatch({ type: "REMOVE_DONE_TODOS" });
};

export const useTodoActions = () => {
  const { dispatch } = useTodos();

  return {
    addTodo: (text: string) => addTodo(dispatch, text),
    toggleTodo: (id: number) => toggleTodo(dispatch, id),
    removeTodo: (id: number) => removeTodo(dispatch, id),
    removeDoneTodos: () => removeDoneTodos(dispatch),
  };
};
