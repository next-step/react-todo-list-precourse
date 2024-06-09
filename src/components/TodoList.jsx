import React, { useContext } from "react";
import { TodoContext } from "../context/TodosContext";

function TodoList() {
    const {todos, removeTodo} = useContext(TodoContext);

    return(
        <div>
            {todos.map((todo, index) => (
                <div key={index}> 
                    {todo}
                    <button onClick={() => removeTodo(index)}>X</button> 
                </div>
            ))}
        </div>
    );  
}

export default TodoList;