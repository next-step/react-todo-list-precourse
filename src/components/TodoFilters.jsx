import React from 'react';

// 필터링 및 삭제 컴포넌트 
const TodoFilters = ({ filter, setFilter, deleteCompleted }) => (
  <div className='todo-filters'>
    <button onClick={() => setFilter('all')} className={['btn', filter === 'all' ? 'selected' : ''].join(' ')}>
      All
    </button>
    <button onClick={() => setFilter('active')} className={['btn', filter === 'active' ? 'selected' : ''].join(' ')}>
      Active
    </button>
    <button onClick={() => setFilter('completed')} className={['btn', filter === 'completed' ? 'selected' : ''].join(' ')}>
      Completed
    </button>
    <button className='btn' onClick={() => deleteCompleted()}>Delete completed tasks</button>
  </div>
);

export default TodoFilters;
