import React from 'react';

const ToDoList = ({ todos, toggleComplete, deleteTodo }) => {
	return (
		<ul>
			{todos.map((todo, index) => (
				<li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
					<input
						type="checkbox"
						checked={todo.completed}
						onChange={() => toggleComplete(index)}
					/>
					{todo.text}
					<button onClick={() => deleteTodo(index)}>Delete</button>
				</li>
			))}
		</ul>
	);
};

export default ToDoList;
