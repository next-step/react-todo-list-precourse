import React from 'react';

function DeleteItem({ onDeleteItem, id }) {
  const handleDeleteItem = () => {
    onDeleteItem(id);
  };

  return <button onClick={handleDeleteItem}>삭제</button>;
}

export default DeleteItem;