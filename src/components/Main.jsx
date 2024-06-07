import React,{useState} from 'react'
import '../styles/Main.css'
import TodoForm from './TodoForm.jsx'
import TodoLists from './TodoLists.jsx'

function Main() {
  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState([]);
  const handleSubmit = (e) => {
    if(value.trim() !== "") {
      e.preventDefault();
      setTodoData(prev => [...prev, {id: Date.now(), title: value, completed: false}]);
      setValue("");
    }
  }
  
  return (
    <div className = "container">
      <div className = "title"> Todos</div>
      <TodoForm handleSubmit={handleSubmit} value = {value} setValue = {setValue}/>
      <TodoLists todoData = {todoData} setTodoData={setTodoData}/>
    </div>
  )
}

export default Main