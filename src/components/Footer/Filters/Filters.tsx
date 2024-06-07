import { useState } from 'react';
import styles from './Filters.module.css';
import FilterItem from './FilterItem/FilterItem';

const Filters = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  return (
    <ul className={styles.filters}>
      <FilterItem onClick={() => setFilter('all')} selected={filter === 'all'} label="All" />
      <FilterItem
        onClick={() => setFilter('active')}
        selected={filter === 'active'}
        label="Active"
      />
      <FilterItem
        onClick={() => setFilter('completed')}
        selected={filter === 'completed'}
        label="Completed"
      />
    </ul>
  );
};

export default Filters;
