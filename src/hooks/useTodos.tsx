import { Dispatch, SetStateAction } from "react";

const addTodo = (text: string, setTodos: Dispatch<SetStateAction<Todo[]>>) => {
  setTodos((todo) => [...todo, { text, done: false }]);
};

const toggleTodo = (
  id: number,
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>,
) => {
  const newTodos = [...todos];
  newTodos[id].done = !newTodos[id].done;
  setTodos(newTodos);
};

const removeTodo = (
  id: number,
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>,
) => {
  const newTodos = todos.filter((_, index) => index !== id);
  setTodos(newTodos);
};

const removeDoneTodo = (
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>,
) => {
  const newTodos = todos.filter((todo) => !todo.done);
  setTodos(newTodos);
};

export { addTodo, toggleTodo, removeTodo, removeDoneTodo };
