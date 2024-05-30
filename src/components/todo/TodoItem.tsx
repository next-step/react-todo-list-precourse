import Todo from '../../models/Todo.ts';
import icon_close from '../../assets/icon_close.svg';

type TodoItemProps = {
  todo: Todo,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void;
};

type TodoContentTextProps = {
  content: string
};

const TodoContentText = ({ content }: TodoContentTextProps) => {
  return <div>
    <p>{ content }</p>
  </div>
};
const TodoItem = ({ todo, removeTodo, handleToggleCompletion }: TodoItemProps) => {
  const onCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    todo.isCompleted = e.target.checked;
  };
  return <div>
    <input type='checkbox' defaultChecked={todo.isCompleted} onChange={onCheckChange}/>
    <TodoContentText content={todo.content} />
    <img src={icon_close} />
  </div>
};
export default TodoItem;
