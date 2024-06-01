import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useDoneTodos = () => {
  const { setTodoItems } = useContext(TodoContext);
  const doneTodo = (Key) => {
    setTodoItems((prevTodos) => prevTodos.map((todo) => (todo.key === Key ? { ...todo, done: !todo.done } : todo)));
  };
  return doneTodo;
};

export { useDoneTodos };
