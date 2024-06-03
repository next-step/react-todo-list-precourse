import { type FC } from "react";
import { Input, Stack, Box } from "@mui/material";
import { TodoCard } from "../organisms/TodoCard";
import { TodoResultCard } from "../organisms/TodoResultCard";

export const TodoTemplate: FC = () => {
  return (
    <Box>
      <text>Todos</text>
      <Input placeholder="What needs to be done?" />
      <TodoCard />
      <TodoResultCard />
    </Box>
  );
};
