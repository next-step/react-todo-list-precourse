import { useState } from 'react';
import styles from './Filters.module.css';

const Filters = () => {
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  return (
    <ul className={styles.filters}>
      <li onClick={() => setFilter('all')} className={filter === 'all' ? styles.selected : ''}>
        All
      </li>
      <li
        onClick={() => setFilter('active')}
        className={filter === 'active' ? styles.selected : ''}
      >
        Active
      </li>
      <li
        onClick={() => setFilter('completed')}
        className={filter === 'completed' ? styles.selected : ''}
      >
        Completed
      </li>
    </ul>
  );
};

export default Filters;
