import React, { useContext } from "react";
import "../styles/CheckedDelete.css";
import { TodosContext } from "../context/TodosContext";

const CheckedDelete = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const deleteComplete = () => {
    setTodos(todos.filter((todo) => !todo.checked));
  };
  return (
    <button className="btn__delete" onClick={deleteComplete}>
      완료한 일 삭제
    </button>
  );
};

export default CheckedDelete;
