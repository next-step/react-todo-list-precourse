import React,{useState} from 'react'
import '../styles/Main.css'
import TodoForm from './TodoForm.jsx'
import TodoLists from './TodoLists.jsx'

function Main() {
  const [value, setvalue] = useState("");

  return (
    <div className = "container">
      <div className = "title">
      Todos
      </div>
      <TodoForm value = {value} setValue = {setvalue}/>
      <TodoLists/>
    </div>
  )
}

export default Main