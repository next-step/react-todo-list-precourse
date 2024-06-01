import React from "react";
import TodoThing from "./TodoThing";
import "./List.css"
const List = ({TodoList}) => {
    return <div className="List">
        <h3>List</h3>
        <div className="List">
      {TodoList.map((todo) => (
        <TodoThing key={todo.id} todo={todo} />
      ))}
    </div>


    </div>
};

export default List;