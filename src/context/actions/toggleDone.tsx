import { TodoListItemTypes } from '../TodoContext';

export const toggleDone = (
  todoList: TodoListItemTypes[],
  setTodoList: React.Dispatch<React.SetStateAction<TodoListItemTypes[]>>,
  no: number,
) => {
  const updatedTodoList = todoList.map(todoListItem =>
    todoListItem.no === no ? { ...todoListItem, done: !todoListItem.done } : todoListItem,
  );
  setTodoList(updatedTodoList);
};
