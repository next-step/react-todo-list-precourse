import React,{useState} from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [todolist, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos([...todolist, todo])
  }
  return React.createElement(
    'div', null,
    React.createElement(
      'header', null, React.createElement('p', null, 'todos')),
    React.createElement(
      'div', { className: 'todoListBody' },
      React.createElement(InputField, {addTodo}),
      React.createElement(TodoList, {todolist})
    ),
    React.createElement(Footer, null)
  )
}

export default App;
