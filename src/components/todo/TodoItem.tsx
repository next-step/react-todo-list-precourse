import Todo from '../../models/Todo.ts';

type TodoItemProps = {
  todo: Todo,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void;
};
const TodoItem = ({ todo, removeTodo, handleToggleCompletion }: TodoItemProps) => {
  return <div>
    { todo.content }
  </div>
};
export default TodoItem;
