import TodoFilterEnum from '../../constants/TodoFilterEnum';

type TodoButtonBarProps = {
  activeCount: number,
  setFilter: (filter: TodoFilterEnum) => void,
  removeCompleteTodos: () => void
};
type TodoFilterButtonProps = {
  setFilter: (filter: TodoFilterEnum) => void,
  filterTarget: TodoFilterEnum
}
const TodoFilterButton = ({ setFilter, filterTarget }: TodoFilterButtonProps) => {
  return <button onClick={() => setFilter(filterTarget)}>
    { filterTarget }
  </button>
}
const TodoButtonBar = ({ activeCount, setFilter, removeCompleteTodos }: TodoButtonBarProps) => {
  return <div>
    <p>{ activeCount } items left!</p>
    <TodoFilterButton setFilter={setFilter} filterTarget={TodoFilterEnum.TODO_FILTER_ALL} />
    <TodoFilterButton setFilter={setFilter} filterTarget={TodoFilterEnum.TODO_FILTER_ACTIVE} />
    <TodoFilterButton setFilter={setFilter} filterTarget={TodoFilterEnum.TODO_FILTER_COMPLETED} />
    <p onClick={removeCompleteTodos}>Clear completed</p>
  </div>
};
export default TodoButtonBar;
