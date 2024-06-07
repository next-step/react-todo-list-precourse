import React,{useState} from 'react'
import InputField from './components/InputField'
// import TodoList from './components/TodoList';
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
      React.createElement(InputField, {addTodo})
    //   // React.createElement(TodoList, null) // 주석 처리된 부분이므로 오류가 발생할 수 있습니다.
    ),
    React.createElement(Footer, null)
  )
}

export default App;
