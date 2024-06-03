import React from 'react';
import './ClearCompleted.css';

const ClearCompleted = ({ todos, setTodos }) => {
	const clearCompleted = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	return (
		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	);
};

export default ClearCompleted;
