import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";

interface TodoInputProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const TodoInput = ({ setTodos }: TodoInputProps) => {
  const [input, setInput] = useState<string>("");

  const createTodo = (text: string) => ({
    text,
    done: false,
  });

  const addTodo = () => {
    const inputValue = input?.trim();

    if (!inputValue) {
      setInput("");
      return;
    }

    setTodos((todo) => [...todo, createTodo(inputValue)]);
    setInput("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="block">
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="할 일을 입력해주세요."
      />
      <Button size="md" onClick={addTodo}>
        추가
      </Button>
    </form>
  );
};
