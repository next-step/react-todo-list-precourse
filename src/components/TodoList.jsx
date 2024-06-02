import React, { useEffect, useState } from 'react';
import Item from './Item';
import './todoList.css';

export default function TodoList({ itemList, updateItemList, mode, updateNumber }) {
  const [todoList, setTodoList] = useState(itemList);

  useEffect(() => {
    setTodoList(itemList);
    updateNumber();
  }, [itemList]);

  const deleteItem = (id) => {
    const newItemList = itemList.filter((item) => item.id !== id); // 삭제된 아이템을 제외
    setTodoList(newItemList);
    updateItemList(newItemList); // 부모에 전달
  };

  const updateItem = (updatedItem) => {
    const updatedList = itemList.map((item) => (item.id === updatedItem.id ? updatedItem : item)); // 업데이트된 아이템으로 리스트 업데이트
    setTodoList(updatedList);
    updateItemList(updatedList); // 부모에 전달
  };

  const renderList = () => {
    if (mode === 1) {
      // all
      return todoList.map((todoItem) => (
        <Item key={todoItem.id} item={todoItem} updateItem={updateItem} onDelete={deleteItem} updateNumber={updateNumber} />
      ));
    } else if (mode === 2) {
      // active
      const active = todoList.filter((todoItem) => !todoItem.checked);
      return active.map((todoItem) => (
        <Item key={todoItem.id} item={todoItem} updateItem={updateItem} onDelete={deleteItem} updateNumber={updateNumber} />
      ));
    } else if (mode === 3) {
      // completed
      const completed = todoList.filter((todoItem) => todoItem.checked);
      return completed.map((todoItem) => (
        <Item key={todoItem.id} item={todoItem} updateItem={updateItem} onDelete={deleteItem} updateNumber={updateNumber} />
      ));
    }
  };

  return <div className='todoList'>{renderList()}</div>;
}
