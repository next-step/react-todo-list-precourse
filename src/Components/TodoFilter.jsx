import React from 'react';

const TodoFilter = ({listNum, setFilter,filter, clearCompleted}) => {
  const getCurrentCount = () => {
    switch (filter) {
      case 'all':
        return listNum.all;
      case 'active':
        return listNum.active;
      case 'completed':
        return listNum.completed;
      default:
        return listNum.all;
    }
  };
  return (
    <div id='todoFilter'>
      <span>{getCurrentCount()} item{getCurrentCount() !== 1 ? 's' : ''} left</span>
      <div id='filterbtns'>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>
      <button onClick={clearCompleted} id='clearbtn'>Clear Completed</button>
    </div>
  );
};

export default TodoFilter;