import React from 'react';

const ToDoCounter = ({ todos }) => {
	const activeCount = todos.filter(todo => !todo.completed).length;

	return (
		<div>
			<span>{activeCount} item left</span>
		</div>
	);
};

export default ToDoCounter;
