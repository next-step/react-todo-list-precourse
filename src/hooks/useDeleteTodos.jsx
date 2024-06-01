import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useDeleteTodos = () => {
  const { setTodoItems } = useContext(TodoContext);
  const deleteTodo = (Key) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.key !== Key));
  };
  return deleteTodo;
};

const useAllTodoDelete = () => {
  const { setTodoItems } = useContext(TodoContext);
  const allTodoDelete = () => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.done === false));
  };
  return allTodoDelete;
};

export { useDeleteTodos, useAllTodoDelete };
