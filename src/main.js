import React,{useState, useEffect} from 'react'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import './main.css'

function main() {
  const [todolist, setTodos] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    const storedTodos = localStorage.getItem('todolist');
    if (storedTodos)
      setTodos(JSON.parse(storedTodos))
  }, [])

  useEffect(() => localStorage.setItem('todolist', JSON.stringify(todolist)), [todolist])

  const addTodo = (todo) => setTodos([...todolist, {text : todo, completed:false}])

  const toggleTodo = (index) => {
    const newTodos = [...todolist]
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
    const newTodos = todolist.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  return React.createElement(
    'div', null,
    React.createElement('header', null, React.createElement('p', null, 'todos')),
      React.createElement('div', { className: 'todoListBody' },
        React.createElement(InputField, {addTodo}),
        React.createElement(TodoList, {todolist: getFilteredTodos(), toggleTodo, deleteTodo, setFilter, clearCompleted, showFooter: todolist.length > 0})
      ),
    React.createElement(Footer, null)
  )
}

export default main;
