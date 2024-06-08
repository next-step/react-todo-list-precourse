import { Dispatch, useState } from "react";
import { useTodoActions } from "../../hooks/useTodoActions";
import { TodoFormButton } from "./TodoFormButton";
import { TodoFormInput } from "./TodoFormInput";

const handleAddTodoClick = (
  input: string,
  addTodo: (text: string) => void,
  setInput: Dispatch<React.SetStateAction<string>>,
) => {
  if (input.trim()) addTodo(input);
  setInput("");
};

export const TodoForm = () => {
  const [input, setInput] = useState<string>("");
  const { addTodo } = useTodoActions();

  const onClick = () => handleAddTodoClick(input, addTodo, setInput);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <TodoFormInput input={input} setInput={setInput} />
      <TodoFormButton onClick={onClick} />
    </form>
  );
};
