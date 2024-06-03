import { type FC } from "react";
import { Input, Stack, Typography, Container, Button } from "@mui/material";
import { TodoCard } from "../organisms/TodoCard";
import { TodoResultCard } from "../organisms/TodoResultCard";
import { useTodoHandlers } from "../../hooks/useTodohandler";

export const TodoTemplate: FC = () => {
  const {
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
  } = useTodoHandlers();

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
            onUpdateLabel={handleUpdateLabel}
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
