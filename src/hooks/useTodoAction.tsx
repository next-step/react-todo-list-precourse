import { useTodos } from "./useTodo";

export const useTodoAction = () => {
  const { dispatch } = useTodos();

  const addTodo = (text: string) => {
    if (!text.trim()) return;
    dispatch({ type: "ADD_TODO", text });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const removeTodo = (id: number) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const removeDoneTodo = () => {
    dispatch({ type: "REMOVE_DONE_TODOS" });
  };
  return { addTodo, toggleTodo, removeTodo, removeDoneTodo };
};
