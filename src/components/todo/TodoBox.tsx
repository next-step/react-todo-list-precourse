import Todo from '../../models/Todo.ts';
import TodoFilterEnum from '../../constants/TodoFilterEnum.ts';
import {useCallback} from 'react';

type TodoRepository = {
  [id: number]: Todo;
};
type TodoBoxProps = {
  todos: TodoRepository,
  filter: TodoFilterEnum,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void,
};
const TodoBox = ({ todos, filter, removeTodo, handleToggleCompletion }: TodoBoxProps) => {
  const getAllTodos = useCallback(() => {
    return Object.values(todos);
  }, [todos]);
  const getCompletedTodos = useCallback(() => {
    return Object.values(todos).filter((todo) => todo.isCompleted);
  }, [todos]);
  const getActiveTodos = useCallback(() => {
    return Object.values(todos).filter((todo) => ! todo.isCompleted);
  }, [todos])
  const getFilteredTodos = useCallback(() => {
    if(filter === TodoFilterEnum.TODO_FILTER_ALL) return getAllTodos();
    return filter === TodoFilterEnum.TODO_FILTER_ACTIVE ? getActiveTodos() : getCompletedTodos();
  }, [todos, filter]);
};
export default TodoBox;
