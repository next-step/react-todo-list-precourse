import React from 'react';

function TodoFilter({ filter, setFilter }) {
    return (
        <div className="todo-filter">
            <button onClick={() => setFilter('all')} className={filter === 'all' ? 'selected' : ''}>
                All
            </button>
            <button onClick={() => setFilter('active')} className={filter === 'active' ? 'selected' : ''}>
                Active
            </button>
            <button onClick={() => setFilter('completed')} className={filter === 'completed' ? 'selected' : ''}>
                Completed
            </button>
        </div>
    );
}

export default TodoFilter;
