import { type FC, useState } from "react";
import { Input, Stack, Typography, Container } from "@mui/material";
import { TodoCard } from "../organisms/TodoCard";
import { TodoResultCard } from "../organisms/TodoResultCard";
import { type TodoItem } from "../types/todoItem";

export const TodoTemplate: FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, label: "밥먹기" },
    { id: 2, label: "운동하기" },
  ]);

  const handleDelete = (id: number) => {};

  return (
    <Container>
      <Typography>Todos</Typography>
      <Input placeholder="What needs to be done?" />

      <Stack spacing={2}>
        {todos.map(({ id, label }) => (
          <TodoCard key={id} id={id} label={label} onClick={handleDelete} />
        ))}
      </Stack>

      <TodoResultCard leftItem={1} />
    </Container>
  );
};
