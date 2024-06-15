import { useState } from "react";
import Todo from "../types/Todo";
import Input from "./Input";

type TodoInputProps = {
  onAddTodo: (todo: Todo) => void;
};

const defaultTodo: Todo = {
  id: "",
  title: "",
  status: "Todo",
};

function TodoInput({ onAddTodo }: TodoInputProps) {
  const [todo, setTodo] = useState<Todo>(defaultTodo);
  return (
    <div className="todoitem">
      <Input
        value={todo.title}
        placeholder="What is next Todo? (Enter to Add)"
        onChange={v => setTodo(prev => ({ ...prev, title: v }))}
        onEndInput={() => {
          onAddTodo(todo);
          setTodo(defaultTodo);
        }}
      />
    </div>
  );
}

export default TodoInput;
