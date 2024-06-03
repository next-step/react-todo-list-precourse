import { type FC, useState } from "react";
import { Input, Stack, Typography, Container, Button } from "@mui/material";
import { TodoCard } from "../organisms/TodoCard";
import { TodoResultCard } from "../organisms/TodoResultCard";
import { type TodoItem } from "../types/todoItem";

export const TodoTemplate: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, label: "밥먹기", completed: false },
    { id: 2, label: "운동하기", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

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
        leftItem={todos.filter((todo) => !todo.completed).length}
        activeFilter={filter}
        onFilterChange={handleFilterChange}
      />
    </Container>
  );
};
