import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoOption from "./TodoOption";

function TodoTemplate() {

    return(
        <div className="container">
            <div>TO DO</div>
            <TodoInput/>
            <TodoList/>
            <TodoOption/>
        </div>
    );  
}

export default TodoTemplate;