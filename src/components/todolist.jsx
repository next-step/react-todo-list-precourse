import React from 'react';
import TodoElement from './todoelement.jsx';

function TodoList() {
    return (
        <div className="todolist">
            <TodoElement/>
            <TodoElement/>
        </div>
    );
}

export default TodoList;