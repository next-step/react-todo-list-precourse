import React from "react";
import TodoThing from "./TodoThing";
import "./List.css"
const List = ({TodoList, onRemove}) => {
    return <div className="List">
        <h3>List</h3>
        <div className="List">
      {TodoList.map((todo) => (
        <TodoThing key={todo.id} todo={todo} onRemove={onRemove} />
      ))}
    </div>


    </div>
};

export default List;