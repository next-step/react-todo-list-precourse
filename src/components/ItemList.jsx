import React, { useContext } from "react";
import Item from "./Item";
import { TodosContext } from "../context/TodosContext";

const ItemList = () => {
  const { todos } = useContext(TodosContext);
  return (
    <div>
      {todos?.map((todo) => (
        <Item key={todo.id} todoItem={todo} />
      ))}
    </div>
  );
};

export default ItemList;
