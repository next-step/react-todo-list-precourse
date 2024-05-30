import TodoFilterEnum from '../../constants/TodoFilterEnum';

import styles from '../../css/todo.module.css';

type TodoButtonBarProps = {
  activeCount: number,
  setFilter: (filter: TodoFilterEnum) => void,
  removeCompleteTodos: () => void
};
type TodoFilterButtonProps = {
  setFilter: (filter: TodoFilterEnum) => void,
  filterTarget: TodoFilterEnum
}
type TodoButtonContainerProps = {
  setFilter: (filter: TodoFilterEnum) => void
}
const TodoButtonContainer = ({ setFilter }: TodoButtonContainerProps) => {
  return <div className={styles.todoBtnContainer}>
    <TodoFilterButton setFilter={setFilter} filterTarget={TodoFilterEnum.TODO_FILTER_ALL} />
    <TodoFilterButton setFilter={setFilter} filterTarget={TodoFilterEnum.TODO_FILTER_ACTIVE} />
    <TodoFilterButton setFilter={setFilter} filterTarget={TodoFilterEnum.TODO_FILTER_COMPLETED} />
  </div>
}
const TodoFilterButton = ({ setFilter, filterTarget }: TodoFilterButtonProps) => {
  return <button onClick={() => setFilter(filterTarget)} className={styles.todoBtn}>
    { filterTarget }
  </button>
}
const TodoButtonBar = ({ activeCount, setFilter, removeCompleteTodos }: TodoButtonBarProps) => {
  return <div className={styles.todoBtnBar}>
    <p>{ activeCount } items left!</p>
    <TodoButtonContainer setFilter={setFilter} />
    <p onClick={removeCompleteTodos} className={styles.clearText}>Clear completed</p>
  </div>
};
export default TodoButtonBar;
