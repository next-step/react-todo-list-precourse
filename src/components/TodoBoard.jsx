import React from "react";
import TodoItem from "./TodoItem";

function TodoBoard({ todoList, deleteItem, toggleItemCompletion }) {
    return (
        <div>
            <h1>Todo List</h1>
            {todoList.map((item, index) => (
                <TodoItem
                    key={index}
                    item={item}
                    index={index}
                    deleteItem={deleteItem}
                    toggleItemCompletion={toggleItemCompletion}
                />
            ))}
        </div>
    );
}

export default TodoBoard;