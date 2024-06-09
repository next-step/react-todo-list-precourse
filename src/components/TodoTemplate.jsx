import React from "react";
import { TodoProvider } from "../context/TodosContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoOption from "./TodoOption";

function TodoTemplate() {

    return(
        <TodoProvider>
            <div>TO DO</div>
            <TodoInput/>
            <TodoList/>
            <TodoOption/>
        </TodoProvider>
    );  
}

export default TodoTemplate;