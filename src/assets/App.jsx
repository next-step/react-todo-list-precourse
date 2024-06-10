import { useState } from 'react'
import './App.css'
import ListContainer from '../components/ListContainer'
import InputForm from '../components/InputForm'

function App() {
    const [Todo, setTodo] = useState([]);

    //할 일 상태 전환 함수
    const complete = (index) => {
        const todoList = [...Todo];
        todoList[index].completed = !todoList[index].completed;
        setTodo(todoList);
    };


  return (
      <div className='board'> 
        <div className='title'>todos</div>
          <InputForm
              Todo={Todo}
              setTodo={setTodo}
          />
      </div>
  )
}

export default App
