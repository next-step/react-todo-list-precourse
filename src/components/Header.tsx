import { Dispatch, SetStateAction, useState } from "react";
import { Button } from "./ui/Button";
import { Input } from "./ui/input";

interface HeaderProps {
  setTodos: Dispatch<SetStateAction<Todo[]>>;
}

export const Header = ({ setTodos }: HeaderProps) => {
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
    <header>
      <h1>To Do List</h1>
      <form onSubmit={(e) => e.preventDefault()} className="block todo-input">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="할 일을 입력해주세요."
        />
        <Button size="md" onClick={addTodo}>
          추가
        </Button>
      </form>
    </header>
  );
};
