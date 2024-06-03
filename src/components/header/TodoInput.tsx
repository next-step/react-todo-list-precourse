import { useState } from "react";
import { useTodoActions } from "../../hooks/useTodoActions";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export const TodoInput = () => {
  const [input, setInput] = useState<string>("");
  const { addTodo } = useTodoActions();

  const handleAddTodoClick = () => {
    if (input.trim()) addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력해주세요."
      />
      <Button size="md" onClick={handleAddTodoClick}>
        추가
      </Button>
    </form>
  );
};
