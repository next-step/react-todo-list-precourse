import React from 'react';
import TodoElement from './todoelement.jsx';

function makelist(todos) {
    return (
        todos.map(function(element, index) {
            return ( <TodoElement todo={element} key={index}/> )
        })
    )
}

function TodoList(props) {
    return (
        <div className="todolist">
            { makelist(props.todos) }
        </div>
    );
}

export default TodoList;