import React from 'react';
import "../styles/TodoFooter.css";

const TodoFooter = ({ todosCount, filter, setFilter, clearCompleted }) => {
    return (
        <div className="todo-footer">
          <span>{todosCount} items left!</span>
          <div>
            <button onClick={() => setFilter('all')} className="action-btn">All</button>
            <button onClick={() => setFilter('active')} className="action-btn">Active</button>
            <button onClick={() => setFilter('completed')} className="action-btn">Completed</button>
          </div>
          <button onClick={clearCompleted} className="clear-btn">Clear completed</button>
        </div>
    );
}

export default TodoFooter;