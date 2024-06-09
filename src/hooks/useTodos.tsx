import { useEffect, useState } from "react";
import { FilterStateType, Todo } from "../Model/Todo";
import { filterTodos } from "../utils/todo";
import {
  getTodosFromLocalStorage,
  setTodosToLocalStorage,
} from "../utils/localstorage";

const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filterState, setFilterState] = useState<FilterStateType>("all");
  const filteredTodos = filterTodos(todos, filterState);
  const leaseTodos = filteredTodos.length;

  useEffect(() => {
    const savedTodos = getTodosFromLocalStorage();
    if (savedTodos) setTodos(savedTodos);
  }, []);

  useEffect(() => {
    if (todos.length === 0) return;
    setTodosToLocalStorage(todos);
  }, [todos]);

  const setIsCompletedFromId = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) return { ...todo, isCompleted: !todo.isCompleted };
        return todo;
      })
    );
  };

  const deleteTodoFromId = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return {
    todos,
    setTodos,
    filterState,
    setFilterState,
    filteredTodos,
    leaseTodos,
    setIsCompletedFromId,
    deleteTodoFromId,
  };
};

export default useTodos;
