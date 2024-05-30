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
const TodoButtonBar = ({ activeCount, setFilter }: TodoButtonBarProps) => {
  return <div>
    <p>{ activeCount } items left!</p>
  </div>
};
export default TodoButtonBar;
