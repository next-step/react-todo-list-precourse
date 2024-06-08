import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import TodoFilters from './TodoFilters';

function Body({
    todos, addTodo, toggleComplete, deleteTodo,
    activeCount, filter, clearCompleted, changeFilter
}) {
    return (
        <div className="container">
            <section className="main">
                <TodoForm addTodo={addTodo} />
                <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
                <div className="footer">
                    <span className="todo-count"><strong>{activeCount}</strong> items left</span>
                    <TodoFilters currentFilter={filter} changeFilter={changeFilter} />
                    <a href="#/" className="clear-completed" onClick={(e) => { e.preventDefault(); clearCompleted(); }}>Clear completed</a>
                </div>
            </section>
        </div>
    );
}

export default Body;
