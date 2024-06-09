import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoOption from "./TodoOption";
import "../styles/TodoTemplate.css";

function TodoTemplate() {

    return(
        <div className="container">
            <div className="title">TO DO</div>
            <TodoInput/>
            <TodoList/>
            <TodoOption/>
        </div>
    );  
}

export default TodoTemplate;