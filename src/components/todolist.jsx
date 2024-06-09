import React from 'react';
import TodoElement from './todoelement.jsx';

function makelist(elementProps) {
    return (
        elementProps.todos.map(function(element) {
            return ( <TodoElement todo={element} deleteTodo={elementProps.deleteTodo} changeCompleted={elementProps.changeCompleted}/> )
        })
    )
}

function TodoList(props) {
    return (
        <div className="todolist">
            { makelist(props) }
        </div>
    );
}

export default TodoList;