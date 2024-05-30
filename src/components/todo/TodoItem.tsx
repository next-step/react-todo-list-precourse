import Todo from '../../models/Todo.ts';
import icon_close from '../../assets/icon_close.svg';
import {ChangeEvent} from 'react';

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
  const onCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    todo.isCompleted = e.target.checked;
    handleToggleCompletion(todo);
  };
  return <div>
    <input type='checkbox' defaultChecked={todo.isCompleted} onChange={onCheckChange}/>
    <TodoContentText content={todo.content} />
    <img src={icon_close} onClick={() => removeTodo(todo.id)}/>
  </div>
};
export default TodoItem;
