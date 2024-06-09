import React, { useContext } from "react";
import { FilterContext } from "../context/FilterContext";
import { TodoContext } from "../context/TodosContext";
import TodoItem from "./TodoItem";
import "../styles/TodoList.css";

function TodoList() {
    const { todos, removeTodo, toggleTodo } = useContext(TodoContext);
    const { filter } = useContext(FilterContext);

    const filterTodos = todos.filter((todo) => {
        if (filter === "Active") {
          return !todo.done;
        } else if (filter === "Completed") {
          return todo.done;
        } else {
          return true;
        }
    });

    return(
        <div className="todo-list">
            {filterTodos.map((todo, index) => (
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