import React from 'react';

// TodoCount 컴포넌트: 할 일의 총 개수를 표시하는 컴포넌트
function TodoCount({ count }) {
  return (
    <div>
      {count} {count === 1 ? 'item' : 'items'} left!
    </div>
  );
}

export default TodoCount;
