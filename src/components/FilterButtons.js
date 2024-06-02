import React from 'react';

export default function FilterButtons({ setFilter, currentFilter }) {
  return createFilterButtons(setFilter, currentFilter);
}

function createFilterButtons(setFilter, currentFilter) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: () => setFilter('active'),
        disabled: currentFilter === 'active'
      },
      '진행 중'
    ),
    React.createElement(
      'button',
      {
        onClick: () => setFilter('completed'),
        disabled: currentFilter === 'completed'
      },
      '완료'
    ),
    React.createElement(
      'button',
      {
        onClick: () => setFilter('all'),
        disabled: currentFilter === 'all'
      },
      '모두'
    ),
  );
}