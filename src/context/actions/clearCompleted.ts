import { TodoListItemTypes } from '../TodoContext';

export const clearCompleted = (
  todoList: TodoListItemTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItemTypes[]>>,
) => {
  const updatedTodoList = todoList.filter(todoListItem => !todoListItem.done);
  setTodoList(updatedTodoList);
};
