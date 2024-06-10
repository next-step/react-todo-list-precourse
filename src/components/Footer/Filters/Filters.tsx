import { useContext } from 'react';
import styles from './Filters.module.css';
import FilterItem from './FilterItem/FilterItem';
import TodoContext from '../../../context/TodoContext';
import { FILTERS } from '../../../utils/constants/filterConstants';

const Filters = () => {
  const value = useContext(TodoContext);

  return (
    <ul className={styles.filters}>
      {FILTERS.map(filter => (
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
