import { useState } from 'react';
import { Todo } from './types';

const useTodos = (initialTodos: Todo[]) => {
	const [todos, setTodos] = useState<Todo[]>(initialTodos);

	const addTodo = (value: string) => {
		if (value.trim() === '') return;
		setTodos([...todos, { text: value, isChecked: false }]);
	};

	const handleCheckChange = (index: number, isChecked: boolean) => {
		const updatedTodos = [...todos];
		updatedTodos[index].isChecked = isChecked;
		setTodos(updatedTodos);
	};

	const handleClearCompleted = () => {
		const activeTodos = todos.filter((todo) => !todo.isChecked);
		setTodos(activeTodos);
	};

	const toggleAllTodos = (isChecked: boolean) => {
		const allChecked = todos.every((todo) => todo.isChecked);
		const updatedTodos = todos.map((todo) => ({
			...todo,
			isChecked: !allChecked,
		}));
		setTodos(updatedTodos);
	};

	const deleteTodo = (index: number) => {
		const updatedTodos = todos.filter((_, i) => i !== index);
		setTodos(updatedTodos);
	};

	const checkedCount = todos.filter((todo) => todo.isChecked).length;

	return {
		todos,
		addTodo,
		handleCheckChange,
		handleClearCompleted,
		toggleAllTodos,
		deleteTodo,
		checkedCount,
		setTodos,
	};
};

export default useTodos;
