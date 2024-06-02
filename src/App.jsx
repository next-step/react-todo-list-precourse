import React, { useState, useEffect } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import FilterButtons from './components/FilterButtons';
import ToDoCounter from './components/TodoCounter';
import ClearCompleted from './components/ClearCompleted';

const App = () => {
	const [todos, setTodos] = useState([]);
	const [filter, setFilter] = useState('all');

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		if (storedTodos) {
			setTodos(storedTodos);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	const addTodo = (text) => {
		const newTodo = { text, completed: false };
		setTodos([...todos, newTodo]);
	};

	const toggleComplete = (index) => {
		const newTodos = [...todos];
		newTodos[index].completed = !newTodos[index].completed;
		setTodos(newTodos);
	};

	const deleteTodo = (index) => {
		const newTodos = todos.filter((_, i) => i !== index);
		setTodos(newTodos);
	};

	const clearTodos = () => {
		setTodos([]);
	};

	const clearCompleted = () => {
		const newTodos = todos.filter(todo => !todo.completed);
		setTodos(newTodos);
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
			<h1>To-Do List</h1>
			<ToDoInput addTodo={addTodo} />
			<ToDoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
			<ToDoCounter todos={todos} />
			<FilterButtons setFilter={setFilter} />
			<ClearCompleted todos={todos} setTodos={setTodos} />
		</div>
	);
};

export default App;
