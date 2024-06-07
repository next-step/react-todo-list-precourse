import { useState } from "react";
import { useTodoActions } from "../../hooks/useTodoActions";
import { TodoFormButton } from "./TodoFormButton";
import { TodoFormInput } from "./TodoFormInput";

export const TodoForm = () => {
  const [input, setInput] = useState<string>("");
  const { addTodo } = useTodoActions();

  const handleAddTodoClick = () => {
    if (input.trim()) addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TodoFormInput input={input} setInput={setInput} />
      <TodoFormButton onClick={handleAddTodoClick} />
    </form>
  );
};
