import TodoFilterEnum from '../../constants/TodoFilterEnum';

import styles from '../../css/todo.module.css';

type TodoButtonBarProps = {
  activeCount: number,
  filter: TodoFilterEnum,
  setFilter: (filter: TodoFilterEnum) => void,
  removeCompleteTodos: () => void
};
type TodoFilterButtonProps = {
  filter: TodoFilterEnum,
  setFilter: (filter: TodoFilterEnum) => void,
  filterTarget: TodoFilterEnum
}
type TodoButtonContainerProps = {
  filter: TodoFilterEnum,
  setFilter: (filter: TodoFilterEnum) => void
}
const TodoButtonContainer = ({ filter, setFilter }: TodoButtonContainerProps) => {
  return <div className={styles.todoBtnContainer}>
    <TodoFilterButton setFilter={setFilter} filter={filter} filterTarget={TodoFilterEnum.TODO_FILTER_ALL} />
    <TodoFilterButton setFilter={setFilter} filter={filter} filterTarget={TodoFilterEnum.TODO_FILTER_ACTIVE} />
    <TodoFilterButton setFilter={setFilter} filter={filter} filterTarget={TodoFilterEnum.TODO_FILTER_COMPLETED} />
  </div>
}
const TodoFilterButton = ({ filter, setFilter, filterTarget }: TodoFilterButtonProps) => {
  const btnClassName = filter === filterTarget ? `${styles.todoBtn} ${styles.todoBtnSelected}` : styles.todoBtn;
  return <button onClick={() => setFilter(filterTarget)} className={btnClassName}>
    { filterTarget }
  </button>
}
const TodoButtonBar = ({ activeCount, filter, setFilter, removeCompleteTodos }: TodoButtonBarProps) => {
  return <div className={styles.todoBtnBar}>
    <p>{ activeCount } items left!</p>
    <TodoButtonContainer filter={filter} setFilter={setFilter} />
    <p onClick={removeCompleteTodos} className={styles.clearText}>Clear completed</p>
  </div>
};
export default TodoButtonBar;
