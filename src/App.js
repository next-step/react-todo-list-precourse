import React,{useState} from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [todolist, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  const addTodo = (todo) => setTodos([...todolist, {text : todo, completed:false}])

  const toggleTodo = (index) => {
    const newTodos = [...todolist];
    newTodos[index].completed =!newTodos[index].completed
    setTodos(newTodos)
  }

  const deleteTodo = (index) => {
    const newTodos = [...todolist]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const getFilteredTodos = () => todolist.filter(todo => {
    if (filter === 'active') return !todo.completed
    if (filter === 'completed') return todo.completed
    return true
  })

  const clearCompleted = () => {
    const newTodos = todolist.filter(todo => !todo.completed);
    setTodos(newTodos);
  }

  return React.createElement(
    'div', null,
    React.createElement('header', null, React.createElement('p', null, 'todos')),
      React.createElement('div', { className: 'todoListBody' },
        React.createElement(InputField, {addTodo}),
        React.createElement(TodoList, {todolist: getFilteredTodos(), toggleTodo, deleteTodo, setFilter, clearCompleted})
      ),
    React.createElement(Footer, null)
  )
}

export default App;
