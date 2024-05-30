import Todo from '../../models/Todo.ts';

type TodoItemProps = {
  todo: Todo,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void;
};
const TodoItem = ({ todo, removeTodo, handleToggleCompletion }: TodoItemProps) => {
  const onCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todo.isCompleted = e.target.checked;
  };
  return <div>
    <input type='checkbox' defaultChecked={todo.isCompleted} onChange={onCheckChange}/>
    { todo.content }
  </div>
};
export default TodoItem;
