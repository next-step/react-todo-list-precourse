import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		const newTodo = { text, completed: false };
		setTodos([...todos, newTodo]);
	};

	const toggleComplete = (index) => {

	};

	const deleteTodo = (index) => {

	};

	return (
		<div>
			<h1>To-Do List</h1>
			<ToDoInput addTodo={addTodo} />
			<ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
		</div>
	);
};

export default App;
