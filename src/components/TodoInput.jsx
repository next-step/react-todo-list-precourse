import React, { useState } from 'react';

function TodoInput({ addTodo }) {
    const [newTodo, setNewTodo] = useState('');

    const handleAddTodo = () => {
        if (newTodo.trim() === '') return;
        addTodo(newTodo);
        setNewTodo('');
    };

    return (
        <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
            placeholder="What needs to be done?"
            className="todo-input"
        />
    );
}

export default TodoInput;
