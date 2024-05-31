import { useState, useRef } from "react";

export function useTodoState(initialTodos = []) {
  const [todos, setTodos] = useState(initialTodos);
  const nextId = useRef(1);
  const onInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    if (text !== "") {
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }
  };
  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onTouched = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo)));
  };
  const itemLeft = todos.filter((todo) => !todo.checked);
  return { todos, onInsert, onRemove, onTouched, itemLeft };
}
