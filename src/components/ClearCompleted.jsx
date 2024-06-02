import React from 'react';

const ClearCompleted = ({ todos, setTodos }) => {

	const clearCompleted = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
	};

	return (
		<div>
			<button onClick={clearCompleted}>Clear completed</button>
		</div>
	);
};

export default ClearCompleted;
