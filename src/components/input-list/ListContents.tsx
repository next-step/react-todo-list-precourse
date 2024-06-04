import React, { useState } from 'react';
import TodoContents from '../todo-list/TodoContents';
import './ListContents.css';
import Footer from '../footer/Footer';
import { ListContentsProps } from './types';
import useTodoFilter from '../../hooks/useTodoFilter';
import InputSection from '../input-section/InputSection';

const ListContents: React.FC<ListContentsProps> = () => {
	const [inputValue, setInputValue] = useState<string>('');
	const {
		todos,
		filteredTodos,
		addTodo,
		handleCheckChange,
		handleFilterChange,
		handleClearCompleted,
		toggleAllTodos,
		checkedCount,
		deleteTodo,
	} = useTodoFilter([]);

	const handleToggleAll = () => {
		toggleAllTodos(true);
	};

	return (
		<>
			<InputSection
				inputValue={inputValue}
				setInputValue={setInputValue}
				addTodo={addTodo}
				handleToggleAll={handleToggleAll}
			/>
			{filteredTodos.map((todo, index) => (
				<TodoContents
					key={index}
					text={todo.text}
					isChecked={todo.isChecked}
					onCheckChange={(isChecked) => handleCheckChange(index, isChecked)}
					onDelete={() => deleteTodo(index)}
				/>
			))}
			{todos.length > 0 && (
				<Footer
					number={todos.length - checkedCount}
					onFilterChange={handleFilterChange}
					onClearCompleted={handleClearCompleted}
				/>
			)}
		</>
	);
};

export default ListContents;
