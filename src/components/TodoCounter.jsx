import React from 'react';
import './TodoCounter.css';

const TodoCounter = ({ todos }) => {
	const activeCount = todos.filter(todo => !todo.completed).length;

	return (
		<span className="todo-count">
			<strong>{activeCount}</strong> item{activeCount !== 1 ? 's' : ''} left
		</span>
	);
};

export default TodoCounter;
