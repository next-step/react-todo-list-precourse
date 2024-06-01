import React, { useContext } from "react";
import "../styles/Item.css";
import { TodosContext } from "../context/TodosContext";

const Item = ({ todoItem }) => {
  const { id, todo, checked } = todoItem;
  const { todos, setTodos } = useContext(TodosContext);
  const changeComplete = () => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !checked } : todo
      )
    );
  };
  return (
    <div className="item">
      <input type="checkbox" checked={checked} onChange={changeComplete} />
      <span className={`item__text ${checked ? "checked" : ""}`}>{todo}</span>
    </div>
  );
};

export default Item;
