import React from 'react';

function ToggleItemCompletion({ onToggleItemCompletion, id, completed }) {
  const handleToggleCompletion = () => {
    onToggleItemCompletion(id);
  };

  return (
    <button onClick={handleToggleCompletion}>
      {completed ? '취소' : '완료'}
    </button>
  );
}

export default ToggleItemCompletion;