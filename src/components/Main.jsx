import React,{useState} from 'react'
import '../styles/Main.css'
import TodoForm from './TodoForm.jsx'
import TodoLists from './TodoLists.jsx'
import handleFormSubmit from '../utils/handleFormSubmit'

function Main() {
  const [value, setValue] = useState("");
  const [todoData, setTodoData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    value.trim() !== "" ? handleFormSubmit(setTodoData,value,setValue) : alert("할 일을 입력해주세요!")
  }

  return (
    <div className = "container">
      <div className = "title"> Todos </div>
      <TodoForm handleSubmit={handleSubmit} value = {value} setValue = {setValue}/>
      <TodoLists todoData = {todoData} setTodoData={setTodoData}/>
    </div>
  )
}

export default Main