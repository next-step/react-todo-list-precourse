import { useState } from "react";

const useTodoState = (initialTodos = []) => {
  const [todos, setTodos] = useState(initialTodos);
  const [nextId, setNextDom] = useState(0);

  const appendTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const updateNextId = () => {
    setNextDom((prevId) => prevId + 1);
  };

  const addTodo = (text) => {
    const newTodo = { id: nextId, text, completed: false };
    appendTodo(newTodo);
    updateNextId();
  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const changeCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return { todos, addTodo, removeTodo, changeCompletion };
};

export default useTodoState;
