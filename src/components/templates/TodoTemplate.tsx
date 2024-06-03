import { type FC, useState, useEffect } from "react";
import { Input, Stack, Typography, Container, Button } from "@mui/material";
import { TodoCard } from "../organisms/TodoCard";
import { TodoResultCard } from "../organisms/TodoResultCard";
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

export const TodoTemplate: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    const loadedTodos = todoStorage.load();
    if (JSON.stringify(todos) !== JSON.stringify(loadedTodos)) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    todoStorage.save(todos);
  }, [todos]);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
  };

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

  const handleToggleCompleted = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Active") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const handleClearCompleted = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));
  };

  return (
    <Container>
      <Typography variant="h4">Todos</Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Input
          placeholder="What needs to be done?"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") handleAddTodo();
          }}
        />
        <Button onClick={handleAddTodo} variant="contained">
          Add
        </Button>
      </Stack>

      <Stack mt={2}>
        {filteredTodos.map(({ id, label, completed }) => (
          <TodoCard
            key={id}
            id={id}
            label={label}
            completed={completed}
            onClick={handleDelete}
            onToggleCompleted={handleToggleCompleted}
          />
        ))}
      </Stack>

      <TodoResultCard
        totalItems={todos.length}
        leftItem={todos.filter((todo) => !todo.completed).length}
        activeFilter={filter}
        onFilterChange={handleFilterChange}
        onClearAll={handleClearCompleted}
      />
    </Container>
  );
};
