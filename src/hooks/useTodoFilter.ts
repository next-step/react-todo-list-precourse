import useTodos from './useTodos';
import useFilter from './useFilter';
import { Todo } from './types';

const useTodoFilter = (initialTodos: Todo[]) => {
	const {
		todos,
		addTodo,
		handleCheckChange,
		handleClearCompleted,
		toggleAllTodos,
		deleteTodo,
		checkedCount,
		setTodos,
	} = useTodos(initialTodos);

	const { filter, handleFilterChange, filteredTodos } = useFilter(todos);

	return {
		todos,
		filteredTodos,
		filter,
		addTodo,
		handleCheckChange,
		handleFilterChange,
		handleClearCompleted,
		toggleAllTodos,
		deleteTodo,
		checkedCount,
	};
};

export default useTodoFilter;
