import React from 'react';

const TaskCounter = ({ todos }) => {
	const activeCount = todos.filter(todo => !todo.completed).length;

	return (
		<div>
			<span>{activeCount} item left</span>
		</div>
	);
};

export default TaskCounter;
