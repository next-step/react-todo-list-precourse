import { useState } from "react";
import { Todo } from "../../Modules/Todo";
import "./InputForm.css";

interface InputFormProps {
  setTodos: (newTodo: Todo) => void;
}

const InputForm = ({ setTodos }: InputFormProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newTodo: Todo = { text, status: "active" };
    setTodos(newTodo);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} id="InputForm">
      <input
        type="text"
        placeholder="What need to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
};

export default InputForm;
