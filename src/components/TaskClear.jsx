import React from "react";

const TaskClear = ({ clearTodos }) => {

	return (
		<div>
			<button onClick={clearTodos}>Clear completed</button>
		</div>
	);
};

export default TaskClear;