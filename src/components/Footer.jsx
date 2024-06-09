import React from 'react';

// 필터 함수
const Footer = ({ setFilter, filter, totalCount }) => (
  <footer>
    <span>{totalCount} items left</span>
    <button onClick={() => setFilter('all')} disabled={filter === 'all'}>All</button>
    <button onClick={() => setFilter('active')} disabled={filter === 'active'}>Active</button>
    <button onClick={() => setFilter('completed')} disabled={filter === 'completed'}>Completed</button>
  </footer>
);

export default Footer;
