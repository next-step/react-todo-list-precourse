import { Todo } from "../Model/Todo";

export const setTodosToLocalStorage = (todos: Todo[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const getTodosFromLocalStorage = (): Todo[] => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};
