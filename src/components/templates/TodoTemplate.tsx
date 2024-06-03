import { type FC, useState } from "react";
import { Input, Stack, Typography, Container, Button } from "@mui/material";
import { TodoCard } from "../organisms/TodoCard";
import { TodoResultCard } from "../organisms/TodoResultCard";
import { type TodoItem } from "../types/todoItem";

export const TodoTemplate: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, label: "밥먹기" },
    { id: 2, label: "운동하기" },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleDelete = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    const newTodoItem: TodoItem = {
      id: todos.length ? todos[todos.length - 1].id + 1 : 1,
      label: newTodo,
    };
    setTodos((prevTodos) => [...prevTodos, newTodoItem]);
    setNewTodo("");
  };

  return (
    <Container>
      <Typography>Todos</Typography>
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

      <Stack>
        {todos.map(({ id, label }) => (
          <TodoCard key={id} id={id} label={label} onClick={handleDelete} />
        ))}
      </Stack>

      <TodoResultCard leftItem={1} />
    </Container>
  );
};
