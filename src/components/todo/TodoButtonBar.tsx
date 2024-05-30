import TodoFilterEnum from '../../constants/TodoFilterEnum';

type TodoButtonBarProps = {
  activeCount: number,
  setFilter: (filter: TodoFilterEnum) => void,
  removeCompleteTodos: () => void
};
const TodoButtonBar = ({ activeCount, setFilter }: TodoButtonBarProps) => {
  return <div>
    <p>{ activeCount } items left!</p>
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
    <button>Clear Completed</button>
  </div>
};
export default TodoButtonBar;
