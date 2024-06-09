import React from 'react';
import TodoElement from './todoelement.jsx';

function makelist(elementProps) {
    var list = [...elementProps.todos];

    if (elementProps.filter !== "All") {
        const target = (elementProps.filter === "Active" ? true : false);
        list = list.filter((todo) => todo.isCompleted !== target);
    }
    return (
        list.map(function(element) {
            return ( <TodoElement todo={element} deleteTodo={elementProps.deleteTodo} changeCompleted={elementProps.changeCompleted}/> )
        })
    );
}

function TodoList(props) {
    return (
        <div className="todolist">
            { makelist(props) }
        </div>
    );
}

export default TodoList;