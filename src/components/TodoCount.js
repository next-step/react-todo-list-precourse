import React from 'react';

export default function TodoCount({ count }) {
  return count > 0 ? createTodoCount(count) : null;
}

function createTodoCount(count) {
  return React.createElement('div', null, `해야할 일 : ${count}개`);
}