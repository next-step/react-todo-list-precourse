import React, { useState, useEffect } from 'react';
import TodoBoard from './components/TodoBoard';
import AddItem from './components/AddItem';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState('all');
  const [totalTodos, setTotalTodos] = useState(0);

  useEffect(() => {
    loadTodoList();
  }, []);

  useEffect(() => {
    saveTodoList();
  }, [todoList]);

  const loadTodoList = () => {
    const savedTodoList = JSON.parse(localStorage.getItem('todoList'));
    if (savedTodoList) {
      setTodoList(savedTodoList);
      updateTotalTodos(savedTodoList);
    }
  };

  const saveTodoList = () => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  };

  const addItem = newItem => {
    setTodoList([...todoList, newItem]);
    updateTotalTodos([...todoList, newItem]);
  };

  const deleteItem = id => {
    const itemToDelete = todoList.find(item => item.id === id);
    const newTodoList = todoList.filter(item => item.id !== id);
    if (itemToDelete && !itemToDelete.completed) {
      updateTotalTodos(newTodoList);
    }
    setTodoList(newTodoList);
  };

  const toggleItemCompletion = id => {
    const newTodoList = todoList.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    updateTotalTodos(newTodoList);
    setTodoList(newTodoList);
  };

  const updateTotalTodos = list => {
    const remainingTodos = list.filter(item => !item.completed).length;
    setTotalTodos(remainingTodos);
  };

  const getFilteredTodoList = () => {
    if (filter === 'completed') {
      return todoList.filter(item => item.completed);
    } else if (filter === 'active') {
      return todoList.filter(item => !item.completed);
    } else {
      return todoList;
    }
  };

  return (
    <main>
      <AddItem onAddItem={addItem} />
      <div>
        <button onClick={() => setFilter('all')}>전체보기</button>
        <button onClick={() => setFilter('active')}>남은 할일</button>
        <button onClick={() => setFilter('completed')}>완료된 할일</button>
      </div>
      <p>남은 할 일 개수: {totalTodos}</p>
      <TodoBoard
        todoList={getFilteredTodoList()}
        deleteItem={deleteItem}
        toggleItemCompletion={toggleItemCompletion}
      />
    </main>
  );
}

export default App;