import React from 'react';

export default function FilterButtons({ setFilter, currentFilter }) {
  return createFilterButtons(setFilter, currentFilter);
}

function createFilterButtons(setFilter, currentFilter) {
  return React.createElement(
    'div',
    { className: 'filter-btns' },
    createButton('진행 중', 'active', setFilter, currentFilter),
    createButton('완료', 'completed', setFilter, currentFilter),
    createButton('모두', 'all', setFilter, currentFilter)
  );
}

function createButton(text, filter, setFilter, currentFilter) {
  return React.createElement(
    'button',
    {
      onClick: () => setFilter(filter),
      disabled: currentFilter === filter
    },
    text
  );
}