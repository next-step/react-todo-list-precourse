import React, { useState } from 'react';
import ToDoInput from './components/ToDoInput';
import ToDoList from './components/ToDoList';
import FilterButtons from './components/FilterButtons';
import TaskCounter from './components/TaskCounter';

const App = () => {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		console.log("Adding todo:", text); // 디버깅용 로그 추가
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


	return (
		<div>
			<h1>To-Do List</h1>
			<ToDoInput addTodo={addTodo} />
			<ToDoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
			<FilterButtons setFilter={setFilter} />
			<TaskCounter todos={todos} />
			<button onClick={clearTodos}>모두 지우기</button>
		</div>
	);
};

export default App;
