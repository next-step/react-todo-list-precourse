import { useState, useCallback, useEffect } from "react";
import { addTodo } from "../util/todoUtilFunc";

export const useInputTodo = ({ todos, setTodos }) => {
  const [text, setText] = useState("");

  const handleText = useCallback(
    (text) => {
      if (text === "") return;
      addTodo(todos, setTodos, text);
      setText("");
    },
    [todos, setTodos]
  );
  const onChange = (e) => {
    setText(e.target.value);
  };

  return { handleText, onChange, text };
};
