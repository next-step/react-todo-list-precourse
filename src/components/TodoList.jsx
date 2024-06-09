import React, { useContext } from "react";
import { TodoContext } from "../context/TodosContext";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todos, removeTodo, toggleTodo } = useContext(TodoContext);

    return(
        <div>
            {todos.map((todo, index) => (
                <TodoItem 
                 key={index}
                 todo={todo} 
                 index={index} 
                 removeTodo={removeTodo}
                 toggleTodo={toggleTodo}
                />
            ))}
        </div>
    );  
}

export default TodoList;