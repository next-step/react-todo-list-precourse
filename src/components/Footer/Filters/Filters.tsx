import { useContext } from 'react';
import styles from './Filters.module.css';
import FilterItem from './FilterItem/FilterItem';
import TodoContext, { FilterType } from '../../../context/TodoContext';

const filters: Array<{ label: string; value: FilterType }> = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

const Filters = () => {
  const value = useContext(TodoContext);

  return (
    <ul className={styles.filters}>
      {filters.map(filter => (
        <FilterItem
          key={filter.value}
          onClick={() => value?.actions.selectFilter(filter.value)}
          selected={value?.state.filter === filter.value}
          label={filter.label}
        />
      ))}
    </ul>
  );
};

export default Filters;
