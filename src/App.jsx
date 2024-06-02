import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import FilterButtons from './components/FilterButtons';
import TaskCounter from './components/TaskCounter';
import TaskClear from './components/TaskClear';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');

	const addTodo = (text) => {
		const newTodo = { text, completed: false };
		setTodos([...todos, newTodo]);
	};

	const toggleComplete = (index) => {

	};

	const deleteTodo = (index) => {

	};

	const clearTodos = () => {

	};

	const filteredTodos = todos.filter((todo) => {
		if (filter === 'all') {
			return true;
		} else if (filter === 'active') {
			return !todo.completed;
		} else if (filter === 'completed') {
			return todo.completed;
		}
		return true;
	});

	return (
		<div>
			<h1>todos</h1>
			<ToDoInput addTodo={addTodo} />
			<ToDoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
			<TaskCounter todos={todos} />
			<FilterButtons setFilter={setFilter} />
			<TaskClear clearTodos={clearTodos} />
		</div>
	);
};

export default App;
