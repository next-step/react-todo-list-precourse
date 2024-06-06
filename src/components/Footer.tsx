import { Filter } from '../util/Filter';
import '../styles/Footer.css';

interface FooterProps {
  todos: any[];
  currentFilter: Filter;
  handleFilterChange: (filter: Filter) => void;
  clearCompleted: () => void;
}

const Footer: React.FC<FooterProps> = ({
  todos,
  currentFilter,
  handleFilterChange,
  clearCompleted,
}) => {
  if (todos.length === 0) return null;

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <ul className="filters">
        <li>
          <a
            className={currentFilter === Filter.All ? 'selected' : ''}
            onClick={() => handleFilterChange(Filter.All)}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={currentFilter === Filter.Active ? 'selected' : ''}
            onClick={() => handleFilterChange(Filter.Active)}
          >
            Active
          </a>
        </li>
        <li>
          <a
            className={currentFilter === Filter.Completed ? 'selected' : ''}
            onClick={() => handleFilterChange(Filter.Completed)}
          >
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
