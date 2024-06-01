import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

const useDeleteTodos = () => {
  const { setTodoItems } = useContext(TodoContext);
  const deleteTodo = (Key) => {
    setTodoItems((prevTodos) => prevTodos.filter((todo) => todo.key !== Key));
  };
  return deleteTodo;
};

export { useDeleteTodos };
