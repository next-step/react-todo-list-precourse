import React from "react";
import TodoThing from "./TodoThing";
import "./List.css"

const List = ({TodoList, onRemove, checkPush}) => {
    return <div className="List">
        <h3>List</h3>
        <div className="List-wrapper">
      {TodoList.map((todo) => (
        <TodoThing key={todo.id} todo={todo} onRemove={onRemove} checkPush = {checkPush}/>
      ))}
    </div>


    </div>
};

export default List;