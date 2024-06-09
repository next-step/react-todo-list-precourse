import React from 'react';
import TodoElement from './todoelement.jsx';

function makelist(todos, deleteTodo) {
    return (
        todos.map(function(element, index) {
            return ( <TodoElement todo={element} key={index} deleteTodo={deleteTodo}/> )
        })
    )
}

function TodoList(props) {
    return (
        <div className="todolist">
            { makelist(props.todos, props.deleteTodo) }
        </div>
    );
}

export default TodoList;