import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { addTodo } from "../hooks/useTodos";

interface TodoInputProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoInput = ({ setTodos }: TodoInputProps) => {
  const [input, setInput] = useState<string>("");

  const handleAddTodoClick = () => {
    if (input.trim()) addTodo(input.trim(), setTodos);
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
