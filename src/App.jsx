import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<ToDoInput addTodo={addTodo} />
		</div>
	);
};

export default App;
