import React from "react";
import { FilterProvider } from "../context/FilterContext";
import { TodoProvider } from "../context/TodosContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoOption from "./TodoOption";

function TodoTemplate() {

    return(
        <TodoProvider>
            <FilterProvider>
                <div>TO DO</div>
                <TodoInput/>
                <TodoList/>
                <TodoOption/>
            </FilterProvider>
        </TodoProvider>
    );  
}

export default TodoTemplate;