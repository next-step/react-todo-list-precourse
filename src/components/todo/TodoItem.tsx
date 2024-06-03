import Todo from '../../models/Todo';
import closeIcon from '../../assets/icon_close.svg';
import { ChangeEvent } from 'react';

import styles from '../../css/todo.module.css';

type TodoItemProps = {
  todo: Todo,
  removeTodo: (id: number) => void,
  handleToggleCompletion: (todo: Todo) => void;
};

type TodoContentTextProps = {
  content: string
};

const TodoContentText = ({ content }: TodoContentTextProps) => {
  return <div className={styles.todoContent}>
    <p>{ content }</p>
  </div>
};
const TodoItem = ({ todo, removeTodo, handleToggleCompletion }: TodoItemProps) => {
  const onCheckChange = (e: ChangeEvent<HTMLInputElement>) => {
    todo.isCompleted = e.target.checked;
    handleToggleCompletion(todo);
  };
  return <div className={styles.todoItem}>
    <input type='checkbox' defaultChecked={todo.isCompleted} onChange={onCheckChange} className={styles.todoCheckbox}/>
    <TodoContentText content={todo.content} />
    <img alt='close' src={closeIcon} onClick={() => removeTodo(todo.id)} className={styles.todoCloseIcon}/>
  </div>
};
export default TodoItem;
