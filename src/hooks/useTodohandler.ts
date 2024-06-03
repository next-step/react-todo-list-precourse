import { useState, useEffect } from "react";
import { type TodoItem } from "../types/todoItem";

const todoStorage = {
  load: (): TodoItem[] => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  },
  save: (todos: TodoItem[]) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },
};

export const useTodoHandlers = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");

  useEffect(() => {
    const loadedTodos = todoStorage.load();
    if (JSON.stringify(todos) !== JSON.stringify(loadedTodos)) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    todoStorage.save(todos);
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: TodoItem = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      label: newTodo,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setNewTodo("");
  };

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleToggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleUpdateLabel = (id: number, newLabel: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, label: newLabel } : todo
      )
    );
  };

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  return {
    todos,
    newTodo,
    filter,
    filteredTodos,
    setNewTodo,
    handleAddTodo,
    handleDelete,
    handleToggleCompleted,
    handleUpdateLabel,
    handleFilterChange,
    handleClearCompleted,
  };
};
