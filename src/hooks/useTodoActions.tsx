import { useTodos } from "../contexts/todos/useTodos";

export const useTodoActions = () => {
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

  const removeDoneTodos = () => {
    dispatch({ type: "REMOVE_DONE_TODOS" });
  };

  return { addTodo, toggleTodo, removeTodo, removeDoneTodos };
};
