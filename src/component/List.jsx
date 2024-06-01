import React from "react";
import TodoThing from "./TodoThing";
import "./List.css"

const List = ({TodoList, onRemove, checkpush}) => {
    return <div className="List">
        <h3>List</h3>
        <div className="List-wrapper">
      {TodoList.map((todo) => (
        <TodoThing key={todo.id} todo={todo} onRemove={onRemove} checkpush = {checkpush}/>
      ))}
    </div>


    </div>
};

export default List;