import { useContext } from 'react';
import styles from './Filters.module.css';
import FilterItem from './FilterItem/FilterItem';
import TodoContext from '../../../context/TodoContext';

const Filters = () => {
  const value = useContext(TodoContext);

  return (
    <ul className={styles.filters}>
      <FilterItem
        onClick={() => value?.actions.selectFilter('all')}
        selected={value?.state.filter === 'all'}
        label="All"
      />
      <FilterItem
        onClick={() => value?.actions.selectFilter('active')}
        selected={value?.state.filter === 'active'}
        label="Active"
      />
      <FilterItem
        onClick={() => value?.actions.selectFilter('completed')}
        selected={value?.state.filter === 'completed'}
        label="Completed"
      />
    </ul>
  );
};

export default Filters;
