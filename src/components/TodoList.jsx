import React, { useContext } from "react";
import { TodoContext } from "../context/TodosContext";

function TodoList() {
    const {todos} = useContext(TodoContext);

    return(
        <div>
            {todos.map((todo, index) => (
                <div key={index}> {todo} </div>
            ))}
        </div>
    );  
}

export default TodoList;