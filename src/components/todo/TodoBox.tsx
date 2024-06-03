import Todo from '../../models/Todo';
import TodoFilterEnum from '../../constants/TodoFilterEnum';
import { useCallback } from 'react';
import TodoItem from './TodoItem';
import useTodoFilter from '../../hooks/useTodoFilter';
import {TodoRepository} from '../../utils/Types';

type TodoBoxProps = {
  todos: TodoRepository,
  filter: TodoFilterEnum,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void,
};
const TodoBox = ({ todos, filter, removeTodo, handleToggleCompletion }: TodoBoxProps) => {
  const { getAllTodos, getActiveTodos, getCompletedTodos } = useTodoFilter(todos);
  const getFilteredTodos = useCallback(() => {
    if(filter === TodoFilterEnum.TODO_FILTER_ALL) return getAllTodos();
    return filter === TodoFilterEnum.TODO_FILTER_ACTIVE ? getActiveTodos() : getCompletedTodos();
  }, [todos, filter]);
  return getFilteredTodos().map((todo: Todo) => {
    const key = 'todo-id-' + todo.id;
    return <TodoItem todo={todo} key={key} removeTodo={removeTodo} handleToggleCompletion={handleToggleCompletion}/>;
  });
};
export default TodoBox;
