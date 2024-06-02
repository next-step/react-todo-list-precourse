import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (todo) => {
		setTodos([...todos, todo]);
	};

	return (
		<div>
			<h1>To-Do List</h1>
			<ToDoInput addTodo={addTodo} />
			<ToDoList todos={todos} />
		</div>
	);
};

export default App;
