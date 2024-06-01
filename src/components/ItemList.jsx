import React, { useContext } from "react";
import Item from "./Item";
import { TodosContext } from "../context/TodosContext";
import { FilterContext } from "../context/FilterContext";

const ItemList = () => {
  const { todos } = useContext(TodosContext);
  const { viewState } = useContext(FilterContext);
  return (
    <div>
      {todos?.map((todo) => {
        if (viewState === "All") return <Item key={todo.id} todoItem={todo} />;
        else if (viewState === "Active") {
          if (!todo.checked) {
            return <Item key={todo.id} todoItem={todo} />;
          }
        } else {
          if (todo.checked) {
            return <Item key={todo.id} todoItem={todo} />;
          }
        }
      })}
    </div>
  );
};

export default ItemList;
