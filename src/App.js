import React from 'react';
import Header from './components/Header.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoList from './components/TodoList.jsx';
import Footer from './components/Footer.jsx';

function App() {
    return React.createElement(
      'div',
      { className: 'App' },
      React.createElement(Header, null),
      React.createElement(TodoItem, null),
      React.createElement(TodoList, null),
      React.createElement(Footer, null)
    );
  }

export default App;