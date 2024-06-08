import { TodoListItemTypes } from '../TodoContext';

export const removeTodo = (
  todoList: TodoListItemTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItemTypes[]>>,
  no: number,
) => {
  const updatedTodoList = todoList.filter(todoListItem => todoListItem.no !== no);
  setTodoList(updatedTodoList);
};
